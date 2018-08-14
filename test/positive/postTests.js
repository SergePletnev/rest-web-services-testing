const { expect } = require('chai');
const sendRequest = require('./../../util/sendRequest');
const postRequests = require('./../../data/requests/positive/post.requests');
const env = require('./../../endpoint/test');
const getValidationErrors = require('./../../util/helper');

describe('[POST] Positive requests tests', () => {

    postRequests.forEach((request) => {
        let response;
        let url = request.uri;

        before(async () => {
            request.uri = env.uri + url;
            response = await sendRequest(request);
        });

        it(`[POST ${url}]: verifying response status code`, () => {
            expect(response.statusCode).to.eql(request.expectedStatusCode);
        });

        it(`[POST ${url}]: verifying response body`, () => {
            const errors = getValidationErrors(response.body, request.responseSchema);
            expect(errors.length).to.equal(0);
        });

        it(`[POST ${url}]: comparing sent and received data`, () => {
            expect(response.body).to.eql(request.body);
        });
    });

});