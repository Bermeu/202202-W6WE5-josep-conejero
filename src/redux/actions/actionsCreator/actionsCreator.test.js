import {
  createRobotAction,
  deleteRobotAction,
  loadRobotsAction,
  updateRobotAction,
} from "./actionsCreator";

describe("Given an loadRobotsAction function", () => {
  describe("When it receives a robot object", () => {
    test("Then it should return an object with type property and the robot object", () => {
      const robots = [
        {
          name: "Robot1",
          speed: 10,
          Resistance: 5,
        },
        {
          name: "Robot2",
          speed: 1,
          Resistance: 10,
        },
      ];

      const expectedOutput = { type: "load-robots", robots: robots };
      const expectedAction = loadRobotsAction(robots);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given an updateRobotAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an an object with the updateRobot type and the id", () => {
      const id = 10;
      const expectedOutput = { type: "update-robot", id: id };
      const expectedAction = updateRobotAction(id);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a createRobotAction function", () => {
  describe("When it receives a robot object", () => {
    test("Then it should return an object with the new created robot", () => {
      const robot = {
        name: "Adam's Robot",
        Speed: 3,
        Resistance: 8,
      };

      const expectedOutput = { type: "create-robot", robot };
      const expectedAction = createRobotAction(robot);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});

describe("Given a deleteRobotAction function", () => {
  describe("When it receives an id", () => {
    test("Then it should return an object with the deleteRobot type and the id", () => {
      const id = 10;
      const expectedOutput = { type: "delete-robot", id: id };
      const expectedAction = deleteRobotAction(id);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});
