import { useState } from 'react';
import './style.css';

export const Form = ({ onSubmit }) => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(value);
        setValue("");
    }
    
    return(
        <form onSubmit={handleSubmit}>
            <input className='field' value={value} onChange={handleChange} type='text' />
            <input className='btn' type='submit' />
        </form>
    );
};