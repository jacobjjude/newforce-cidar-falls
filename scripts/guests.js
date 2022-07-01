import { getParkGuests } from './database.js';

const guestList = getParkGuests();

export const getGuests = () => {
	let htmlString = `<h2 id="main_guestList">Guests Currently in Park</h2>
    <ul>`;
	for (const guest of guestList) {
		htmlString += `<li class="inPark--${guest.parkId}">${guest.firstName} ${guest.lastName}</li>`;
	}
	htmlString += '</ul>';
	return htmlString;
};

document.addEventListener('click', (clickEvent) => {
	const itemClicked = clickEvent.target;

	if (itemClicked.id.startsWith('main_park_id')) {
		const [ , parkId ] = itemClicked.id.split('--');
		let guestsInPark = 0;
		for (const guest of guestList) {
			if (parseInt(parkId) === guest.parkId) {
				guestsInPark++;
			}
		}
		window.alert(`There are ${guestsInPark} guests currently in this area`);
	}
});
