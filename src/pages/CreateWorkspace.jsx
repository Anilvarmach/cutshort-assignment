import React from 'react'
import Button from '../components/Button'

const CreateWorkspace = () => {
    return (
        <div className="form-step" >
             <div className='text-center'>
                <h1>Let's set up a home for all your work</h1>
                <h6>You can always create another workspace later</h6>
            </div>
            <div className="input-group">
                <label htmlFor="workspaceName">Workspace Name</label>
                <input type="text" name="workspaceName" id="workspaceName" placeholder='Eden'/>
            </div>
            <div className="input-group">
                <label htmlFor="workspaceURL">Workspace URL <small>(Optional)</small></label>
                <input type="text" name="workspaceURL" id="workspaceURL" placeholder='www.eden.com/  Example'/>
            </div>
           <Button>Create Workspace</Button>
        </div>
    )
}

export default CreateWorkspace