import { createGlobalStyle } from "styled-components";

import ComicNeueRegular from "../assets/fonts/ComicNeue-Regular.ttf";
import AdventureTimeLogo from "../assets/fonts/AdventureTimeLogo.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Adventure Time Logo';
        src: local('Adventure Time Logo'), local('AdventureTimeLogo'),
        url(${AdventureTimeLogo}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'Comic Neue';
        src: local('Comic Neue'), local('ComicNeue'),
        url(${ComicNeueRegular}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;
