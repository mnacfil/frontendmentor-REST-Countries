import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import {restCounriesAPI, restCountryAPI,restRegionCountriesAPI ,defaultCountries} from './constant';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [detailLoading, setDetailLoading] = useState(true);
    const [error, setError] = useState(false);
    const [countries, setCountries] = useState([]);
    const [featuredCountries, setFeaturedCountries] = useState([]);
    const [countryDetail, setCountryDetail] = useState(null);
    const [ search, setSearch] = useState('');
    const [region, setRegion] = useState('');
    const [theme, setTheme] = useState('light-theme');

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
    }, [theme]);

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