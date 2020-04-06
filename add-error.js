const { promises: fs } = require('fs');
const errors = require('./errors.json');

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const ask = q => new Promise(res => rl.question(q, res));

(async () => {
    let errorCode;

    while (isNaN(errorCode)) {
        errorCode = await ask('What\'s the error code? ');
    }

    const apiDescription = await ask('What is the bot api description? ');
    const description = await ask('How would you describe the bot api description to a human? ');
    let methods = await ask('What methods can throw this error? (seperate with a comma, blank for all) ');

    if (methods.trim()) {
        methods = methods
            .split(',')
            .map(x => x.trim())
            .filter(Boolean);
    } else {
        methods = 'all';
    }

    errors.push({
        error_code: errorCode,
        api_description: apiDescription,
        description,
        methods,
    });

    await fs.writeFile('errors.json', JSON.stringify(errors, null, 4));

    rl.close();
})();
