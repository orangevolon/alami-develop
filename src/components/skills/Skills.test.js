import Skills from "./Skills";

describe("Testing components/skills/Skill", () => {
  it("Should render the component correctly", () => {
    expect(Skills({})).toMatchSnapshot();
  });
});
