import React from 'react'
import {Header, Search, Filter, Countries} from '../components';
import styled from 'styled-components';

const Home = () => {
  return (
    <Wrapper>
      <Header />
      <Search />
      <Filter />
      <Countries />
    </Wrapper>
  )
}

const Wrapper = styled.main`
`;

export default Home
