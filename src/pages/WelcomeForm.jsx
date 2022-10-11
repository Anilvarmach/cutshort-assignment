import React from 'react'
import Button from '../components/Button'

const WelcomeForm = () => {
    return (
        <div className="form-step form-step-active">
            <div className='text-center'>
                <h1>Welcome! First thinngs first...</h1>
                <h6>You can always change them later</h6>
            </div>
            <div className="input-group">
                <label htmlFor="fullName">Full Name</label>
                <input type="text" name="fullName" id="fullName" placeholder='steve Jobs' />
            </div>
            <div className="input-group">
                <label htmlFor="displayName">Display Name</label>
                <input type="text" name="displayName" id="displayName" placeholder='steve' />
            </div>
            <Button>Create Workspace</Button>
        </div>
    )
}

export default WelcomeForm