import React from 'react';
import {useState, useEffect} from 'react';
import './Input.scss';

const Input = () => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const handleSubmit = (e) =>{
        e.preventDefault();
        checkInput();
    }

    const checkInput = () =>{
        if(emailRegex.test(input) === false ){
            setError(true);
        } else {
            setError(false);
            setInput('')
        }
    }

    useEffect(() =>{
        setError(false);
    }, [input]);

    useEffect(() =>{
        const emailInput = document.getElementById('emailInput');
        const errorID = document.getElementById('error-active').id;
        const ariaInput = () =>{
            if(error){
                emailInput.setAttribute("aria-invalid", "true");
                emailInput.setAttribute("aria-describedBy", errorID);
            } else if(error !== true && emailInput.hasAttribute("aria-invalid")){
                emailInput.removeAttribute("aria-invalid");
                emailInput.removeAttribute("aria-describedBy");
            }
        };
        ariaInput();
    }, [error]);

    return (
        <section>
            <form className='input-field' onSubmit={handleSubmit}>
                <div className='main-form'>
                    <input  className={error === false ? 'input' : 'input-failed'} 
                    id='emailInput'
                    value={input}
                    onChange={(event) => setInput(event.target.value)}  
                    aria-label='Enter email address'
                    placeholder='Email address'>
                    </input>
                    <p className={error === false ? 'error' : 'error-active'}
                    id='error-active'>Oops! That doesn’t look like an email address</p>
                </div>
                <button type='submit'>
                        Notify Me
                </button>
            </form>
        </section>
    );
}
 
export default Input;