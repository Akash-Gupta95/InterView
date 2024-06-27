import React, { useState, createContext } from 'react';
import App from '../App.jsx';

export const multiStepContext = createContext();

const StepContent = () => {
   

    return (
        <multiStepContext.Provider >
            <App />
        </multiStepContext.Provider>
    );
}

export default StepContent;