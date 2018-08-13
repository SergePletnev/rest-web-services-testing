// const { expect } = require('chai');
// const sendRequest = require('./../../util/sendRequest');
// const deleteRequests = require('./../../data/requests/positive/delete.requests');
// const env = require('./../../endpoint/test');

// describe('[DELETE] Positive requests tests', () => {

//     const emptyBody = {};
//     deleteRequests.forEach((request) => {
//         let response;
//         let url = request.uri;

//         before(async () => {
//             request.uri = env.uri + url;
//             response = await sendRequest(request);
//         });

//         it(`[DELETE ${url}]: verifying response status code`, () => {
//             expect(response.statusCode).to.eql(request.expectedStatusCode);
//         });

//         it(`[DELETE ${url}]: verifying response body`, () => {
//             expect(response.body).to.eql(emptyBody);
//         });
//     });

// });