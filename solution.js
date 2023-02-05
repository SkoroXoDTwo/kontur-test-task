const getAlphabet = require("./getAlphabet");
const getAsciiArtLines = require("./getAsciiArtLines");

const ASCII_WIDTH = 4;
const ASCII_HEIGHT = 5;
const SEPARATOR = "----";

/**
 *
 * @param {string[]} asciiArtLines список ASCII рисунков для алфавита
 * @param {string[]} alphabet список символов алфавита
 * @returns {Object.<string, string[]>} объект с ключами алфавита и значениями ASCII рисунков
 */
const createAlphabetToAsciiArtMapping = (asciiArtLines, alphabet) => {
    const alphabetToAsciiArtMapping = {};

    asciiArtLines.forEach((line, i) => {
        const alphabetLetter = alphabet[Math.floor(i / ASCII_HEIGHT)];

        if (alphabetToAsciiArtMapping[alphabetLetter] === undefined) {
            alphabetToAsciiArtMapping[alphabetLetter] = [];
        }
        alphabetToAsciiArtMapping[alphabetLetter].push(line);
    });

    return alphabetToAsciiArtMapping;
};

/**
 *
 * @param {string[]} strChars массив сиволов строки, для которых необходимо создать ASCII Art
 * @param {string[]} alphabetToAsciiArtMapping объект с ключами алфавита и значениями ASCII рисунков
 * @returns {string} ASCII Art
 */
const createAsciiArtStringFromChars = (strChars, alphabetToAsciiArtMapping) => {
    let result = "";

    for (let i = 0; i < ASCII_HEIGHT; i++) {
        result += strChars.reduce(
            (acc, item) =>
                acc + alphabetToAsciiArtMapping[item][i].padEnd(ASCII_WIDTH),
            ""
        );

        if (i !== ASCII_HEIGHT - 1) result += "\n";
    }
    return result;
};

module.exports = async function textToAsciiArt(str) {
    if (typeof str !== "string" || str.length === 0) {
        throw new Error(
            `Переданный аргумент не является строкой или строка пустая`
        );
    }

    const strChars = str.split("");

    let asciiArtLines;
    try {
        asciiArtLines = await getAsciiArtLines();
    } catch (error) {
        throw new Error(
            `Не удалось получить список ASCII рисунков. Ошибка: ${error.message}`
        );
    }

    if (!Array.isArray(asciiArtLines) || asciiArtLines.length === 0) {
        throw new Error("asciiArtLines не массив или пустой массив");
    }
    const filteredAsciiArtLines = asciiArtLines.filter(
        (lines) => lines !== SEPARATOR
    );

    let alphabet;
    try {
        alphabet = await getAlphabet();
    } catch (error) {
        throw new Error(
            `Не удалось получить алфавит. Ошибка: ${error.message}`
        );
    }

    const alphabetToAsciiArtMapping = createAlphabetToAsciiArtMapping(
        filteredAsciiArtLines,
        alphabet
    );

    return createAsciiArtStringFromChars(strChars, alphabetToAsciiArtMapping);
};
