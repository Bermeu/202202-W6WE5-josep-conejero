import StyledRobot from "./StyledRobot";

const RobotComponent = ({
  id,
  name,
  picture,
  velocity,
  resistance,
  creationDate,
}) => {
  return (
    <>
      <StyledRobot>
        <h2>Name: {name}</h2>
        <img src={picture} alt={`Robot ${name}`} />
        <span>
          <p>Speed: {velocity}</p>
          <p>Resistance: {resistance}</p>
          <p>Creation date: {creationDate}</p>
        </span>
      </StyledRobot>
    </>
  );
};

export default RobotComponent;
