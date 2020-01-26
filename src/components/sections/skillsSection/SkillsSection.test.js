import SkillsSection from "./SkillsSection";

describe("Testing components/skills/Skill", () => {
  it("Should render the component correctly", () => {
    expect(SkillsSection({})).toMatchSnapshot();
  });
});
