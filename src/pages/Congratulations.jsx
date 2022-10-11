import React from 'react'

const Congratulations = () => {
    return (
        <div className="form-step">
            <div className='heading-section'>
              <span className='icons'><i className="fa-solid fa-check"></i></span>
                <h1>Congratulations, Eren!</h1>
                <h6>You have completed onboarding, you can start using the Eden!</h6>
            </div>
            <button type='button' className='btn'>Lunch Eden</button>
        </div>
    )
}

export default Congratulations