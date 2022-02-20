import { loadRobotsAction } from "./actionsCreator";

describe("Given an loadRobotsAction function", () => {
  describe("When it receives a robot object", () => {
    test("Then it should return an object with type property and the robot object", () => {
      const robots = [
        {
          name: "Robot 1",
          velocity: 5,
          resistance: 4,
        },
        {
          name: "Robot 2",
          velocity: 7,
          resistance: 8,
        },
      ];

      const expectedOutput = { type: "load-robots", robots: robots };
      const expectedAction = loadRobotsAction(robots);

      expect(expectedAction).toEqual(expectedOutput);
    });
  });
});
