const {
  createIssue,
  findAllIssues,
  findOneIssue,
  deleteOneIssue,
} = require("../../services/issue.service");
const db = require("../../models");
const Issues = db.issues;

describe("Issue service unit tests", () => {
  // sync database, {force: true} will clear it before usage
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
  });
  afterEach(async () => {
    Issues.destroy({
      where: {},
      truncate: true,
    });
  });
  // close connection after averything done
  afterAll(async done => {
    await db.sequelize.close();
    done();
  });
  describe("createIssue", () => {
    let response;
    beforeAll(async () => {
      const issueInput = {
        title: "Test issue",
        description: "Test issue description",
      };

      response = await createIssue(Issues, issueInput);
    });
    it("Should create new issue", async () => {
      expect(response).toBeDefined();
      expect(response.id).toBeDefined();
    });
    it("Should create new issue with 'state':'open'", async () => {
      expect(response.state).toBe("open");
    });
  });
  describe("findAllIssues", () => {
    let response;
    beforeAll(async () => {
      const issueInput = {
        title: "Test issue",
        description: "Test issue description",
      };

      await createIssue(Issues, issueInput);
      await createIssue(Issues, issueInput);

      response = await findAllIssues(Issues);
    });
    it("Should get response", () => {
      expect(response).toBeDefined();
    });
    it("Should return array", () => {
      expect(Array.isArray(response)).toBe(true);
    });
    it("Should get all (2) issues", () => {
      expect(response.length).toBe(2);
    });
  });
  describe("findOneIssues", () => {
    let response;
    beforeAll(async () => {
      const issueInput = {
        title: "Test issue",
        description: "Test issue description",
      };

      await createIssue(Issues, issueInput);
      await createIssue(Issues, issueInput);

      response = await findOneIssue(Issues, 1);
      console.log(response);
    });
    it("Should get response", () => {
      expect(response).toBeDefined();
    });
    it("Should return element with id: 1", () => {
      expect(response.id).toBe(1);
    });
  });
  describe("deleteOneIssue", () => {
    it("Should delete issue", async () => {
      const issueInput = {
        title: "Test issue",
        description: "Test issue description",
      };
      const createResp = await createIssue(Issues, issueInput);
      const response = await deleteOneIssue(Issues, createResp.id);

      expect(response).toBe(1);
    });
  });
});
