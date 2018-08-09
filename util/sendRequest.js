const request = require('request-promise-native');

function sendRestRequestWithHeader(opts) {
    let options = {
        uri: opts.uri,
        method: opts.method,
        headers: opts.header,
        json: true
    };

    return request(options).then((response) => {
        return response;
    });

}

module.exports = sendRestRequestWithHeader;
