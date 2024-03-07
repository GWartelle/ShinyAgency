<a name="readme-top"></a>

<!--
*** This README is built upon the Best-README-Template, created by Othneil Drew.
*** If you wish to use this template, go check his repository :
*** https://github.com/othneildrew/Best-README-Template/tree/master
*** And don't forget to give his project a star!
-->

<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->

<!-- PROJECT TITLE -->
<br />
<div align="center">
  <a href="https://github.com/GWartelle/ShinyAgency">
    <img src="images/light-logo.png" alt="ShinyLogo"  height="70">
  </a>
</div>
<h1 align="center">Shiny Agency</h1>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Shiny Home Page Screenshot][homepage-screenshot]

This project was completed as part of the <a href="https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete">"Créez une application React complète"</a> course created and distributed by OpenClassrooms.
This project has not been deployed, and therefore, must be cloned to be used.
<br />
The goal of this course being to learn how to use React, the backend part of the project is provided by OpenClassrooms.
This is the web app of an freelance agency.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- [![CreateReactApp][CreateReactApp.dev]][CreateReactApp-url]
- [![ReactRouter][ReactRouter.com]][ReactRouter-url]
- [![StyledComponents][StyledComponents.com]][StyledComponents-url]
- [![Jest][Jest.js]][Jest-url]
- [![TestingLibrary][TestingLibrary.com]][TestingLibrary-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

To use this project, you must have <a href="https://nodejs.org/en">Node.js</a> installed, and also <a href="https://git-scm.com/downloads">Git</a> if you want to clone this repository.

### Installation

To install this project, you must :

1. Use your terminal to go in the directory you want to install the project in
   ```sh
   cd path/to/your/directory
   ```
2. Run this command to clone the repo :
   ```sh
   git clone https://github.com/GWartelle/ShinyAgency.git
   ```
3. Go in the backend directory and run the command `npm install` (or `yarn` if you have it installed) to install all the packages needed for the backend of the project
   ```sh
   cd backend
   npm install
   yarn
   ```
4. Now go in the frontend directory and run the same command to install the packages for the frontend :
   ```sh
   cd ../frontend
   npm install
   yarn
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

To use this web app you must :

1. Go back into the backend directory, and run `npm start` (or `yarn start`) to start the serverside of the app :

```sh
cd ../backend
npm start
yarn start
```

2. Go back into the frontend directory, and run the same command to start the app, which will open in your browser :

```sh
cd ../frontend
npm start
yarn start
```

This will lead you to the home page of the application. You'll see on the upper part of the page the header of the app, with its logo and links to the other pages. Downn you'll see an email input, which is here solely for demonstration sake, and a `Changer de mode` button to toggle the dark mode.
<br />
On the center of the page (or in the header) if you click on the `Faire le test` button, this will open the survey page.

![Shiny Survey Page Screenshot][survey-screenshot]

On the survey page, once you answer all 6 of the questions, and click on `Résultats`, this will redirect to the Results page, which point you out the type of freelance you might need for your project.

![Shiny Results Page Screenshot][results-screenshot]

And now, if you click on `Découvrez nos profils` (or on `Profils` in the header), you are redirected to the Profiles page, with fictive profiles of freelancers, which you can select based on your needs.

![Shiny Profiles Page Screenshot][profiles-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the CC License. See <a href="https://creativecommons.org/licenses/by-sa/4.0/">creativecommons.org</a> for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

This project was made possible thanks to <a href="https://openclassrooms.com/fr/">Openclassrooms</a>, therefore if you are interested in knowing more about it, I invite you to go check the course <a href="https://openclassrooms.com/fr/courses/7150606-creez-une-application-react-complete">"Créez une application React complète"</a>, or <a href="https://openclassrooms.com/fr/courses/">any of their courses</a>, if you want to discover the rest of their catalog.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Link to my LinkedIn profile :
<br />
[![LinkedIn][linkedin-shield]][linkedin-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[homepage-screenshot]: images/HomePage_Screen.png
[survey-screenshot]: images/Survey_Screen.png
[results-screenshot]: images/Results_Screen.png
[profiles-screenshot]: images/Profiles_Screen.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://react.dev/
[CreateReactApp.dev]: https://img.shields.io/badge/Create_React_App-373D47?style=for-the-badge&logo=createreactapp&logoColor=5EDBB6
[CreateReactApp-url]: https://create-react-app.dev/
[ReactRouter.com]: https://img.shields.io/badge/React_Router-1C1C1C?style=for-the-badge&logo=reactrouter&logoColor=DB0B00
[ReactRouter-url]: https://reactrouter.com/en/main
[StyledComponents.com]: https://img.shields.io/badge/Styled_Components-BF4F74?style=for-the-badge&logo=styledcomponents&logoColor=FFFFFF
[StyledComponents-url]: https://styled-components.com/
[Jest.js]: https://img.shields.io/badge/Jest-27CC02?style=for-the-badge&logo=jest&logoColor=FFFFFF
[Jest-url]: https://jestjs.io/
[TestingLibrary.com]: https://img.shields.io/badge/Testing_Library-212121?style=for-the-badge&logo=testinglibrary&logoColor=DB0B00
[TestingLibrary-url]: https://testing-library.com/
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/gabriel-wartelle/
