import { areaNames } from './areas.js';
import { getGuests } from './guests.js';
import { servicesHTML } from './services.js';

const grabbedAreaNames = areaNames();
const grabbedGuests = getGuests();
const grabbedServiceList = servicesHTML();

const mainParkContainer = document.querySelector('.main_park_container');
const mainGuestContainer = document.querySelector('.guestList_container');
const mainServiceContainer = document.querySelector('.main_services_list')

const applicationHTML = `${grabbedAreaNames}`;
const guestHTML = `${grabbedGuests}`;
const serviceHTML = `${grabbedServiceList}`

mainParkContainer.innerHTML += applicationHTML;
mainGuestContainer.innerHTML += guestHTML;
mainServiceContainer.innerHTML += serviceHTML
