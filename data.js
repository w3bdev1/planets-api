const planets = {
	mercury: {
		id: 1,
		name: "Mercury",
		hoursInDay: 1408,
		earthDaysAYear: 88,
		noOfMoons: 0,
		majorMoons: [],
	},
	venus: {
		id: 2,
		name: "Venus",
		hoursInDay: 5832,
		earthDaysAYear: 225,
		noOfMoons: 0,
		majorMoons: [],
	},
	earth: {
		id: 3,
		name: "Earth",
		hoursInDay: 24,
		earthDaysAYear: 365,
		noOfMoons: 1,
		majorMoons: ["Moon / Luna"],
	},
	mars: {
		id: 4,
		name: "Mars",
		hoursInDay: 25,
		earthDaysAYear: 687,
		noOfMoons: 2,
		majorMoons: ["Deimos", "Phobos"],
	},
	jupiter: {
		id: 5,
		name: "Jupiter",
		hoursInDay: 10,
		earthDaysAYear: 4333,
		noOfMoons: 79,
		majorMoons: ["Io", "Europa", "Ganymede", "Callisto"],
	},
	saturn: {
		id: 6,
		name: "Saturn",
		hoursInDay: 11,
		earthDaysAYear: 10759,
		noOfMoons: 82,
		majorMoons: ["Enceladus", "Titan"]
	},
	uranus: {
		id: 7,
		name: "Uranus",
		hoursInDay: 17,
		earthDaysAYear: 30687,
		noOfMoons: 27,
		majorMoons: ["Oberon", "Titania", "Juliet"]
	},
	neptune: {
		id: 8,
		name: "Neptune",
		hoursInDay: 16,
		earthDaysAYear: 60190,
		noOfMoons: 14,
		majorMoons: ["Triton", "Proteus"]
	}
}

exports.default = planets;
