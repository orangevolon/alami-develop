import InfrastructureSkill from "./InfrastructureSkill";

describe("Testing components/skill/InfrastructureSkill", () => {
  it("Should render the component correctly", () => {
    expect(InfrastructureSkill()).toMatchSnapshot();
  });
});
