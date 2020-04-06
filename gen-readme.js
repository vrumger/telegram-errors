const fs = require('fs');
const errors = require('./errors.json');

const head = `\
# Telegram Bot API Errors

| Error Code | API Description | Human Description | Methods |
|--------------|------------------|-------------------|:---------------:|
`;

const table = errors
    .sort((a, b) =>
        a.error_code > b.error_code ? 1 : a.error_code < b.error_code ? -1 : 0,
    )
    .map(
        ({ error_code, api_description, description, methods }) =>
            `| ${error_code} | ${api_description} | ${description} | ${
                Array.isArray(methods) ? methods.join(',') : methods
            } |`,
    )
    .join('\n');

fs.writeFileSync('README.md', head + table);
