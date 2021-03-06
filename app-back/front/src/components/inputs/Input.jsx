import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    height: 38px;
    width: 190px;
    border-radius: 5px;
    border: 1px solid;
    border-color: var(--gray-light-2);
    padding: 0 10px;
    @media only screen and (max-width: 250px) {
        width: 90%;
    }
`;
function Input({
    id,
    type,
    value,
    handleChange,
    placeholder ='',
}) {
    return (
        <StyledInput
            id={id}
            name={id}
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={handleChange} />
    );
}

export default Input;