import { withDOM } from "../../hocs";
import BackendSkill from "./backendSkills/BackendSkills";
import FrontendSkills from "./frontendSkills/FrontendSkills";
import UxSkills from "./uxSkills/uxSkillss";
import "./Skills.scss";
import InfrastructureBadge from "./infrastructureSkills/InfrastructureSkills";

const Skills = ({ document }) => {
  const element = document.createElement("section");
  element.className = "skills__section";

  element.appendChild(UxSkills());
  element.appendChild(FrontendSkills());
  element.appendChild(BackendSkill());
  element.appendChild(InfrastructureBadge());

  return element;
};

export default withDOM(Skills);
