import UxSkill from "./UxSkill";

describe("Testing components/skill/uxSkill", () => {
  it("Should render the component correctly", () => {
    expect(UxSkill()).toMatchSnapshot();
  });
});
