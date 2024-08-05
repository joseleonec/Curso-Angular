interface Details {
    artist: string;
    year: number;
}

interface AudioPlayer {
    volume: number;
    second: number;
    song: string;
    details: Details;
}

const audioPlayer: AudioPlayer = {
    volume: 0,
    second: 0,
    song: "",
    details: {
        artist: "The Beatles",
        year: 1965
    }
}

// Get the volume and song from the DaudioPlayer object
const {
    volume,
    song,
    details,
} = audioPlayer;

// Get the artist and year from the details object, artist is renamed to artistName
const { 
    artist: artistName, 
    year 
} = details;

console.log("Song: ", song);
console.log("Volume: ", volume);

console.log("Artist: ", artistName);
console.log("Year: ", year);

// Desestructuración de arreglos
const numbers: number[] = [1, 2, 3, 4, 5];

// Get the first and second number from the array
const [first, second] = numbers;

console.log("First: ", first);