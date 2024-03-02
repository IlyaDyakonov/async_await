
import GameSavingLoader from "../app.js";
import read from "../reader.js";
import json from "../parser.js";


test("тест работы функции GameSavingLoader", async () => {
    const jsonAnswer = {
        id: 9,
        created: 1546300800,
        userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 }
    };

    try {
        const answer = await GameSavingLoader.load();
        expect(answer).toEqual(jsonAnswer);
    } catch (error) {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(error).toEqual("Error game saving!");
    }
})


// PASS  src/js/__tests__/app.test.js                                          
// √ тест работы функции GameSavingLoader (1531 ms)

// -----------|---------|----------|---------|---------|-------------------     
// File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s      
// -----------|---------|----------|---------|---------|-------------------
// All files  |    91.3 |      100 |     100 |    90.9 |                        
// app.js     |      80 |      100 |     100 |      80 | 11,21                  
// parser.js  |     100 |      100 |     100 |     100 |                        
// reader.js  |     100 |      100 |     100 |     100 |                        
// -----------|---------|----------|---------|---------|-------------------     
// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total
// Snapshots:   0 total
// Time:        2.104 s, estimated 3 s