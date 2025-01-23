const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app"); // Adjust the path to your app file
const { expect } = chai;

chai.use(chaiHttp);

describe("POST /save", () => {
    it("should save the score and return success message", (done) => {
        const payload = {
            score: 100,
            playerName: "John Doe"
        };

        chai.request(app)
            .post("/save")
            .send(payload)
            .end((err, res) => {
                expect(res).to.have.status(200); // Expect status 200
                expect(res.body).to.have.property("message").eql("Score saved successfully");
                done(); // Notify Mocha that the async test is done
            });
    });

    it("should return 400 for missing score", (done) => {
        const payload = {
            playerName: "John Doe"
        };

        chai.request(app)
            .post("/save")
            .send(payload)
            .end((err, res) => {
                expect(res).to.have.status(400); // Expect status 400
                expect(res.body).to.have.property("error").eql("Score is required");
                done();
            });
    });

    it("should return 400 for missing playerName", (done) => {
        const payload = {
            score: 100
        };

        chai.request(app)
            .post("/save")
            .send(payload)
            .end((err, res) => {
                expect(res).to.have.status(400); // Expect status 400
                expect(res.body).to.have.property("error").eql("Player name is required");
                done();
            });
    });
});

