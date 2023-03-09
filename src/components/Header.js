import React from 'react';
import styled from 'styled-components';
import {BsMoonFill, BsSunFill} from 'react-icons/bs'
import { useGlobalContext } from '../context';

const Header = () => {
    const {theme, toggleTheme} = useGlobalContext();
    return (
        <HeaderWrapper>
            <div className='header-center center'>
                <h2>Where in the world?</h2>
                <div className="mode">
                    {theme === 'light-theme' ? <BsMoonFill /> : <BsSunFill />}
                    <button onClick={toggleTheme}>
                        {theme === 'light-theme' ? 'Dark mode': 'Light mode'}
                    </button>
                </div>
            </div>
        </HeaderWrapper>
    )
}



const HeaderWrapper = styled.header`
    background-color: var(--container-color);
    height: 5rem;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    display: flex;
    align-items: center;

    .header-center{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .mode {
        display: flex;
        align-items: center;

        button {
            background: none;
            border: none;
            outline: none;
            cursor: pointer;
            font-size: 18px;
            color: var(--text-color);
        }

        svg {
            font-size: 18px;
            margin-right: 5px;
            display: inline-block;
        }
    }

`;

export default Header
