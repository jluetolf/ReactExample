import React, {Component} from 'react';
//import axios from 'axios';


import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import {Route, NavLink, Switch, withRouter} from 'react-router-dom';

class Blog extends Component {


    render() {


        return (
            <div className='Blogs'>
                <header>
                    <nav>
                        <ul>
                            {/*<li><a href="/">Home</a></li>*/}
                            {/*<li><a href="/new-post">New Post</a></li>*/}
                            <li><NavLink to="/" exact activeClassName="my-active"> Home</NavLink></li>
                            {/*<li><Link to="/new-post">New Post</Link></li>*/}
                            <li><NavLink to={{
                                //pathname:'/new-post',
                                pathname: this.props.match.url + 'new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/*<Route path="/" exact render={() => <h1>Home</h1>} />*/}
                {/*<Route path="/hallo"  render={() => <h1>Home2</h1>} />*/}
                <Switch>
                        <Route path="/" exact component={Posts}/>
                        <Route path="/new-post" exact component={NewPost}/>
                        <Route path="/:id" exact component={FullPost}/>
                </Switch>

            </div>
        );
    }
}

export default withRouter(Blog);