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
  height: 50px;
  select {
    width: 250px;
    height: 100%;
    outline: none;
    border: none;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 8px;
    font-size: 18px;
    option {
      color: red;
    }
  }

  @media screen and (min-width: 768px){

    margin-bottom: 0;
  }
`;
export default Filter
