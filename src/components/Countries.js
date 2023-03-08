import React, { useState } from 'react'
import styled from 'styled-components';
import Country from './Country';
import { useGlobalContext } from '../context';
import Loading from './Loading';
import Error from './Error';

const Countries = () => {
const {featuredCountries, loading, error} = useGlobalContext();

if(loading) return <Loading />
if(error) return <Error />

  return (
    <Wrapper className='center'>
      {featuredCountries.map((country, index) => {
        return <Country {...country} key={index}/>
      })}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  width: 70vw;

  @media screen and (min-width: 768px){
    width: 100vw;
  }
`;
export default Countries
