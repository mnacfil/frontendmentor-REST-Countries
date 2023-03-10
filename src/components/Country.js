import React from 'react';
import styled from 'styled-components';
import {formatValue} from '../util/formatter';
import { Link} from 'react-router-dom';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

const Country = (props) => {
  const {
    name: {common},
    region,
    population,
    flags: {png, alt},
    capital,
    loading
  } = props;

  return (
    <Link to={`/detail/${common}`}>
      <Wrapper>
        <img src={png} alt={alt} />
        <div className="data">
          <h3>{common || <Skeleton/>}</h3>
          <p>Population: <span>{formatValue(population)}</span></p>
          <p>Region: <span>{region}</span></p>
          <p>Capital: <span>{capital}</span></p>
        </div>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.article`
  background: var(--container-color);
  color: var(--text-color);
  border-radius: 8px;
  box-shadow: 0px 5px 15px rgba(0,0,0,0.1);

  img {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    width: 100%;
    height: 170px;
  }

  .data {
    padding: 1.5rem;

    h3 {
      margin: 0;
      margin-bottom: 1rem;
    }
    p {
      margin: 0;
      margin-bottom: 5px;
      font-weight: 600;

      span {
        color: var(--light-mode-input);
        font-weight: normal;
      }
    }
  }
`;

export default Country
