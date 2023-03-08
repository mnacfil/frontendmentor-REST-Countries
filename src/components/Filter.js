import React from 'react'
import styled from 'styled-components'

const Filter = () => {
  return (
    <Wrapper>
      <select name="region" id="region">
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 90vw;
  margin: 0 auto;

  select {
    width: 250px;
    padding: 1rem;
    outline: none;
    border: none;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 8px;
    font-size: 18px;
    option {
      color: red;
    }
  }
`;
export default Filter
