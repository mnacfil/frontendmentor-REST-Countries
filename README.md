# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

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

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it.

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

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
