import { withDOM } from "../../hocs";
import BackendSkill from "../skill/backendSkill/BackendSkill";
import FrontendSkill from "../skill/frontendSkill/FrontendSkill";
import UxSkills from "../skill/uxSkill/UxSkill";
import InfrastructureSkill from "../skill/infrastructureSkill/InfrastructureSkill";
import "./Skills.scss";

const Skills = ({ document }) => {
  const element = document.createElement("section");
  element.className = "skills__section";

  element.appendChild(UxSkills());
  element.appendChild(FrontendSkill());
  element.appendChild(BackendSkill());
  element.appendChild(InfrastructureSkill());

  return element;
};

export default withDOM(Skills);
