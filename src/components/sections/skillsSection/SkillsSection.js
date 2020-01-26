import { withDOM } from "@hocs";
import {
  BackendSkill,
  FrontendSkill,
  UxSkill,
  InfrastructureSkill
} from "@components";

import "./SkillsSection.scss";

const Skills = ({ document }) => {
  const element = document.createElement("section");
  element.className = "skills__section";

  element.appendChild(UxSkill());
  element.appendChild(FrontendSkill());
  element.appendChild(BackendSkill());
  element.appendChild(InfrastructureSkill());

  return element;
};

export default withDOM(Skills);
