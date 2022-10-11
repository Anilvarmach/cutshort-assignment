import React from 'react'

const Progressbar = () => {
    return (
        <div className="progressbar">
            <div className="progress" id="progress"></div>

            <div
                className="progress-step progress-step-active"

            ></div>
            <div className="progress-step" ></div>
            <div className="progress-step" ></div>
            <div className="progress-step" ></div>
        </div>
    )
}

export default Progressbar