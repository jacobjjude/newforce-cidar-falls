import { getOffers } from './database.js';
import { getServices } from './database.js';
import { getParkAreas } from './database.js';

const offers = getOffers();
const services = getServices();
const areas = getParkAreas();

export const servicesHTML = () => {
	let htmlString = `<h4>Services offered: </h4>`;

	for (const service of services) {
		htmlString += `<p id="service--${service.id}">${service.name} </p>`;
	}
	return htmlString;
};

document.addEventListener('click', (clickEvent) => {
	const itemClicked = clickEvent.target;
	let serviceArray = [];
	let parkArray = [];
	let alertMessage = `This service is offered in: `;

	if (itemClicked.id.startsWith('service')) {
		const [ , serviceId ] = itemClicked.id.split('--');
		for (const offer of offers) {
			if (parseInt(serviceId) === offer.serviceId) {
				serviceArray.push(offer);
			}
		}
		for (const item of serviceArray) {
			for (const area of areas) {
				if (item.parkId === area.id) {
					parkArray.push(area.name);
				}
			}
		}
		for (const name of parkArray) {
			alertMessage += `"${name}" `;
		}
		window.alert(alertMessage);
	}
});
//COMMENT YOUR CODE BOZO