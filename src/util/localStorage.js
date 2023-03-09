export const getThemeInLS = () => {
    const theme = localStorage.getItem('theme');
    if(!theme) return 'light-theme';
    return theme;
}

export const getCountriesInLS = () => {
    const countries = localStorage.getItem('countries');
    if(!countries) return [];
    return JSON.parse(countries);
}
export const removeCountriesInLS = () => {
    localStorage.removeItem('countries');
}

export const getSearchWordInLS = () => {
    const search = localStorage.getItem('search');
    if(!search) return '';
    return search;
}

export const getRegionInLS = () => {
    const region = localStorage.getItem('region');
    if(!region) return '';
    return region;
}
