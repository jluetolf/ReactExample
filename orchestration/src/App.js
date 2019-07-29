import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import Overview from './components/Overview/Overview';
import NodeDetail from './components/NodeDetail/NodeDetail';
import XMLDisplay from './components/XMLDisplay/XMLDisplay';
import {connect} from "react-redux";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';


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

    initializeStore = () => {

        if (this.props.serverList.length === 0 && this.props.error === null) {
            this.props.axiosinstance.get('ManagementServers')
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

    render() {

        this.initializeStore();
        return (

            <MuiThemeProvider theme={theme}>

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
        selectedOrchestrationType: state.selectedOrchestrationType,
        serverList: state.serverList,
        axiosinstance: state.axiosinstance,
        error: state.error
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdatedServerList: (serverList) => dispatch({type: 'UPDATE_SERVER_LIST', value: serverList}),
        onUpdateError: (error) => dispatch({type: 'UPDATE_ERROR', value: error})

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


