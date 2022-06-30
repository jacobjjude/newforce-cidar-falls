import { areaNames } from './areas.js';
import { getGuests } from './guests.js';

const grabbedAreaNames = areaNames();
const grabbedGuests = getGuests();

const mainParkContainer = document.querySelector('.main_park_container');
const mainGuestContainer = document.querySelector('.guestList_container');

const applicationHTML = `${grabbedAreaNames}`;
const guestHTML = `${grabbedGuests}`;

mainParkContainer.innerHTML += applicationHTML;
mainGuestContainer.innerHTML += guestHTML;
