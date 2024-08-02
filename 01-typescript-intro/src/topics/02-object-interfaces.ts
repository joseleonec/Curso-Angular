let skills = ["Bash", "Counter", "Healing"];

interface Player {
    name: string;
    hp: number;
    team?: string;
    skills: string[];
}

const player:Player = {
    name: "Strider",
    hp: 100,
    team: "Blue",
    skills: ["Bash", "Counter", "Healing"]
};

console.log(player);
export {};