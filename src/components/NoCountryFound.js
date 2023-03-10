import React from 'react'
import styled from 'styled-components';
const NoCountryFound = () => {
    return (
        <Wrapper>
            <h1>No Countries found...</h1>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    margin-top: 7rem;

`;

export default NoCountryFound
