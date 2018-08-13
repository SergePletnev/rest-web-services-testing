const { expect } = require('chai');
const sendRequest = require('./../../util/sendRequest');
const getRequests = require('./../../data/requests/positive/get.requests');
const env = require('./../../endpoint/test');
const getValidationErrors = require('./../../util/helper');

describe('[GET] Positive requests tests', () => {

    getRequests.forEach((request) => {
        let response;
        let url = request.uri;
        let id = parseInt(url.split('/')[2], 10);

        before(async () => {
            request.uri = env.uri + url;
            response = await sendRequest(request);
        });

        it(`[GET ${url}]: verifying response status code`, () => {
            expect(response.statusCode).to.eql(request.expectedStatusCode);
        });

        it(`[GET ${url}]: verifying response body`, () => {
            const errors = getValidationErrors(response.body, request.responseSchema);
            expect(errors.length).to.equal(0);
        });

        it(`[GET ${url}]: verifying response id`, () => {
            expect(response.body.id).to.eql(id);
        });
    });

});