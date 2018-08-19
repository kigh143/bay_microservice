# bay_microservice

A simple stateless microservice in Nodejs, with three major functionalities;

- Authentication
- JSON patching
- Image Thumbnail Generation.

## Poject setup;

- Install all dependencies with “npm install”,
- Start the server with “npm start”,
- Run the test suite with “npm test”

# Allowed HTTPs requests:

- POST : To create thumbnail and json patching.
- GET : To get the Authentication token.

# Description Of Usual Server Responses:

- 200 OK - the request was successful (some API calls may return 201 instead).
- 401 Unauthorized - authentication failed or user doesn't have permissions for requested operation.
- 404 Not Found - resource was not found.

# Endpoints

##### /login/username/password

This is a get request the passes the username and password and on success it returns a **json web token (jwt)** that grants permissions for other requested endpoints or which can be used to validate future requests.

##### /generate_thumbnail (Protected Endpoints)

This is a post request for the image url : for a public image url.
this requires the user to be authenticated with the jwt [ you can pass this as an Authorization header ].

**Post body should be like this**

```javascript
    {
        "url":"http://xample.com/wp-content/uploads/2018/05/icon.png"
    }
```

##### /patch_json (Protected Endpoints)

This is a post request.
Applies Json Patch Request body should contain a JSON object and a JSON patch object. Applies the json patch to the json object, and return the resulting json object.

**Post body should be like this**

```javascript
    {
        "jsonObj" :{ "baz": "qux","foo": "bar"},
        "jsonPatchObj":[{ "op": "replace", "path": "/baz", "value": "boo" }]
    }
```
