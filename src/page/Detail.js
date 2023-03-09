import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { restCountryAPI } from '../constant';
import { useGlobalContext } from '../context';
import {Loading, Header} from '../components';
import {BsArrowLeft} from 'react-icons/bs';
import {formatValue} from '../util';
import {Link} from 'react-router-dom';

const Detail = () => {
  const {countryName} = useParams();
  const { countryDetail, fetchDetailOfCountry, loading, error} = useGlobalContext();

  useEffect(() => {
    fetchDetailOfCountry(`${restCountryAPI}/${countryName}`);
  }, [countryName]);

  if(loading) return <Loading />

  const {
    flags: {svg, alt},
    name,
    population,
    region,
    capital,
    subregion,
    languages,
    currencies,
    tld,
    borders
  } = countryDetail;
  const [common, official, native] = Object.values(name);
  const {official: nativeOfficial, common: nativeCommonName} = Object.values(native)[0];
  const dialect = Object.values(languages).join(', ');
  const {name: currency} = Object.values(currencies)[0];

  return <>
    <Header />
    <Wrapper className='center'>
      <button>
          <BsArrowLeft />
          Back
      </button>
      <div className="detail">
        <div className="detail-flag">
          <img src={svg} alt={alt} />
        </div>
        <div className="detail-info">
          <h3>{common}</h3>
          <div className='detail-align'>
            <div className="detail-left">
              <p>Native Name: <span>{nativeCommonName}</span></p>
              <p>Population: <span>{formatValue(population)}</span></p>
              <p>Region: <span>{region}</span></p>
              <p>Sub Region: <span>{subregion}</span></p>
              <p>Capital: <span>{capital}</span></p>
            </div>
            <div className="detail-right">
              <p>Top Level Domain: <span>{tld}</span></p>
              <p>Currencies: <span>{currency}</span></p>
              <p>Languages: <span>{dialect}</span></p>
            </div>
          </div>
          {borders &&
            <div className="detail-borders">
              <h4>Border Countries:</h4>
              <div>
                {borders.map((border, index) => {
                  return (
                    <button key={index}>
                      {border}
                    </button>
                  )
                })}
              </div>
            </div>
          }
        </div>
      </div>
    </Wrapper>
  </>
}

const Wrapper = styled.main`

  padding: 2rem 0 ;
  font-size: 16px;

  button {
    display: flex;
    align-items: center;
    padding: 8px 14px;
    border: none;
    background: var(--white);
    outline: none;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 5px;
    font-weight: 400;
    cursor: pointer;
    font-size: 16px;

    svg {
      margin-right: 8px;
      font-weight: 800;
      font-size: 20px;

    }
  }

  .detail {

    margin-top: 4rem;

    .detail-flag{

      img {
        width: 100%;
      }
    }
    .detail-info {
      margin-top: 2.5rem;

      .detail-borders{

        div {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
          gap: 10px;
        }
      }

      h3 {
        margin-bottom: 1.5rem;
      }

      p {
        font-weight: 600;

        span {
          font-weight: normal;
        }
      }

      .detail-left {
        margin-bottom: 2rem;
      }
    }
  }

  @media screen and (min-width: 900px){
    .detail {
      display: grid;
      grid-template-columns: 1fr 1fr;
      justify-content: space-between;
      align-items: center;
      column-gap: 4rem;

      .detail-flag {
        width: 550px;
      }

      .detail-info {
        margin-top: 0;

        h3 {
          margin: 0;
        }
      }

      .detail-align {
        display: flex;
        justify-content: space-between;

        .detail-left {
          margin: 0;
        }
      }
    }
  }
`;

export default Detail
