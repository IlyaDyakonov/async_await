import read from "./reader.js";
import json from "./parser.js";

export default class GameSavingLoader {
    static async load() {
            try {
                const data = await read();
                const value = await json(data);
                return await JSON.parse(value);
            } catch (err) {
                throw new Error("Error game saving!")
            }
    }}

(async () => {
    // Your code here with await
    try {
        const result = await GameSavingLoader.load();
        return result
    } catch (err) {
        err;
    }
})();

