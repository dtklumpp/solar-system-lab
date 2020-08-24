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
let x = "";
const logos = function() {
	console.log(x);
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
solarSystem[0].ringSystem = true;
logit(solarSystem[0]);

//part 7
solarSystem[6].moons[3] = "Oberon";
logit(solarSystem[6].moons);

logit("part 8:");
//part 8
for(planet of solarSystem) {
	if(planet.ringSystem === true){
		logit(planet);
	}
}






//part 2 of lab

// Copy this object into your file (it's big). Remember, this is an object of objects not an array of objects.

const system = { 
    Mercury: { 
        radiusp: 'same',
        name: 'Mercury',
        density: 5.43,
        tilt: 2,
        image: 'textures/mercury.gif',
        rotationperiod: 1408,
        period: 0.24,
        radiuse: 2439,
        satellites: 0,
        au: 0.3871,
        eccentricity: 0.206,
        velocity: 47.89,
        mass: 0.06,
        inclination: 7 
    },
    Venus: { 
        radiusp: 'same',
        name: 'Venus',
        density: 5.25,
        tilt: 177.3,
        image: 'textures/venus.gif',
        rotationperiod: 5832,
        period: 0.62,
        radiuse: 6052,
        satellites: 0,
        au: 0.7233,
        eccentricity: 0.007,
        velocity: 35.04,
        mass: 0.82,
        inclination: 3.4 
    },
    Earth: { 
        radiusp: 6357,
        name: 'Earth',
        density: 5.52,
        tilt: 23.45,
        image: 'textures/earth.gif',
        rotationperiod: 23.93,
        period: 1,
        radiuse: 6378,
        satellites: 1,
        au: 1,
        eccentricity: 0.017,
        velocity: 29.79,
        mass: 1,
        inclination: 0 
    },
    Mars: {
        radiusp: 3380,
        name: 'Mars',
        density: 3.95,
        tilt: 25.19,
        image: 'textures/mars.gif',
        rotationperiod: 24.62,
        period: 1.88,
        radiuse: 3397,
        satellites: 2,
        au: 1.524,
        eccentricity: 0.093,
        velocity: 24.14,
        mass: 0.11,
        inclination: 1.85 
    },
    Jupiter: { 
        radiusp: 66854,
        name: 'Jupiter',
        density: 1.33,
        tilt: 3.12,
        image: 'textures/jupiter.gif',
        rotationperiod: 9.92,
        period: 11.86,
        radiuse: 71490,
        satellites: '69',
        au: 5.203,
        eccentricity: 0.048,
        velocity: 13.06,
        mass: 317.89,
        inclination: 1.3 
    }, 
    Saturn: { 
        radiusp: 54360,
        name: 'Saturn',
        density: 0.69,
        tilt: 26.73,
        image: 'textures/saturn.gif',
        rotationperiod: 10.66,
        period: 29.46,
        radiuse: 60268,
        satellites: 30,
        au: 9.539,
        eccentricity: 0.056,
        velocity: 9.64,
        mass: 95.18,
        inclination: 2.49 
    },
    Uranus: { 
        radiusp: 24973,
        name: 'Uranus',
        density: 1.29,
        tilt: 97.86,
        image: 'textures/uranus.gif',
        rotationperiod: 17.24,
        period: 84.01,
        radiuse: 25559,
        satellites: 24,
        au: 19.19,
        eccentricity: 0.046,
        velocity: 6.81,
        mass: 14.53,
        inclination: 0.77 
    },
    Neptune: { 
        radiusp: 24340,
        name: 'Neptune',
        density: 1.64,
        tilt: 29.6,
        image: 'textures/neptune.gif',
        rotationperiod: 16.11,
        period: 164.79,
        radiuse: 25269,
        satellites: 8,
        au: 30.06,
        eccentricity: 0.01,
        velocity: 5.43,
        mass: 17.14,
        inclination: 1.77 
    },
    Pluto: { 
        radiusp: 'same',
        name: 'Pluto',
        density: 2.03,
        tilt: 122.46,
        image: 'textures/pluto.gif',
        rotationperiod: 153.3,
        period: 248.54,
        radiuse: 1160,
        satellites: 1,
        au: 39.48,
        eccentricity: 0.248,
        velocity: 4.74,
        mass: 0.002,
        inclination: 17.15 
    } 
}


logit("part 2 of lab");

//1
x = system.Mercury.mass;
logos();

//2
x = system.Venus.eccentricity;
logos();

//3
const satNum = function(planet1) {
	return Number(planet1.satellites);
}

x = satNum(system.Jupiter) + satNum(system.Saturn) + satNum(system.Uranus) + satNum(system.Neptune);
logos();


//4
if(typeof system.Mercury.radiusp === 'string') {
	system.Mercury.radiusp = system.Mercury.radiuse;
}
//5
logit(system.Mercury.radiusp);

//
x = (system.Jupiter.velocity * system.Jupiter.mass) - (system.Pluto.velocity * system.Pluto.mass);
logos();


//6

const loveShackPlanet = {
	radiusp: 24,
	name: "Love Shack",
	density: 5,
	tilt: 100,
	image: "textures/pluto.gif",
	rotationperiod: 100,
	period: 200,
	radiuse: 1000,
	satellites: 3,
	au: 30,
	eccentricity: 0.1,
	velocity: 3,
	mass: 0.1,
	inclination: 10
}


system.loveShackPlanet = loveShackPlanet;
logit('part 7');
logit(system);


//hungry a
//weather lab

//hungry B
//sorting an array

logit('part 8 just weather lab');

logit('part 9');

// x = sortArrayOfObjects(solarSystem, 'name');
// logos();


// x = solarSystem.sort((a,b) => a.name - b.name);
// logit(solarSystem);
// logos();

/*
x = solarSystem.sort(function(a, b) {
	return a.name - b.name;
});
logit(solarSystem);
logos();
*/



//from MDN

x = solarSystem.sort(function(a, b) {
	var nameA = a.name;
	var nameB = b.name;
	//var nameA = a.name.toUpperCase(); // ignore upper and lowercase
	//var nameB = b.name.toUpperCase(); // ignore upper and lowercase
	if (nameA < nameB) {
	  return -1;
	}
	if (nameA > nameB) {
	  return 1;
	}
	else {return 0;}
});

logit(solarSystem);
logos();




//ok weather lab time

logit('WEATHER LAB!!!');

const evanstonWeather = {
    cod: "200",
    message: 0.0099,
    cnt: 40,
    list: [{
            dt: 1521223200,
            main: {
                temp: 273.61,
                temp_min: 273.363,
                temp_max: 273.61,
                pressure: 1014.07,
                sea_level: 1037.26,
                grnd_level: 1014.07,
                humidity: 100,
                temp_kf: 0.25
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 44
            },
            wind: {
                speed: 4.1,
                deg: 93.0003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-16 18:00:00"
        },
        {
            dt: 1521234000,
            main: {
                temp: 273.28,
                temp_min: 273.091,
                temp_max: 273.28,
                pressure: 1012.07,
                sea_level: 1035.03,
                grnd_level: 1012.07,
                humidity: 100,
                temp_kf: 0.19
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 64
            },
            wind: {
                speed: 3.31,
                deg: 93.503
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-16 21:00:00"
        },
        {
            dt: 1521244800,
            main: {
                temp: 272.45,
                temp_min: 272.324,
                temp_max: 272.45,
                pressure: 1010.97,
                sea_level: 1034.19,
                grnd_level: 1010.97,
                humidity: 100,
                temp_kf: 0.12
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 3.91,
                deg: 64.0015
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 00:00:00"
        },
        {
            dt: 1521255600,
            main: {
                temp: 272.7,
                temp_min: 272.638,
                temp_max: 272.7,
                pressure: 1010.94,
                sea_level: 1034.36,
                grnd_level: 1010.94,
                humidity: 100,
                temp_kf: 0.06
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 3.87,
                deg: 74.0027
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 03:00:00"
        },
        {
            dt: 1521266400,
            main: {
                temp: 273.212,
                temp_min: 273.212,
                temp_max: 273.212,
                pressure: 1008.91,
                sea_level: 1032.47,
                grnd_level: 1008.91,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 92
            },
            wind: {
                speed: 4.32,
                deg: 66.5011
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 06:00:00"
        },
        {
            dt: 1521277200,
            main: {
                temp: 273.743,
                temp_min: 273.743,
                temp_max: 273.743,
                pressure: 1007.13,
                sea_level: 1030.56,
                grnd_level: 1007.13,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 80
            },
            wind: {
                speed: 4.36,
                deg: 78.0024
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-17 09:00:00"
        },
        {
            dt: 1521288000,
            main: {
                temp: 273.743,
                temp_min: 273.743,
                temp_max: 273.743,
                pressure: 1006.96,
                sea_level: 1030.51,
                grnd_level: 1006.96,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 76
            },
            wind: {
                speed: 4.32,
                deg: 81.0023
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 12:00:00"
        },
        {
            dt: 1521298800,
            main: {
                temp: 274.629,
                temp_min: 274.629,
                temp_max: 274.629,
                pressure: 1007.81,
                sea_level: 1031,
                grnd_level: 1007.81,
                humidity: 92,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 92
            },
            wind: {
                speed: 3.38,
                deg: 66.5022
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 15:00:00"
        },
        {
            dt: 1521309600,
            main: {
                temp: 275.358,
                temp_min: 275.358,
                temp_max: 275.358,
                pressure: 1008.39,
                sea_level: 1031.26,
                grnd_level: 1008.39,
                humidity: 88,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 80
            },
            wind: {
                speed: 3.6,
                deg: 49.5005
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 18:00:00"
        },
        {
            dt: 1521320400,
            main: {
                temp: 275.612,
                temp_min: 275.612,
                temp_max: 275.612,
                pressure: 1007.67,
                sea_level: 1030.47,
                grnd_level: 1007.67,
                humidity: 86,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 12
            },
            wind: {
                speed: 3.01,
                deg: 27.0012
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-17 21:00:00"
        },
        {
            dt: 1521331200,
            main: {
                temp: 274.579,
                temp_min: 274.579,
                temp_max: 274.579,
                pressure: 1008.51,
                sea_level: 1031.55,
                grnd_level: 1008.51,
                humidity: 90,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.97,
                deg: 2.00034
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 00:00:00"
        },
        {
            dt: 1521342000,
            main: {
                temp: 272.527,
                temp_min: 272.527,
                temp_max: 272.527,
                pressure: 1009.45,
                sea_level: 1032.99,
                grnd_level: 1009.45,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 0.91,
                deg: 359
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 03:00:00"
        },
        {
            dt: 1521352800,
            main: {
                temp: 271.773,
                temp_min: 271.773,
                temp_max: 271.773,
                pressure: 1009.43,
                sea_level: 1033.22,
                grnd_level: 1009.43,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 0.87,
                deg: 231.501
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 06:00:00"
        },
        {
            dt: 1521363600,
            main: {
                temp: 271.301,
                temp_min: 271.301,
                temp_max: 271.301,
                pressure: 1009.63,
                sea_level: 1033.47,
                grnd_level: 1009.63,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.66,
                deg: 233.002
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-18 09:00:00"
        },
        {
            dt: 1521374400,
            main: {
                temp: 271.276,
                temp_min: 271.276,
                temp_max: 271.276,
                pressure: 1010.25,
                sea_level: 1033.96,
                grnd_level: 1010.25,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.99,
                deg: 233.001
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 12:00:00"
        },
        {
            dt: 1521385200,
            main: {
                temp: 275.51,
                temp_min: 275.51,
                temp_max: 275.51,
                pressure: 1010.23,
                sea_level: 1033.61,
                grnd_level: 1010.23,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.81,
                deg: 245.506
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 15:00:00"
        },
        {
            dt: 1521396000,
            main: {
                temp: 277.975,
                temp_min: 277.975,
                temp_max: 277.975,
                pressure: 1009.22,
                sea_level: 1032.15,
                grnd_level: 1009.22,
                humidity: 75,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 1.06,
                deg: 130.003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 18:00:00"
        },
        {
            dt: 1521406800,
            main: {
                temp: 278.068,
                temp_min: 278.068,
                temp_max: 278.068,
                pressure: 1006.65,
                sea_level: 1029.29,
                grnd_level: 1006.65,
                humidity: 74,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 2.96,
                deg: 111
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-18 21:00:00"
        },
        {
            dt: 1521417600,
            main: {
                temp: 276.442,
                temp_min: 276.442,
                temp_max: 276.442,
                pressure: 1005.57,
                sea_level: 1028.56,
                grnd_level: 1005.57,
                humidity: 83,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01n"
            }],
            clouds: {
                all: 0
            },
            wind: {
                speed: 3.61,
                deg: 109.5
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 00:00:00"
        },
        {
            dt: 1521428400,
            main: {
                temp: 274.862,
                temp_min: 274.862,
                temp_max: 274.862,
                pressure: 1005.44,
                sea_level: 1028.68,
                grnd_level: 1005.44,
                humidity: 93,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 2.82,
                deg: 104
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 03:00:00"
        },
        {
            dt: 1521439200,
            main: {
                temp: 274.273,
                temp_min: 274.273,
                temp_max: 274.273,
                pressure: 1004.25,
                sea_level: 1027.55,
                grnd_level: 1004.25,
                humidity: 94,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 64
            },
            wind: {
                speed: 2.26,
                deg: 102.009
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 06:00:00"
        },
        {
            dt: 1521450000,
            main: {
                temp: 274.609,
                temp_min: 274.609,
                temp_max: 274.609,
                pressure: 1003.74,
                sea_level: 1027.08,
                grnd_level: 1003.74,
                humidity: 97,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 76
            },
            wind: {
                speed: 2.17,
                deg: 83.0033
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-19 09:00:00"
        },
        {
            dt: 1521460800,
            main: {
                temp: 274.975,
                temp_min: 274.975,
                temp_max: 274.975,
                pressure: 1003.61,
                sea_level: 1026.97,
                grnd_level: 1003.61,
                humidity: 94,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.37,
                deg: 58.0012
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 12:00:00"
        },
        {
            dt: 1521471600,
            main: {
                temp: 275.277,
                temp_min: 275.277,
                temp_max: 275.277,
                pressure: 1003.78,
                sea_level: 1026.89,
                grnd_level: 1003.78,
                humidity: 95,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.1,
                deg: 62.5003
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 15:00:00"
        },
        {
            dt: 1521482400,
            main: {
                temp: 275.726,
                temp_min: 275.726,
                temp_max: 275.726,
                pressure: 1004.52,
                sea_level: 1027.3,
                grnd_level: 1004.52,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04d"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.66,
                deg: 54.5007
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 18:00:00"
        },
        {
            dt: 1521493200,
            main: {
                temp: 276.466,
                temp_min: 276.466,
                temp_max: 276.466,
                pressure: 1003.48,
                sea_level: 1026.26,
                grnd_level: 1003.48,
                humidity: 85,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 7.81,
                deg: 41.5045
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-19 21:00:00"
        },
        {
            dt: 1521504000,
            main: {
                temp: 275.721,
                temp_min: 275.721,
                temp_max: 275.721,
                pressure: 1003.97,
                sea_level: 1027.02,
                grnd_level: 1003.97,
                humidity: 87,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 8.96,
                deg: 39.0012
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 00:00:00"
        },
        {
            dt: 1521514800,
            main: {
                temp: 274.464,
                temp_min: 274.464,
                temp_max: 274.464,
                pressure: 1004.75,
                sea_level: 1028.06,
                grnd_level: 1004.75,
                humidity: 96,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03n"
            }],
            clouds: {
                all: 32
            },
            wind: {
                speed: 9.42,
                deg: 51.0078
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 03:00:00"
        },
        {
            dt: 1521525600,
            main: {
                temp: 272.292,
                temp_min: 272.292,
                temp_max: 272.292,
                pressure: 1006.36,
                sea_level: 1029.72,
                grnd_level: 1006.36,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 9.75,
                deg: 58.0077
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 06:00:00"
        },
        {
            dt: 1521536400,
            main: {
                temp: 270.924,
                temp_min: 270.924,
                temp_max: 270.924,
                pressure: 1006.41,
                sea_level: 1030.1,
                grnd_level: 1006.41,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "02n"
            }],
            clouds: {
                all: 8
            },
            wind: {
                speed: 9.71,
                deg: 51.0003
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-20 09:00:00"
        },
        {
            dt: 1521547200,
            main: {
                temp: 270.337,
                temp_min: 270.337,
                temp_max: 270.337,
                pressure: 1007.45,
                sea_level: 1031.19,
                grnd_level: 1007.45,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 12
            },
            wind: {
                speed: 9.25,
                deg: 52.5016
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 12:00:00"
        },
        {
            dt: 1521558000,
            main: {
                temp: 270.951,
                temp_min: 270.951,
                temp_max: 270.951,
                pressure: 1008.94,
                sea_level: 1032.57,
                grnd_level: 1008.94,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 801,
                main: "Clouds",
                description: "few clouds",
                icon: "02d"
            }],
            clouds: {
                all: 24
            },
            wind: {
                speed: 8.61,
                deg: 51.5031
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 15:00:00"
        },
        {
            dt: 1521568800,
            main: {
                temp: 271.614,
                temp_min: 271.614,
                temp_max: 271.614,
                pressure: 1009.29,
                sea_level: 1032.63,
                grnd_level: 1009.29,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 48
            },
            wind: {
                speed: 7.91,
                deg: 40.5026
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 18:00:00"
        },
        {
            dt: 1521579600,
            main: {
                temp: 272.158,
                temp_min: 272.158,
                temp_max: 272.158,
                pressure: 1008.86,
                sea_level: 1032.15,
                grnd_level: 1008.86,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 802,
                main: "Clouds",
                description: "scattered clouds",
                icon: "03d"
            }],
            clouds: {
                all: 48
            },
            wind: {
                speed: 7.47,
                deg: 28.0009
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-20 21:00:00"
        },
        {
            dt: 1521590400,
            main: {
                temp: 272.201,
                temp_min: 272.201,
                temp_max: 272.201,
                pressure: 1009.91,
                sea_level: 1033.42,
                grnd_level: 1009.91,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 803,
                main: "Clouds",
                description: "broken clouds",
                icon: "04n"
            }],
            clouds: {
                all: 68
            },
            wind: {
                speed: 6.91,
                deg: 16.0005
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 00:00:00"
        },
        {
            dt: 1521601200,
            main: {
                temp: 272.791,
                temp_min: 272.791,
                temp_max: 272.791,
                pressure: 1011.07,
                sea_level: 1034.92,
                grnd_level: 1011.07,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 5.81,
                deg: 18.5001
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 03:00:00"
        },
        {
            dt: 1521612000,
            main: {
                temp: 273.016,
                temp_min: 273.016,
                temp_max: 273.016,
                pressure: 1011.23,
                sea_level: 1035.2,
                grnd_level: 1011.23,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.19,
                deg: 63.5004
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 06:00:00"
        },
        {
            dt: 1521622800,
            main: {
                temp: 271.986,
                temp_min: 271.986,
                temp_max: 271.986,
                pressure: 1011.85,
                sea_level: 1035.8,
                grnd_level: 1011.85,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04n"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.56,
                deg: 76.5001
            },
            sys: {
                pod: "n"
            },
            dt_txt: "2018-03-21 09:00:00"
        },
        {
            dt: 1521633600,
            main: {
                temp: 271.226,
                temp_min: 271.226,
                temp_max: 271.226,
                pressure: 1013.31,
                sea_level: 1037.46,
                grnd_level: 1013.31,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 800,
                main: "Clear",
                description: "clear sky",
                icon: "01d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.32,
                deg: 64.0016
            },
            snow: {
                "3h": 0.01
            },
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-21 12:00:00"
        },
        {
            dt: 1521644400,
            main: {
                temp: 271.676,
                temp_min: 271.676,
                temp_max: 271.676,
                pressure: 1015.19,
                sea_level: 1039,
                grnd_level: 1015.19,
                humidity: 100,
                temp_kf: 0
            },
            weather: [{
                id: 804,
                main: "Clouds",
                description: "overcast clouds",
                icon: "04d"
            }],
            clouds: {
                all: 88
            },
            wind: {
                speed: 4.21,
                deg: 54.0007
            },
            snow: {},
            sys: {
                pod: "d"
            },
            dt_txt: "2018-03-21 15:00:00"
        }
    ],
    city: {
        id: 420011163,
        name: "Evanston",
        coord: {
            lat: 42.0447,
            lon: -87.6931
        },
        country: "US"
    }
}



// logit(evanstonWeather.city.name);
// evanLat = evanstonWeather.city.coord.lat;
// evanLong = evanstonWeather.city.coord.lon;
// logit("the coordinates of Evanston are "+evanLat+" latitude and "+evanLong+" longitude.");

const getCity = function(city1) {
	name1 = city1.city.name;
	logit(name1);
	evanLat = city1.city.coord.lat;
	evanLong = city1.city.coord.lon;
	logit("the coordinates of Evanston are "+evanLat+" latitude and "+evanLong+" longitude.");
	return name1;

}
getCity(evanstonWeather);

logit(evanstonWeather.list.length);
//ok so is over 5 days

