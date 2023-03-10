import {countriesCode} from '../constant';

export const convertCodeToName = (code) => {
    const country = countriesCode.find(country => country.code === code);
    if(!country) return code;
    return country.name;
}