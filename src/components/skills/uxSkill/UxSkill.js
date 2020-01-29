import { Badge, Skill } from "@components";
import photoshopBadge from "@assets/badges/photoshop.svg";
import illustratorBadge from "@assets/badges/illustrator.svg";
import sketchBadge from "@assets/badges/sketch.svg";
import xdBadge from "@assets/badges/xd.svg";

import "./UxSkill.scss";

const UxSkill = () => {
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
    description: `
    Even though, I’m not a UI/UX designer now, I have a robust understanding of the user experience concepts, from color psychology to the methodologies of the user research. I’ve also mastered several design tools including Sketch, Xd, Illustrator and Photoshop over the course of the last decade.
    `
  });
  skillElement.classList.add("ux-skill__article");

  return skillElement;
};

export default UxSkill;
