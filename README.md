## REST API testing of [https://jsonplaceholder.typicode.com](https://jsonplaceholder.typicode.com) <br>
# Test line
### Deploy
#### $ npm install

## Usage
Run tests:
#### $ npm test
View report:
#### $ npm run report

Positive tests:

- Create - POST request. Expected response status code: 201, message: Created.

- Read - GET request. Expected response status code: 200, message: OK.

- Update - PUT request. Expected response status code: 200, message: OK.<br>
           PATCH request. Expected response status code: 200, message: OK.

- Delete - DELETE request. Expected response status code: 200, message: OK.

Negative tests:

- Wrong URI tests. Expected response status code: 404, message: Not Found.

- Incorrect body (empty, incorrect/missing parameters). Expected response status code: 400, message: Bad Request.

- Creating item over existing. Expected response status code: 409, message: Conflict.