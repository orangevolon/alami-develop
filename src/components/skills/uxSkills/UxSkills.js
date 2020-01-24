import Skill from "../../skill/Skill";
import Badge from "../../badge/Badge";
import photoshopBadge from "../../../assets/badges/photoshop.svg";
import illustratorBadge from "../../../assets/badges/illustrator.svg";
import sketchBadge from "../../../assets/badges/sketch.svg";
import xdBadge from "../../../assets/badges/xd.svg";
import "./UxSkills.scss";

const UxSkills = () => {
  const photoshopBadgeElement = Badge({ src: photoshopBadge });
  photoshopBadgeElement.classList.add("photoshop-badge__img");

  const illustratorBadgeElement = Badge({ src: illustratorBadge });
  illustratorBadgeElement.classList.add("illustrator-badge__img");

  const sketchBadgeElement = Badge({ src: sketchBadge });
  sketchBadgeElement.classList.add("sketch-badge__img");

  const xdBadgeElement = Badge({ src: xdBadge });
  xdBadgeElement.classList.add("xd-badge__img");

  const skillElement = Skill({
    badges: [
      photoshopBadgeElement,
      illustratorBadgeElement,
      sketchBadgeElement,
      xdBadgeElement
    ],
    title: "UI/UX",
    description: "Lorem Ipsum"
  });
  skillElement.classList.add("ux-skill__article");

  return skillElement;
};

export default UxSkills;