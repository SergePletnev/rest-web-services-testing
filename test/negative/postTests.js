const { expect } = require('chai');
const sendRequest = require('./../../util/sendRequest');
const postRequests = require('./../../data/requests/negative/post.requests');
const env = require('./../../endpoint/test');

describe('[POST] Negative requests tests', () => {

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

    });

});