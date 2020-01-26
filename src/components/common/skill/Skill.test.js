import Skill from "./Skill";

describe("Testing components/skill", () => {
  it("Should render the skill correctly", () => {
    const badges = [...new Array(3)].map(() => document.createElement("div"));
    expect(Skill({ badges })).toMatchSnapshot();
  });
});
