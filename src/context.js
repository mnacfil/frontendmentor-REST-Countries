import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import {restCounriesAPI, restCountryAPI,restRegionCountriesAPI ,defaultCountries} from './constant';
import {
    getCountriesInLS,
    getThemeInLS,
    getRegionInLS,
    getSearchWordInLS,
    removeCountriesInLS
} from './util/localStorage';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [detailLoading, setDetailLoading] = useState(true);
    const [error, setError] = useState(false);
    const [countries, setCountries] = useState(getCountriesInLS());
    const [featuredCountries, setFeaturedCountries] = useState([]);
    const [countryDetail, setCountryDetail] = useState(null);
    const [ search, setSearch] = useState(getSearchWordInLS());
    const [region, setRegion] = useState(getRegionInLS());
    const [theme, setTheme] = useState(getThemeInLS());

    const toggleTheme = () => {
        if(theme === 'light-theme'){
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    const fetchAllCountries = async(url) => {
        setLoading(true);
        try {
            const {data} = await axios(url);
            const featured = data.filter(country => {
                if(defaultCountries.includes(country.name.common)) {
                    return country;
                }
            })
            setFeaturedCountries(featured);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    const fetchDetailOfCountry = async (url) => {
        setDetailLoading(true);
        try {
            const {data} = await axios(url);
            setCountryDetail(data[0]);
            setDetailLoading(false)
        } catch (error) {
            console.log(error);
            setDetailLoading(false);
            setError(true);
        }
    }

    const fetchCountriesByName = async (url) => {
        setLoading(true);
        try {
            const {data} = await axios(url);
            const countryThatStarsWith = data.filter(country => country.name.common.toLowerCase().startsWith(search.toLowerCase()));
            localStorage.setItem('countries', JSON.stringify(countryThatStarsWith));
            setCountries(countryThatStarsWith);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }
    const fetchCountriesByRegion = async (url) => {
        setLoading(true);
        try {
            const {data} = await axios(url);
            console.log(data);
            localStorage.setItem('countries', JSON.stringify(data));
            setCountries(data);
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false);
            setError(true);
        }
    }

    useEffect(() => {
        fetchAllCountries(restCounriesAPI);
    }, []);

    useEffect(() => {
        if(search === '') return;
        fetchCountriesByName(`${restCountryAPI}/${search}`);
    }, [search])

    useEffect(() => {
        if(region === '') return;
        fetchCountriesByRegion(`${restRegionCountriesAPI}/${region}`);
    }, [region]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        localStorage.setItem('search', search);
        localStorage.setItem('region', region);
        if(!search || !region) {
            removeCountriesInLS();
        }
    }, [search, region]);

    return (
        <AppContext.Provider
            value={{
                countries,
                featuredCountries,
                search,
                region,
                loading,
                detailLoading,
                error,
                countryDetail,
                theme,
                toggleTheme,
                fetchDetailOfCountry,
                setSearch,
                setRegion
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}