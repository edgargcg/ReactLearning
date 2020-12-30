import React, {  useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategory }) => {
    const [inputValue, setInputValue] = useState('');
    
    const handleInputChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (inputValue.trim().length > 2){
            setCategory(inputValue);
            setInputValue('');
        }
    }

    return (    
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"  
                value={inputValue}
                placeholder="Category"
                onChange={ handleInputChange }
            />
        </form>
    )
}

CategoryAdd.propTypes = {
    setCategory: PropTypes.func.isRequired
}