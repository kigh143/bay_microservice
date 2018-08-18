let chai = require('chai');
let chaiHttp = require('chai-http');
let should = chai.should();
const chaiJWT = require('chai-jwt');

const app = require("../app");


chai.use(chaiHttp);
chai.use(chaiJWT);

describe("Test all endpoints" , () => {

    it("Should not return token if username/password are not passed", (done) => {
        chai.request(app).get('/login').end((err, res) => {
            res.should.have.status(404);
            res.body.should.be.a('object');
            done();
        });
    });


    it("Should not return resized image if not authorized ", (done) => {
        let image = {
            url: "http://fecundlabs.com/wp-content/uploads/2018/05/icon.png",
        }
        chai.request(app).post('/generate_thumbnail').send(image).end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a('object');
            done();
        });
    });

    it("Should apply the json patch to the json object, and return the resulting json objec ", (done) => {
        let body = {
            "jsonObj" :{ "baz": "qux","foo": "bar"},
            "jsonPatchObj":[{ "op": "replace", "path": "/baz", "value": "boo" }]
        };
        chai.request(app).post('/patch_json').send(body).end((err, res) => {
            res.should.have.status(401);
            res.body.should.be.a('object');
            done();
        });

    });
   
})