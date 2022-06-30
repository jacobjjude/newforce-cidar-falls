import { areaNames } from './areas.js';

const grabbedAreaNames = areaNames();

const mainParkContainer = document.querySelector('.main_park_container');

const applicationHTML = `${grabbedAreaNames}`;

mainParkContainer.innerHTML += applicationHTML;
