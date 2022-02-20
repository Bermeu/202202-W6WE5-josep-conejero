import actionTypes from "../actions/actionTypes/actionTypes";

const robotsReducer = (robots = [], action = {}) => {
  let newRobotsState;
  switch (action.type) {
    case actionTypes.loadRobots:
      newRobotsState = [...action.robots];

      break;
    default:
      newRobotsState = [...robots];
  }
  return newRobotsState;
};

export default robotsReducer;
