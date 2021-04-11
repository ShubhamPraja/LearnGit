import React, { useState, useEffect } from 'react'
import './Common.css'


export default function UserInfo() {
    const [posts, setPosts] = useState([]);



    useEffect(() => {
        fetch('https://hacker-news.firebaseio.com/v0/user/jl.json?print=pretty').then((data) => {
            data.json().then(result => {
                setPosts(result.data)
            })
        })

    }, []);
    return (
        <>
            {

                posts.id
            }
        </>
    )
}
