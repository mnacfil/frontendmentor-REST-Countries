import React from 'react';
import styled from 'styled-components';
import {BsMoon} from 'react-icons/bs'

const Header = () => {
    return (
        <HeaderWrapper>
            <div className='header-center center'>
                <h2>Where in the world?</h2>
                <div className="mode">
                    <BsMoon />
                    <button>Dark mode</button>
                </div>
            </div>
        </HeaderWrapper>
    )
}



const HeaderWrapper = styled.header`
    background-color: var(--white);
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
        }

        svg {
            font-size: 18px;
            margin-right: 5px;
            display: inline-block;
        }
    }

`;

export default Header
