import { loadRobotsAction } from "../actions/actionsCreator/actionsCreator";

export const loadRobotsListThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const robotsList = await response.json();
  /*const a = [3, 4, 5];
   console.log(robotsList.robots);
  console.log(a); */

  dispatch(loadRobotsAction(robotsList.robots));
};
