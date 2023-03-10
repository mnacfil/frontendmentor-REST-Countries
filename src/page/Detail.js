import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { restCountryAPI } from '../constant';
import { useGlobalContext } from '../context';
import {Loading, Header} from '../components';
import {BsArrowLeft} from 'react-icons/bs';
import {formatValue, convertCodeToName} from '../util';
import {Link} from 'react-router-dom';

const Detail = () => {
  const {countryName} = useParams();
  const { countryDetail, fetchDetailOfCountry, detailLoading, error} = useGlobalContext();

  const getDetailOfCountry = (url) => {
    fetchDetailOfCountry(url);
  }

  useEffect(() => {
    getDetailOfCountry(`${restCountryAPI}/${countryName}`);
  }, [countryName]);

  if(detailLoading) return <Loading />

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
  let nativeName = common;
  let speakingLanguage = "No Data";
  let currency = 'No Data';
  if(native) {
    const {official: nativeOfficial, common: nativeCommonName} = Object.values(native)[0];
    nativeName = nativeCommonName;
  }
  if(languages) {
    speakingLanguage = Object.values(languages).join(', ');
  }
  if(currencies) {
    const { name: nameOfCurrency } = Object.values(currencies)[0];
    currency = nameOfCurrency
  }

  return <>
    <Header />
    <Wrapper className='center'>
      <Link className='back-btn' to='/'>
          <BsArrowLeft />
          Back
      </Link>
      <div className="detail">
        <div className="detail-flag">
          <img src={svg} alt={alt} />
        </div>
        <div className="detail-info">
          <h3>{common}</h3>
          <div className='detail-align'>
            <div className="detail-left">
              <p>Native Name: <span>{nativeName}</span></p>
              <p>Population: <span>{formatValue(population)}</span></p>
              <p>Region: <span>{region}</span></p>
              <p>Sub Region: <span>{subregion}</span></p>
              <p>Capital: <span>{capital}</span></p>
            </div>
            <div className="detail-right">
              <p>Top Level Domain: <span>{tld}</span></p>
              <p>Currencies: <span>{currency}</span></p>
              <p>Languages: <span>{speakingLanguage}</span></p>
            </div>
          </div>
          {borders &&
            <div className="detail-borders">
              <h4>Border Countries:</h4>
              <div>
                {borders.map((border, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => getDetailOfCountry(`${restCountryAPI}/${convertCodeToName(border)}`)}
                      >
                      {convertCodeToName(border)}
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

  .back-btn, button {
    width: 110px !important;
    width: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 8px 0;
    border: none;
    background: var(--container-color);
    outline: none;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    border-radius: 5px;
    font-weight: 400;
    cursor: pointer;
    font-size: 16px;
    color: var(--text-color);

    svg {
      font-size: 20px;

    }
  }

  .detail {

    margin-top: 4rem;

    .detail-flag{

      img {
        width: 100%;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      }
    }
    .detail-info {
      margin-top: 2.5rem;

      span {
        color: var(--light-mode-input);
      }

      .detail-borders{

        h4 {
          font-weight: 600;
        }

        div {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
          gap: 10px;
          button {
            width: 120px;
          }
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
