function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function btnClick(input) {

    if (input == "Erangel") {
        document.getElementById('pErangel').innerHTML = townsErangel[getRndInteger(0, townsErangel.length - 1)];
    }
    else if (input == "Miramar") {
        document.getElementById('pMiramar').innerHTML = townsMiramar[getRndInteger(0, townsMiramar.length - 1)];
    }
    else if (input == "Sanhok") {
        document.getElementById('pSanhok').innerHTML = townsSanhok[getRndInteger(0, townsSanhok.length - 1)];
    }
    else if (input == "BlackoutBeta") {
        document.getElementById('pBlackoutBeta').innerHTML = townsBlackoutBeta[getRndInteger(0, townsBlackoutBeta.length - 1)];
    }
}


var townsErangel = [
    "Georgopol",
    "Severny",
    "Pochinki",
    "Lipovka",
    "Mylta Power (Big)",
    "Mylta Power (Small)",
    "Primorsk",
    "Shooting Range",
    "Rozhok",
    "Mylta",
    "Mili Base",
    "Ruins",
    "Novorepnoye",
    "Gatka",
    "Mansion",
    "Zharki",
    "School",
    "Prison",
    "Farm",
    "Ferry Pier",
    "Hospital",
    "Water Town",
    "Shelter",
    "Yasnaya Polyana"
];

var townsMiramar = [
    "El Pozo",
    "Ruins",
    "Trailer Park",
    "La Cobreria",
    "Crater Fields",
    "Water Treatment",
    "Torre Ahumada",
    "Cruz del Valle",
    "Campo Militar",
    "Tierra Bronca",
    "El Azahar",
    "Hacienda del Pantron",
    "San Martin",
    "Power Grid",
    "Monte Nuevo",
    "Pecado",
    "Graveyard",
    "Minas Generales",
    "Junkyard",
    "La Bendita",
    "Lardrillera",
    "Chumacera",
    "Impala",
    "Los Leones",
    "Valle del Mar",
    "Minas del Valle",
    "Puerto Paraiso",
    "Prison",
    "Minas del Sur",
    "Los Higos",
    "Two Islands"
];

var locationsFortnite = [
    "JUNK JUNCTION",
    "HAUNTED HILLS",
    "SNOBBY SHORES",
    "PLEASANT PARK",
    "GREASY GROVE",
    "TILTED TOWNS",
    "LOOT LAKE",
    "SHIFTY SHAFTS",
    "ANARCHY ACRES",
    "FLUSH FACTORY",
    "DUSTY DEPOT",
    "SALTY SPRINGS",
    "FATAL FIELDS",
    "TOMATO TOWN",
    "WAILING WOODS",
    "LONELY LODGE",
    "MOISTY MIRE",
    "RETAIL ROW"
];

var townsSanhok = [
    "Ban Tai",
    "Camp Alpha",
    "Camp Bravo",
    "Camp Charlie",
    "Ha Tinh",
    "Khao",
    "Pai Nan",
    "Tat Mok",
    "Cave",
    "Bhan",
    "Bootcamp",
    "Docks",
    "Lakawi",
    "Mongnai",
    "Na Kham",
    "Resort",
    "Tambang",
    "Ruins",
    "Quarry"
];

var townsBlackoutBeta = [
    "ESTATES",
    "CONSTRUCTION SITE",
    "TRAIN STATION",
    "HYDRO DAM",
    "FIRING RANGE",
    "ASYLUM",
    "ARRAY",
    "RIVERTOWN",
    "MUKETOWN ISLAND",
    "CARGO DOCKS",
    "FRACKING TOWER",
    "TURBINE",
    "FACTORY",
    "LIGHTHOUSE"
]
