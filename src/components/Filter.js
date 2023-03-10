import React, { useState } from 'react'
import styled from 'styled-components';
import { useGlobalContext } from '../context';
import {RiArrowDropDownLine} from 'react-icons/ri';
import ListItem from './ListItem';

const Filter = () => {
  const { setRegion } = useGlobalContext();
  const [showRegion, setShowRegion] = useState(false);

  const toggleDropDown = () => {
    setShowRegion(!showRegion);
  }

  return (
    <Wrapper>
      <div className="filter">
        <span className='title'>Filter by Region</span>
        <button onClick={toggleDropDown}>
          <RiArrowDropDownLine />
        </button>
      </div>
      { showRegion &&
        <div className="regions">
          <ul>
            <ListItem region='Africa' setRegion={setRegion}/>
            <ListItem region='America' setRegion={setRegion}/>
            <ListItem region='Asia' setRegion={setRegion}/>
            <ListItem region='Europe' setRegion={setRegion}/>
            <ListItem region='Oceania' setRegion={setRegion}/>
          </ul>
        </div>
      }
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 50px;
  width: 200px;
  background-color: var(--container-color);
  color: var(--text-color);
  border-radius: 8px;
  display: flex;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  position: relative;

  .filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 0 1rem;

    .title {
      margin-left: 6px;
    }

    button {
      background: none;
      border: none;
      display: grid;
      place-items: center;
      padding: 0;
    }

    svg {
      cursor: pointer;
      font-size: 22px;
      color: var(--text-color);
      display: inline-block;
    }
  }

  .regions {
    position: absolute;
    top: 55px;
    left: 0;
    width: 100%;
    border-radius: 8px;
    background-color: var(--container-color);

    ul {
      list-style-type: none;
      margin: 0;
      padding: 1rem;

      li {
        cursor: pointer;

      }
      li:not(:last-child) {
        margin-bottom: 8px;
      }

    }
  }

  @media screen and (min-width: 768px){

    margin-bottom: 0;
  }
`;
export default Filter
