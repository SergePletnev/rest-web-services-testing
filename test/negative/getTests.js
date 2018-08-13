// const { expect } = require('chai');
// const sendRequest = require('./../../util/sendRequest');
// const getRequests = require('./../../data/requests/negative/get.requests');
// const env = require('./../../endpoint/test');

// describe('[GET]  Negative requests tests', () => {

//     const emptyBody = {};
//     getRequests.forEach((request) => {
//         let response;
//         let url = request.uri;

//         before(async () => {
//             request.uri = env.uri + url;
//             response = await sendRequest(request);
//         });

//         it(`[GET ${url}]: verifying response status code`, () => {
//             expect(response.statusCode).to.eql(request.expectedStatusCode);
//         });

//         it(`[GET ${url}]: verifying response body`, () => {
//             expect(response.body).to.eql(emptyBody);
//         });
//     });

// });