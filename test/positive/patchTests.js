const { expect } = require('chai');
const sendRequest = require('./../../util/sendRequest');
const patchRequests = require('./../../data/requests/positive/patch.requests');
const env = require('./../../endpoint/test');

describe('[PATCH] Positive requests tests', () => {

    patchRequests.forEach((request) => {
        let response;
        let url = request.uri;
        let id = parseInt(url.split('/')[2], 10);

        before(async () => {
            request.uri = env.uri + url;
            response = await sendRequest(request);
        });

        it(`[PATCH ${url}]: verifying response status code`, () => {
            expect(response.statusCode).to.eql(request.expectedStatusCode);
        });

        it(`[PATCH ${url}]: verifying response id`, () => {
            expect(response.body.id).to.eql(id);
        });

        it(`[PATCH ${url}]: comparing sent and received data`, () => {
            expect(response.body).to.includes(request.body);
        });
    });

});