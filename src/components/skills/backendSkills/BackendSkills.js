import Skill from "../../skill/Skill";
import Badge from "../../badge/Badge";
import nodeBadge from "../../../assets/badges/node.svg";
import expressBadge from "../../../assets/badges/express.svg";
import csharpBadge from "../../../assets/badges/csharp.svg";
import firebaseBadge from "../../../assets/badges/firebase.svg";
import firestoreBadge from "../../../assets/badges/firestore.svg";

const BackendSkill = () => {
  const nodeBadgeElement = Badge({ src: nodeBadge });
  nodeBadgeElement.className = "node-badge__img";

  const expressBadgeElement = Badge({ src: expressBadge });
  expressBadgeElement.classList.add("express-badge__img");

  const csharpBadgeElement = Badge({ src: csharpBadge });
  csharpBadgeElement.classList.add("scharp-badge__img");

  const firebaseBadgeElement = Badge({ src: firebaseBadge });
  firebaseBadgeElement.classList.add("firebase-badge__img");

  const firestoreBadgeElement = Badge({ src: firestoreBadge });
  firestoreBadgeElement.classList.add("firestore-badge__img");

  return Skill({
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
};

export default BackendSkill;
