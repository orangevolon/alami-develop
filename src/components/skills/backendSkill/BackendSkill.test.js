import BackendSkill from "./BackendSkill";

describe("Testing components/skill/FrontendSkill", () => {
  it("Should render the component correctly", () => {
    expect(BackendSkill()).toMatchSnapshot();
  });
});
