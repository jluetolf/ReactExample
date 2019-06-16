import React, {Component} from 'react';
import './App.css';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import Overview from './components/Overview/Overview';
import NodeDetail from './components/NodeDetail/NodeDetail';
import XMLDisplay from './components/XMLDisplay/XMLDisplay';

class App extends Component {

    render() {
        return (

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
        );
    }
}

export default App;

