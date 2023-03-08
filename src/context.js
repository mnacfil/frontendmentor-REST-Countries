import React, { useContext, useState } from "react";
import axios from 'axios';
import {restCounriesAPI, defaultCountries} from './constant';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [countries, setCountries] = useState([]);
    const [featuredCountries, setFeaturedCountries] = useState([]);
    const [ search, setSearch] = useState('');
    const [filter, setFilter] = useState('');

    const fetchAllCountries = async(url) => {
        console.log("fetching data...");
        setLoading(true);
        try {
            const {data} = await axios(url);
            setCountries(data);
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

    console.log(featuredCountries);

    useState(() => {
        fetchAllCountries(restCounriesAPI);
    }, [])

    return (
        <AppContext.Provider
            value={{
                countries,
                featuredCountries,
                search,
                filter,
                loading,
                error
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}