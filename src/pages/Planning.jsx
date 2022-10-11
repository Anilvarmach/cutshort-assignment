import React,{useState} from 'react'
import Button from '../components/Button'

const Planning = () => {
    const [isActiveA, setIsActiveA] = useState(true);
    const [isActiveB, setIsActiveB] = useState(false);

const handleActiveClassA = () =>{
    setIsActiveA(true);
    setIsActiveB(false)
}

const handleActiveClassB = () =>{
    setIsActiveA(false);
    setIsActiveB(true)
}
 
    return (
        <div className="form-step">
            <div className='text-center'>
                <h1>How are you planning to use Eden?</h1>
                <h6>we'll streamline your setup experience accordingly.</h6>
            </div>
            <div className="planning-section">
                <div onClick={handleActiveClassA}  className={isActiveA ? 'plan active': 'plan'}>
                    <i className="fa-solid fa-user"></i>
                    <h4>For myself</h4>
                    <p>Write better. Think more clearly, Stay organized</p>
                </div>
                <div  onClick={handleActiveClassB}  className={isActiveB ? 'plan active': 'plan'}>
                    <i className="fa-solid fa-users"></i>
                    <h4>With my team</h4>
                    <p>Wikis,docs,tasks & projects, all in one place</p>
                </div>
            </div>
            <Button>Create Workspace</Button>
        </div>
    )
}

export default Planning