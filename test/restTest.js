const chai = require('chai');
const expect = chai.expect;
const sendRequest = require('./../util/sendRequest');
const getComment = require('./../data/getComment');
const env = require('../endpoint/test');

describe('Get Comment by id', () => {

    getComment.forEach((data) => {
        let response;
        let id = parseInt(data.uri.split('/')[2], 10);

        before(async () => {
            data.uri = env.uri + data.uri;
            response = await sendRequest(data);
        });

        it('Verifying Comment id ' + id, () => {
            expect(response.id).to.eql(id);
        });

        it('Verifying Comment email with id ' + id, () => {
            expect(response.email).to.match(/\w+@\w+.\w{1,5}/);
        });

        it('Verifying Comment body with id ' + id, () => {
            expect(response.body).to.be.a('string');
        });
    });

});