import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer function", () => {
  let arrayOfRobots = [];
  beforeEach(() => {
    return (arrayOfRobots = [
      {
        name: "robot 1",
        velocity: 9,
        resistance: 6,
        id: 8356,
      },
      {
        name: "robot 2",
        velocity: 7,
        resistance: 2,
        id: 2154,
      },
    ]);
  });

  describe("When it's invoked with a list of robots and loadRobots type", () => {
    test("Then it should return the new state with the robots to load", () => {
      const robots = [];
      const action = { type: "load-robots", robots: arrayOfRobots };
      const newState = robotsReducer(robots, action);

      expect(newState).toEqual(arrayOfRobots);
    });
  });

  describe("When it receives an empty array of robots, and empty action", () => {
    test("Then it should return an empty array", () => {
      const robots = [];
      const action = {};

      const reducer = robotsReducer(robots, action);

      expect(reducer).toEqual([]);
    });
  });
});
