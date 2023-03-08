import React from 'react'
import {Header, Search, Filter, Countries} from '../components';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <div className="controller center">
        <Search />
        <Filter />
      </div>
      <Countries />
    </Wrapper>
  )
}

const Wrapper = styled.main`

  @media screen and (min-width: 768px){

    .controller {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 3rem;
      height: 50px;
    }
  }

`;

export default Home
