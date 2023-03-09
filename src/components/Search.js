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
  background: var(--white);
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
    color: var(--light-mode-input);
    margin-right: 1rem;
  }
  input {
    outline: none;
    border: none;
    width: 100%;
    &:focus {
      outline: none;
      border: none;
    }
    &::placeholder {
      color: var(--light-mode-input);
    }
  }

  @media screen and (min-width: 768px){

    margin: 0;
  }

`;

export default Search
