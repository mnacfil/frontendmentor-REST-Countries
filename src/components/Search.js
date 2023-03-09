import React from 'react'
import styled from 'styled-components'
import {FaSearch} from 'react-icons/fa';
import { useGlobalContext } from '../context';

const Search = () => {
  const { search, setSearch } = useGlobalContext();
  return (
    <Wrapper>
      <FaSearch />
      <input
        type="text"
        placeholder='Search for a country...'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background: var(--container-color);
  margin: 2rem auto 3rem auto;
  padding: 1rem 2rem;
  width: 90vw;
  max-width: 500px;
  display: flex;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  height: 100%;

  svg {
    color: var(--text-color);
    margin-right: 1rem;
  }
  input {
    border: none;
    padding: 5px;
    width: 100%;
    background-color: var(--container-color);
    color: var(--text-color);
    &:focus {
      outline: none;
      border: none;
    }
    &::placeholder {
      color: var(--text-color);
    }
  }

  @media screen and (min-width: 768px){

    margin: 0;
  }

`;

export default Search
