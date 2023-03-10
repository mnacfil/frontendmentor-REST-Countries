# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

additional feature:

- Save data, like theme, countries in localStorage, to preserve the data when refresh
- Add loading state, while fetching for countries
- Responsive
- Add Error response, when something went wrong

### Links

- Solution URL: [https://github.com/mnacfil/frontendmentor-REST-Countries]
- Live Site URL: [https://mnacfil-where-to-go.netlify.app/]

## My process

- I use context API to serve as Global state manager, I dont use Redux
  since it's not that big.
- Handle loading, error and empty state

### Built with

- React
- React-spinner
- Axios
- React-router-dom
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

- How to handle some react errors
- How to architect the whole app, What API should I use and Side effect
- Organize the whole app

### Continued development

Maybe optimization and efficiency, since I don't use useMemo/useCallback for this project.

### Useful resources

- [React Icons](https://react-icons.github.io/react-icons/)

## Author

- Website - [Melvin Nacfil](https://www.your-site.com)
- Frontend Mentor - [@mnacfil](https://www.frontendmentor.io/profile/mnacfil)
- Linkedin - [@Melvin Nacfil](https://www.linkedin.com/in/melvin-nacfil-9596a8206/)
