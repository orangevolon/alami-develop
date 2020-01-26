import { Skill, Badge } from "@components";
import nodeBadge from "@assets/badges/node.svg";
import expressBadge from "@assets/badges/express.svg";
import csharpBadge from "@assets/badges/csharp.svg";
import firebaseBadge from "@assets/badges/firebase.svg";
import firestoreBadge from "@assets/badges/firestore.svg";

import "./BackendSkill.scss";

const BackendSkill = () => {
  const nodeBadgeElement = Badge({ src: nodeBadge });
  nodeBadgeElement.className = "node-badge__img";

  const expressBadgeElement = Badge({ src: expressBadge });
  expressBadgeElement.classList.add("express-badge__img");

  const csharpBadgeElement = Badge({ src: csharpBadge });
  csharpBadgeElement.classList.add("csharp-badge__img");

  const firebaseBadgeElement = Badge({ src: firebaseBadge });
  firebaseBadgeElement.classList.add("firebase-badge__img");

  const firestoreBadgeElement = Badge({ src: firestoreBadge });
  firestoreBadgeElement.classList.add("firestore-badge__img");

  const skillElement = Skill({
    badges: [
      nodeBadgeElement,
      expressBadgeElement,
      csharpBadgeElement,
      firebaseBadgeElement,
      firestoreBadgeElement
    ],
    title: "Back End Development",
    description: "Lorem Ipsum"
  });
  skillElement.classList.add("backend-skill__article");

  return skillElement;
};

export default BackendSkill;
