import { generateGuests } from './random.js';

const guestList = generateGuests();
export const database = {
	services: [
		{
			id: 1,
			name: 'Rafting'
		},
		{
			id: 2,
			name: 'Canoeing'
		},
		{
			id: 3,
			name: 'Fishing'
		},
		{
			id: 4,
			name: 'Hiking'
		},
		{
			id: 5,
			name: 'Picnicking'
		},
		{
			id: 6,
			name: 'Rock Climbing'
		},
		{
			id: 7,
			name: 'Lodging'
		},
		{
			id: 8,
			name: 'Parking'
		},
		{
			id: 9,
			name: 'Information'
		},
		{
			id: 10,
			name: 'Ziplines'
		}
	],
	parkAreas: [
		{
			id: 1,
			name: 'Lodge'
		},
		{
			id: 2,
			name: 'Lost Wolf Hiking Trail'
		},
		{
			id: 3,
			name: 'Chamfort River'
		},
		{
			id: 4,
			name: 'Gander River'
		},
		{
			id: 5,
			name: 'Campground'
		},
		{
			id: 6,
			name: 'Pine Bluff Trails'
		}
	],
	offer: [
		{
			id: 1,
			parkId: 1,
			serviceId: 7
		},
		{
			id: 2,
			parkId: 1,
			serviceId: 8
		},
		{
			id: 3,
			parkId: 1,
			serviceId: 9
		},
		{
			id: 4,
			parkId: 1,
			serviceId: 5
		},
		{
			id: 5,
			parkId: 2,
			serviceId: 4
		},
		{
			id: 6,
			parkId: 2,
			serviceId: 5
		},
		{
			id: 7,
			parkId: 2,
			serviceId: 6
		},
		{
			id: 8,
			parkId: 3,
			serviceId: 1
		},
		{
			id: 9,
			parkId: 3,
			serviceId: 2
		},
		{
			id: 10,
			parkId: 3,
			serviceId: 3
		},
		{
			id: 11,
			parkId: 4,
			serviceId: 3
		},
		{
			id: 12,
			parkId: 4,
			serviceId: 4
		},
		{
			id: 13,
			parkId: 5,
			serviceId: 9
		},
		{
			id: 14,
			parkId: 5,
			serviceId: 7
		},
		{
			id: 15,
			parkId: 5,
			serviceId: 8
		},
		{
			id: 16,
			parkId: 6,
			serviceId: 4
		},
		{
			id: 17,
			parkId: 6,
			serviceId: 5
		},
		{
			id: 18,
			parkId: 6,
			serviceId: 10
		}
	],
	parkGuests: guestList
};
