const { expect } = require('chai');
const sendRequest = require('./../../util/sendRequest');
const putRequests = require('./../../data/requests/positive/put.requests');
const env = require('./../../endpoint/test');
const getValidationErrors = require('./../../util/helper');

describe('[PUT] Positive requests tests', () => {

    putRequests.forEach((request) => {
        let response;
        let url = request.uri;

        before(async () => {
            request.uri = env.uri + url;
            response = await sendRequest(request);
        });

        it(`[PUT ${url}]: verifying response status code`, () => {
            expect(response.statusCode).to.eql(request.expectedStatusCode);
        });

        it(`[PUT ${url}]: verifying response body`, () => {
            const errors = getValidationErrors(response.body, request.responseSchema);
            expect(errors.length).to.equal(0);
        });

        it(`[PUT ${url}]: comparing sent and received data`, () => {
            expect(response.body).to.eql(request.body);
        });
    });

});