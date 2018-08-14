const { expect } = require('chai');
const sendRequest = require('./../../util/sendRequest');
const putRequests = require('./../../data/requests/negative/put.requests');
const env = require('./../../endpoint/test');

describe('[PUT] Negative requests tests', () => {

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

    });

});