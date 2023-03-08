export const useFetch = async (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchAllCountries = async(url) => {
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
}