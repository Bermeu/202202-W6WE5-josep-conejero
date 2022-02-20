import { loadRobotsAction } from "../actions/actionsCreator/actionsCreator";

export const loadRobotsListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robotsList = await response.json();

  dispatch(loadRobotsAction(robotsList.robots));
};
