import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import Overview from './components/Overview/Overview';
import NodeDetail from './components/NodeDetail/NodeDetail';
import XMLDisplay from './components/XMLDisplay/XMLDisplay';
import Summary from './components/Summary/Summary';
import {connect} from "react-redux";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AlertDialog from "./components/AlertDialog/AlertDialog";
import moment from 'moment';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#007bc0"
        },
        secondary: {
            main: "#dc001b"
        },
        text: {
            primary: "#666"
        }

    }
} );


class ServerItem {
    label = null;
    value = null;
}

class App extends Component {

    fromDate = new Date();
    toDate = new Date();
    forceRefresh = null;

    dateFormat = 'DD.MM.YYYY';

    initializeOrchestrationList = () => {
        if ( this.fromDate !== this.props.startDate || this.toDate !== this.props.endDate || this.forceRefresh != this.props.forceRefresh) {

            this.fromDate = this.props.startDate;
            this.toDate = this.props.endDate;


            const dateRange = {
                fromDate:  moment(this.props.startDate).format(this.dateFormat),
                toDate: moment(this.props.endDate).format(this.dateFormat)
            }


            this.props.axiosinstance.post('/orchestrations', dateRange)
                .then(response => {
                    if (JSON.stringify(this.props.orchestrationList) !== JSON.stringify(response.data)) {
                        this.props.onUpdatedOrchestrationList(response.data);
                    }
                })
                .catch(error => {
                    if (this.props.error !== error) {
                        this.props.onUpdateError(error.toString());
                    }
                });
        }
    };

    initializeServerList = () => {

        if ((this.props.serverList.length === 0 && this.props.error === null) || this.forceRefresh != this.props.forceRefresh) {
            this.props.axiosinstance.get('servers')
                .then(response => {

                    let serverList = [];
                    let labelList = [];
                    let valueList = [];

                    switch (this.props.selectedOrchestrationType) {
                        case 'Full':
                        {
                            labelList = response.data.drf.servicelabel;
                            labelList = [...labelList, ...response.data.dsf.servicelabel];
                            labelList = [...labelList, ...response.data.ss7f.servicelabel];
                            labelList = [...labelList, ...response.data.dnsf.servicelabel];

                            valueList = response.data.drf.service;
                            valueList = [...valueList, ...response.data.dsf.service];
                            valueList = [...valueList, ...response.data.ss7f.service];
                            valueList = [...valueList, ...response.data.dnsf.service];
                            break;
                        }
                        case 'DRF':
                        {
                            labelList = response.data.drf.servicelabel;
                            valueList = response.data.drf.service;
                            break;
                        }
                        case 'DSF':
                        {
                            labelList = response.data.dsf.servicelabel;
                            valueList = response.data.dsf.service;
                            break;
                        }
                        case 'SS7F':
                        {
                            labelList = response.data.ss7f.servicelabel;
                            valueList = response.data.ss7f.service;
                            break;
                        }
                        case 'DNSF':
                        {
                            labelList = response.data.dnsf.servicelabel;
                            valueList = response.data.dnsf.service;
                            break;
                        }
                    }

                    for (var i = 0; i < labelList.length; ++i) {
                        let serverItem = new ServerItem();
                        serverItem.label = labelList[i];
                        serverItem.value = valueList[i];


                        const item = serverList.find(x => {
                            return x.value === serverItem.value;
                        });

                        if (!item) {
                            serverList.push(serverItem);
                        }
                    }

                    this.props.onUpdatedServerList(serverList);
                })
                .catch(error => {
                    this.props.onUpdateError(error.toString());
                });
        }
    }

    initializeStore = () => {
        this.initializeServerList();
        this.initializeOrchestrationList();
        this.forceRefresh = this.props.forceRefresh;
    }

    componentDidMount() {
        this.initializeStore();
    }

    componentDidUpdate() {
        this.initializeStore();
    }

    handleClose = () => {
        this.props.onUpdateError(null);

    }

    render() {

        let errorMessage = null;
        if (this.props.error != null && this.props.error.length > 0){
            errorMessage = <AlertDialog title="Orchestration Error" message={this.props.error} handleClose={this.handleClose} />
        }

        return (

            <MuiThemeProvider theme={theme}>
                {errorMessage}

            <BrowserRouter>
                <div className="App">
                    <header>
                        <nav>
                            <ul>
                                {/*<li><a href="/">Home</a></li>*/}
                                {/*<li><a href="/new-post">New Post</a></li>*/}
                                <li><NavLink to="/" exact activeClassName="my-active"> Home</NavLink></li>
                                {/*<li><Link to="/new-post">New Post</Link></li>*/}
                                {/*<li><NavLink to={{*/}
                                {/*//pathname:'/new-post',*/}
                                {/*pathname: this.props.match.url + 'new-post',*/}
                                {/*hash: '#submit',*/}
                                {/*search: '?quick-submit=true'*/}
                                {/*}}>New Post</NavLink></li>*/}
                            </ul>
                        </nav>
                    </header>
                    <Switch>
                        <Route path="/xml" exact component={XMLDisplay}/>
                        <Route path="/" exact component={Overview}/>
                        <Route path="/detail/:id" exact component={NodeDetail}/>
                        <Route path="/summary/:id" exact component={Summary}/>
                        {/*<Route path="/:nodeType/:cluster/:id" exact component={NodeDetail}/>*/}
                        {/*<Route path="/:id" exact component={FullPost}/>*/}
                    </Switch>
                </div>

                 </BrowserRouter>
            </MuiThemeProvider>
        );
    }
}



const mapStateToProps = state => {
    return {
        orchestrationList: state.orchestrationList,
        startDate: state.startDate,
        endDate: state.endDate,
        selectedOrchestrationType: state.selectedOrchestrationType,
        serverList: state.serverList,
        axiosinstance: state.axiosinstance,
        error: state.error,
        forceRefresh: state.forceRefresh
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdatedServerList: (serverList) => dispatch({type: 'UPDATE_SERVER_LIST', value: serverList}),
        onUpdateError: (error) => dispatch({type: 'UPDATE_ERROR', value: error}),
        onUpdatedOrchestrationList: (orchestrationList) => dispatch({
            type: 'UPDATE_ORCHESTRATION_LIST',
            value: orchestrationList
        })
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


