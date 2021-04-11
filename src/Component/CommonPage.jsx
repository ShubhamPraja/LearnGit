import React, { useState, useEffect } from 'react'
import './Common.css'
import Top from '../Component/Top'
import Show from '../Component/Show'
import Job from '../Component/Job'

export default function CommonPage() {

    const bar = {
        width: '100%',
        fontSize: '16px',
        border: '2px solid #ccc',
        padding: '5px 5px'

    };

    const [data, setData] = useState({
        type: "Top"
    })

    useEffect(() => {
        handleChange();
    }, []);

    const handleChange = event => {
        setData({
            data
        })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1>Hacker Live</h1>
                    </div>
                    <div className="col-md-6">
                        <input type="text" placeholder="Search by Title" style={bar}></input>
                    </div>
                    <div className="col-md-6 mt-2" >
                        <input type="radio" id="top" name="type"
                            onclick={handleChange}
                            className="form-check-input" value="Top"></input>
                        <label for="top">Top</label>
                        <input type="radio" id="ask" name="type"
                            onchange={handleChange} className="form-check-input" value="Ask"></input>
                        <label class="form-check-label" for="ask">Ask</label>
                        <input type="radio" id="show" name="type"
                            onchange={handleChange}
                            className="form-check-input" value="Show"></input>
                        <label for="show">Show</label>
                        <input type="radio" id="jobs" name="type"
                            onchange={handleChange}
                            className="form-check-input" value="Jobs"></input>
                        <label for="jobs">Jobs</label>
                    </div>
                </div>
            </div>
        </>
    )
}
