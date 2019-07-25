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

class App extends Component {

    render() {
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
        serverList: state.serverList,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onUpdatedServerList: (serverList) => dispatch({type: 'UPDATE_SERVER_LIST', value: serverList}),

    };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);


