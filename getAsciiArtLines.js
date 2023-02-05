const fs = require("fs");
const readline = require("readline");

const getAsciiArtLines = () => {
    const input = fs.createReadStream("./data/ascii-art.txt");

    const rl = readline.createInterface({
        input,
    });

    const asciiArtLines = [];

    rl.on("line", (line) => asciiArtLines.push(line));

    return new Promise((rs) => {
        rl.on("close", () => rs(asciiArtLines));
    });
};

module.exports = getAsciiArtLines;
