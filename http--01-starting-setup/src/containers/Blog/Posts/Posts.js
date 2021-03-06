import React, {Component} from 'react';
import Post from '../../../components/Post/Post';
import axiosinstance from "../../../axios";
import './Posts.css';
import {Link} from 'react-router-dom';


class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axiosinstance.get('/posts')
            .then(response => {
                const posts = response.data.slice(94, 110);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });

                this.setState({posts: updatedPosts});
                console.log(response);
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    postSelectedHandler(id) {

        this.setState({selectedPostId: id});
    }


    render() {

        let posts = <p style={{textAlign: 'center'}}>Something went wrong</p>;
        if (!this.state.error)
            posts = this.state.posts.map(post => {
                return (
                    <Link to={'/' + post.id} key={post.id}>
                        <Post
                            title={post.title} author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)}/>;
                    </Link>
                )

            });

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;

