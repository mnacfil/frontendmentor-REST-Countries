import React from 'react'
import ErrorPic from '../assets/error.png';
import styled from 'styled-components';

const Error = () => {
    return (
        <Wrapper>
            <img src={ErrorPic} alt="error pic" />
        </Wrapper>
    )
}

const Wrapper = styled.div`
display: grid;
place-items: center;
padding: 4rem;

    img {
        width: 500px;
    }
`;

export default Error
