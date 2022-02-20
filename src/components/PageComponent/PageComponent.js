import RobotComponent from "../RobotComponent/RobotComponent";
import { RobotsPageStyled } from "./PageStyled";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadRobotsListThunk } from "../../redux/thunk/robotsThunk";

const PageComponent = () => {
  const robotsList = useSelector((state) => state.robotsList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRobotsListThunk);
  }, [dispatch]);

  return (
    <>
      <RobotsPageStyled title="robots-list">
        {robotsList.map((robot) => {
          return (
            <RobotComponent
              key={robot.id}
              id={robot._id}
              name={robot.name}
              picture={robot.picture}
              velocity={robot.velocity}
              resistance={robot.resistance}
              creationDate={robot.creationDate}
            />
          );
        })}
      </RobotsPageStyled>
    </>
  );
};

export default PageComponent;
