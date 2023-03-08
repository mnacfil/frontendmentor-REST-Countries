import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { restCountryAPI } from '../constant';
import { useGlobalContext } from '../context';
import {Loading} from '../components'

const Detail = () => {
  const {countryName} = useParams();
  const { countryDetail, fetchDetailOfCountry, loading, error} = useGlobalContext();
  useEffect(() => {
    fetchDetailOfCountry(`${restCountryAPI}/${countryName}`);
  }, [countryName]);

  if(loading) return <Loading />

  console.log(countryDetail);
  // name.common, flags.png, region, population, capital, currencies, name.nativeName, sub-region,

  return (
    <h1>{countryName} Detail</h1>
  )
}

export default Detail
