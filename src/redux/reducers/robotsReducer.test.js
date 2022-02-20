import robotsReducer from "./robotsReducer";

describe("Given a robotsReducer function", () => {
  let arrayOfRobots = [];
  beforeEach(() => {
    return (arrayOfRobots = [
      {
        name: "robot1",
        speed: 8,
        resistance: 2,
        id: 1,
      },
      {
        name: "robot2",
        speed: 2,
        resistance: 3,
        id: 2,
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

  describe("When it's invoked with a list of robots and createRobots type", () => {
    test("Then it should return then ew state with the new robot created", () => {
      let newRobot = [
        {
          name: "robot3",
          speed: 4,
          resistance: 10,
          id: 3,
        },
      ];
      const expectedOutput = [
        {
          name: "robot1",
          speed: 8,
          resistance: 2,
          id: 1,
        },
        {
          name: "robot2",
          speed: 2,
          resistance: 3,
          id: 2,
        },
        {
          name: "robot3",
          speed: 4,
          resistance: 10,
          id: 3,
        },
      ];
      const action = { type: "create-robot", robot: newRobot };
      const newState = robotsReducer(arrayOfRobots, action);

      expect(newState).toEqual(expectedOutput);
    });
  });

  describe("When it receives an array of robots and action with type updateRobot", () => {
    test("Then it should return a newState with robot2 updated with speed 3", () => {
      const expectedOutput = [
        {
          name: "robot1",
          speed: 8,
          resistance: 2,
          id: 1,
        },
        {
          name: "robot2",
          speed: 3,
          resistance: 3,
          id: 2,
        },
      ];

      const newRobot = {
        name: "robot2",
        speed: 3,
        resistance: 3,
        id: 2,
      };

      const action = { type: "update-robot", robot: newRobot };
      const newState = robotsReducer(arrayOfRobots, action);

      expect(newState).toEqual(expectedOutput);
    });
  });

  describe("When it receives an array of robots and delete type with id 1", () => {
    test("Then it should return an array with the object with id 1", () => {
      const expectedOutput = [
        {
          name: "robot2",
          speed: 2,
          resistance: 3,
          id: 2,
        },
      ];
      const id = 1;
      const action = { type: "delete-robot", id: id };
      const newState = robotsReducer(arrayOfRobots, action);

      expect(newState).toEqual(expectedOutput);
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
