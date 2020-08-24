const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

const logit = function(input1) {
	console.log(input1);
}


logit(solarSystem[0].ringSystem);

//part 1
logit(solarSystem[4].moons);

//part 2
logit(solarSystem[7].moons[1]);

//part 3
solarSystem[0].moons.push("Endor");
logit(solarSystem[0].moons);

//part 4
const planetPluto = {
	name: 'Pluto',
	ringSystem: false,
	moons: ['Charon']
}
solarSystem.push(planetPluto);
logit(solarSystem[8]);

//part 5
solarSystem[2].diameter = '8000';
logit(solarSystem[2]);

//part 6
