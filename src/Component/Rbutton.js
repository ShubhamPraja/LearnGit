import React, { useState } from 'react'
import Job from '../Component/Job.jsx'
import Top from '../Component/Top.js'
import Show from '../Component/Show.js'
import Ask from '../Component/Ask.jsx'

export default function Rbutton() {

    const [fromData, setfromData] = useState({
        platform: 'top'
    })


    const handleChange = e => {
        const { name, value } = e.target;
        setfromData({
            [name]: value
        });

    };

    const Favs = () => {
        if (fromData.platform === "top") {
            return (
                <Top></Top>
            );
        }
        if (fromData.platform === "show") {
            return (<Show></Show>);
        }
        if (fromData.platform === "ask") {
            return (<Ask></Ask>);
        }
        else {
            return (<Job></Job>)
        }
    };


    return (
        <>
            <div className="radio-buttons">
                Top
        <input
                    value="top"

                    type="radio"
                    name="platform"
                    onChange={handleChange}
                    check="checked"

                ></input>
        Ask
        <input

                    value="ask"
                    name="platform"
                    type="radio"
                    onChange={handleChange}
                ></input>
        Show
        <input

                    value="show"
                    name="platform"
                    type="radio"
                    onChange={handleChange}

                ></input>
                  Jobs
        <input

                    value="job"
                    name="platform"
                    type="radio"
                    onChange={handleChange}
                    Component={Top}
                ></input>


            </div>
            <p>Type:{fromData.platform}</p>
            <Favs />

        </>

    )

}


