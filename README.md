Express and Babel
======

#### Features
* All code uses ES6 Modules (import/export) with Babel
* An HTTP server using `express`
* An object constructor that creates a _simple resource_ with 3+ properties
* API data persists using the storage module and file system persistence

#### Server Endpoints
* **`/api/v1/customers`**
* `POST` request
 * passes data as stringifed JSON in the body of a **POST** request to create a new resource
* `GET` request
 * passes `/:id` as a route parameter to **GET** a specific resource (as JSON)
* `DELETE` request
 * passes `/:id` as a route parameter to **DELETE** a specific resource (as JSON)

#### Tests
* Tests to ensure the `/api/v1/customers` endpoint responds as described for each condition below:
 * `GET`: test 404, it should respond with 'not found' for valid requests made with an id that was not found
 * `GET`: test 400, it should respond with 'bad request' if no id was provided in the request
 * `GET`: test 200, it should contain a response body for a request made with a valid id
 * `POST`: test 400, it should respond with 'bad request' if no request body was provided or the body was invalid
 * `POST`: test 200, it should respond with the body content for a post request with a valid body
