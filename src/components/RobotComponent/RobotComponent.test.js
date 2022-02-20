import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../redux/store/store";
import RobotComponent from "./RobotComponent";

describe("Given a RobotComponent", () => {
  describe("When it's rendered", () => {
    test("Then it should render a listitem with a heading inside", () => {
      render(
        <Provider store={store}>
          <RobotComponent />
        </Provider>
      );
      const element = screen.getAllByRole("listitem");
      const expectedOutput = screen.getByRole("heading");
      expect(element[0]).toContainElement(expectedOutput);
    });
  });
});
