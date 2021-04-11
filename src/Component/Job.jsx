
import React, { useState, useEffect } from 'react'

export default function Job() {

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        async function getTopStories() {
            const url = "https://hacker-news.firebaseio.com/v0/jobstories.json?print=pretty";
            try {
                const response = await fetch(url);
                if (response.ok === false) {
                    throw new Error("Response Error:" + response.text);
                }
                const json = await response.json();
                const promises = json
                    .slice(0, 10)
                    .map(id =>
                        fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(
                            response => response.json()
                        )
                    );
                const result = await Promise.all(promises);
                setPosts(result);
            } catch (err) {
                console.error(err);
            }
        }
        getTopStories();
    }, []);

    return (
        <table>
            <tbody>
                <tr className="athing">
                    {
                        posts.map(post => (
                            <tr key={post.id}>
                                <tr>
                                    <td className="title"><span className="rank">{post.id}</span></td>
                                    <td className="title">{post.title}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td className="subtext">
                                        <span className="score">{post.score}</span>
                            by
                            <a href="user?id= " class="hnuser">{post.by}</a>
                                        <span className="age">{post.time}</span>
                                    </td>
                                </tr>
                            </tr>
                        ))}
                </tr>
            </tbody>
        </table >
    )
}
