import React from 'react';
import Post from './Post/Post'
import useStyles from './styles';

const Posts = () => {
    const classes = useStyle();

    return (
        <>
        <h1>POSTS</h1>
        <Post />
        <Post />
        </>
    )
}

export default Posts;