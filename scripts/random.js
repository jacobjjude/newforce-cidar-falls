export const firstNames = [
	'Edmond',
	'Janelle',
	'Sonia',
	'Noelia',
	'Jayne',
	'Ellen',
	'Caroline',
	'Charity',
	'Conrad',
	'Maude',
	'Leonie',
	'Sean',
	'Judah',
	'Nelda',
	'Noble',
	'Federico',
	'Annamae',
	'Gia',
	'Gunner',
	'Ines',
	'Luther',
	'Garrett',
	'Travis',
	'Chloe',
	'Candida',
	'Hilma',
	'Telly',
	'Skye',
	'Keven',
	'Ceasar',
	'Selina',
	'Emiliano',
	'Triston',
	'Hunter',
	'Myrna',
	'Adonis',
	'Hilbert',
	'Jamie',
	'Trevion',
	'Darrin',
	'Titus',
	'Toney',
	'Cathryn',
	'Astrid',
	'Ashlee',
	'Jacinthe',
	'Kirstin',
	'Petra',
	'Tommie',
	'Jamison'
];

export const lastNames = [
	'Reinger',
	'Lockman',
	'Gleason',
	'Wyman',
	'Romaguera',
	'Gerlach',
	'Kilback',
	'Veum',
	'Mitchell',
	'Reichert',
	'Jaskolski',
	'Price',
	'Hill',
	'Schaden',
	'Lebsack',
	'Lebsack',
	'Gibson',
	'Olson',
	'Reilly',
	'Bernier',
	'Waelchi',
	'Buckridge',
	'Kuphal',
	'Wiegand',
	'Strosin',
	'Zemlak',
	'Waelchi',
	'Russel',
	'Gibson',
	'Crist',
	'Casper',
	'Mraz',
	'Quigley',
	'Bailey',
	'Stark',
	'Wuckert',
	'Ruecker',
	'Carter',
	'Franey',
	'Howe',
	'Daniel',
	'Gutmann',
	'Kutch',
	'Leffler',
	'Bartoletti',
	'Balistreri',
	'McGlynn',
	'Lemke',
	'Strosin',
	'Larkin'
];

const roll6 = () => {
	let roll6 = Math.floor(Math.random() * 6 + 1);
	return roll6;
};

const rollGuestName = () => {
	let roll49 = Math.floor(Math.random() * 50);
	return roll49;
};

const rollNumGuests = () => {
	let numOfGuests = Math.floor(Math.random() * 2 + 25);
	return numOfGuests;
};

const getFirstName = () => {
	let firstName = firstNames[rollGuestName()];
	return firstName;
};

const getLastName = () => {
	let lastName = lastNames[rollGuestName()];
	return lastName;
};

export const generateGuests = () => {
	let primaryKey = 1;
	let database2 = [];
	for (let i = 0; i < rollNumGuests(); i++) {
		let guest = {
			id: primaryKey,
			firstName: getFirstName(),
			lastName: getLastName(),
			parkId: roll6()
		};
		database2.push(guest);
		primaryKey++;
	}
	return database2;
};
