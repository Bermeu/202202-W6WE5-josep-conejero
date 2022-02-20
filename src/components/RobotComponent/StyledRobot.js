import styled from "styled-components";

const StyledRobot = styled.li`
  background-color: white;
  display: flex;
  flex-direction: column;
  img {
    width: 200px;
    height: 400px;
  }

  h2 {
    font-size: 20px;
    text-align: left;
  }

  span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    padding: 0;

    p {
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;
      text-align: left;
    }
  }
`;

export default StyledRobot;
