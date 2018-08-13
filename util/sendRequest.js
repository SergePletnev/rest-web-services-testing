const request = require('request-promise-native');

function sendRestRequestWithHeader(opts) {
    let options = {
        uri: opts.uri,
        method: opts.method,
        headers: opts.headers,
        body: opts.body,
        resolveWithFullResponse: true,
        json: true,
        simple: false
    };

    Object.keys(options).forEach((key) => (options[key] === undefined) && delete options[key]);

    return request(options).then((response) => {
        return response;
    });
}

module.exports = sendRestRequestWithHeader;
