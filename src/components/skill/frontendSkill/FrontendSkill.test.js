import FrontendSkill from "./FrontendSkill";

describe("Testing components/skill/FrontendSkill", () => {
  it("Should render the component correctly", () => {
    expect(FrontendSkill()).toMatchSnapshot();
  });
});
