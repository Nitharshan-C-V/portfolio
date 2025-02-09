# Portfolio Project
![Screenshot](./src/assets/home.png)
This is a responsive portfolio site created with ReactJS and plain CSS that implements Swiper for sliding components and EmailJS for contact services.

### Project Features:
- Responsive Layout
- Fixed Navigation
- Pop-up Modals
- Tab Panels
- Slider + Pagination
- Contact Form
- Scroll to Top


## React-Icons
`npm install react-icons --save`

The icons from this project can be found in the *Feather* or *Heroicon* sections of the [React-Icons](https://react-icons.github.io/react-icons/) library. 


## Slider Component
`npm i swiper`

The slider component of the testimonial section is imported from [SwiperJS](https://swiperjs.com/react) and also utlizes their pagination module.

![Screenshot](./src/assets/swiperjs.png)


## Email Component
`npm install @emailjs/browser --save`

The form modal of the contact section is setup using SDK and an email template from [EmailJS](https://www.emailjs.com/docs/examples/reactjs/).

![Screenshot](./src/assets/emailjs.png)


## Credit
This project was built following a tutorial by Cryptical Coder. It can be found [here](https://www.youtube.com/watch?v=3aCoZudPEKE&t=143s&ab_channel=CrypticalCoder) if you'd like to give it a try.








// {
//   "name": "react-portfolio",
//   "version": "0.1.0",
//   "private": true,
//   "homepage": "https://username.github.io/repo-name",  // Change 'username' and 'repo-name'
//   "dependencies": {
//     "@emailjs/browser": "^3.12.1",
//     "@testing-library/jest-dom": "^5.16.5",
//     "@testing-library/react": "^13.4.0",
//     "@testing-library/user-event": "^13.5.0",
//     "emailjs-com": "^3.2.0",
//     "framer-motion": "^11.11.8",
//     "ityped": "^1.0.3",
//     "react": "^18.2.0",
//     "react-dom": "^18.2.0",
//     "react-icons": "^4.12.0",
//     "react-intersection-observer": "^9.13.1",
//     "react-parallax-tilt": "^1.7.246",
//     "react-scripts": "^5.0.1",
//     "react-typical": "^0.1.3",
//     "swiper": "^8.4.7",
//     "web-vitals": "^2.1.4"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject",
//     "predeploy": "npm run build",
//     "deploy": "gh-pages -d build"
//   },
//   "eslintConfig": {
//     "extends": [
//       "react-app",
//       "react-app/jest"
//     ]
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "devDependencies": {
//     "firebase-tools": "^1.2.0",
//     "gh-pages": "^4.0.0"  // Add gh-pages if not already in dependencies
//   }
// }