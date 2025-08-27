const expect = require('chai').expect;
const request = require('request');

describe('Food Menu API', function () {
  const baseUrl = 'http://localhost:3000';
 
  it("returns status 200 to check if api works", function(done) { 
    request(baseUrl, function(error, response, body) { 
      expect(response.statusCode).to.equal(200); 
      done() 
    }); 
 });

  it('returns breakfast menu when meal=breakfast', function (done) {
    request.get(`${baseUrl}/api/food?meal=breakfast`, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include("breakfast");
      done();
    });
  });

  it('returns lunch menu when meal=lunch', function (done) {
    request.get(`${baseUrl}/api/food?meal=lunch`, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include("lunch");
      done();
    });
  });

  it('returns dinner menu when meal=dinner', function (done) {
    request.get(`${baseUrl}/api/food?meal=dinner`, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      expect(body).to.include("dinner");
      done();
    });
  });

  it('400 when meal is missing', function (done) {
    request.get(`${baseUrl}/api/food`, function (err, res) {
      expect(res.statusCode).to.equal(400);
      done();
    });
  });

  it("should return error for numeric input", function (done) {     
    request.get(`${baseUrl}/api/food?meal=14`, function (error, response, body) {
      expect(response.statusCode).to.not.equal(200);
      done();
    });
 })
});
