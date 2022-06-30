import { getOffers } from './database.js';
import { getParkAreas } from './database.js';
import { getServices } from './database.js';

const offers = getOffers();
const areas = getParkAreas();
const services = getServices();

export const areaNames = () => {
	let htmlString = ``;

	for (const area of areas) {
		const filteredOffer = filterOfferByPark(area.id);
		const filteredService = grabServiceName(filteredOffer);
		htmlString += `<div class="main_park_id--${area.id} park_list">
        <h2>${area.name}</h2>`
		htmlString += '<ul>';
		for (const service of filteredService) {
			htmlString += `<li>${service}</li>`;
		}
		htmlString += '</ul></div>';
	}
	return htmlString;
};

const filterOfferByPark = (parkAreaId) => {
	let offerArray = [];
	for (const offer of offers) {
		if (parkAreaId === offer.parkId) {
			offerArray.push(offer);
		}
	}
	return offerArray;
};

const grabServiceName = (offerArray) => {
	let serviceArray = [];
	for (const service of services) {
		for (const offer of offerArray) {
			if (offer.serviceId === service.id) {
				serviceArray.push(service.name);
			}
		}
	}
	return serviceArray;
};
