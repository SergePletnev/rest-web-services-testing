// const { expect } = require('chai');
// const sendRequest = require('./../../util/sendRequest');
// const deleteRequests = require('./../../data/requests/negative/delete.requests');
// const env = require('./../../endpoint/test');

// describe('[DELETE] Negative requests tests', () => {

//     const emptyBody = {};
//     deleteRequests.forEach((request) => {
//         let response;
//         let url = request.uri;

//         before(async () => {
//             request.uri = env.uri + url;
//             response = await sendRequest(request);
//         });

//         it(`[DELETE ${url}]: verifying response body`, () => {
//             expect(response.body).to.eql(emptyBody);
//         });
//     });

// });