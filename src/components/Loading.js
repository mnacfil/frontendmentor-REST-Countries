import React from 'react';
import PacmanLoader from 'react-spinners/PacmanLoader';
import styled from 'styled-components';

const Loading = () => {
    return (
        <Wrapper>
            <PacmanLoader
            size={60}
            aria-label="Loading Spinner"
            color="var(--text-color)"
            className='spinner'
            />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: grid;
    place-items: center;
    margin-top: 7rem;

`;

export default Loading
