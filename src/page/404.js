import React from "react";
import NotFoundPic from '../assets/404.svg';
import styled from "styled-components";

const NotFoundPage = () => {
    return (
        <Wrapper>
            <img src={NotFoundPic} alt="not found picture" />
        </Wrapper>
    )
}

const Wrapper = styled.div`

    display: grid;
    place-items: center;
    min-height: 90vh;

    img {
        max-width: 800px;
        width: 90%;
        height: 700px;
    }
`;

export default NotFoundPage;