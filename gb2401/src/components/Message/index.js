import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { useContext } from 'react';
import { ThemeContext } from '../utils/ThemeContext';

export const Message = ({ text, author }) => {
    const contextValue = useContext(ThemeContext);
    return (
    <div>
    <span>
        {author}: {text}
    </span>
    </div>
);
};

Message.propTypes = {
    text: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
};