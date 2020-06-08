import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'

class Home extends Component{
    state={
        posts:[]
    }
    async componentDidMount(){
       let res=await axios.get('https://jsonplaceholder.typicode.com/posts');
       //console.log(res)
       this.setState({
           posts:res.data.slice(0,10)
       })
    }
    render(){
        const {posts}=this.state;
        const postList=posts.length ? (
            posts.map((post)=>{
                return(
                <div className="post card" key={post.id}>
                    <div className="card-content">
                        <span className="card-title"><Link to={`/${post.id}`}>{post.title}</Link></span>
                        <p>{post.body}</p>
                    </div>
                </div>
                )
            })
        ) : (
            <div className="center">No posts yet!</div>
        );
        return(
            <div className="container">
                <h1 className="center">Home</h1>
                {postList}
            </div>
        )
    }
}

export default Home;