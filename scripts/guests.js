import { getParkGuests } from './database.js';

const guestList = getParkGuests();

export const getGuests = () => {
	let htmlString = `<h2 id="main_guestList">Guests Currently in Park</h2>
    <ul>`;
	for (const guest of guestList) {
		htmlString += `<li class="inPark--${guest.parkId}>${guest.firstName} ${guest.lastName}</li>`;
	}
	htmlString += '</ul>';
	return htmlString;
};
