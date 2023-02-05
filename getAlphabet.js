const fs = require("fs");
const readline = require("readline");

const getAlphabet = async () => {
    const input = fs.createReadStream("./data/alphabet.txt");

    const rl = readline.createInterface({
        input,
    });

    return new Promise((rs) => {
        rl.on("line", (line) => {
            rs(line);
            rl.close();
        });
    });
};

module.exports = getAlphabet;
