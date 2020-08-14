const {
  createUser,
  findAllUsers,
  findOneUser,
  deleteOneUser,
} = require("../../services/user.service");
const db = require("../../models");
const User = db.users;

describe("User service unit tests", () => {
  // sync database, {force: true} will clear it before usage
  beforeEach(async () => {
    await db.sequelize.sync({ force: true });
  });
  afterEach(async () => {
    User.destroy({
      where: {},
      truncate: true,
    });
  });
  // close connection after averything done
  afterAll(async done => {
    await db.sequelize.close();
    done();
  });
  describe("createUser", () => {
    let response;
    beforeAll(async () => {
      const userInput = {
        firstName: "UserName",
        lastName: "UserSurname",
        email: "mymail@mail.com",
      };

      response = await createUser(userInput);
    });
    it("Should create new User", async () => {
      expect(response).toBeDefined();
      expect(response.id).toBeDefined();
    });
  });
  describe("findAllUsers", () => {
    let response;
    beforeAll(async () => {
      const userInput = {
        firstName: "UserName",
        lastName: "UserSurname",
        email: "mymail@mail.com",
      };

      await createUser(userInput);
      await createUser(userInput);

      response = await findAllUsers();
    });
    it("Should get response", () => {
      expect(response).toBeDefined();
    });
    it("Should return array", () => {
      expect(Array.isArray(response)).toBe(true);
    });
    it("Should get all (2) users", () => {
      expect(response.length).toBe(2);
    });
  });
  describe("findOneUser", () => {
    let response;
    beforeAll(async () => {
      const userInput = {
        firstName: "UserName",
        lastName: "UserSurname",
        email: "mymail@mail.com",
      };

      await createUser(userInput);

      response = await findOneUser(1);
    });
    it("Should get response", () => {
      expect(response).toBeDefined();
    });
    it("Should return element with id: 1", () => {
      expect(response.id).toBe(1);
    });
  });
  describe("deleteOneUser", () => {
    it("Should delete User", async () => {
      const userInput = {
        firstName: "UserName",
        lastName: "UserSurname",
        email: "mymail@mail.com",
      };
      const createResp = await createUser(userInput);
      const response = await deleteOneUser(createResp.id);

      expect(response).toBe(1);
    });
  });
});
