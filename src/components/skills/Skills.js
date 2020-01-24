import { withDOM } from "../../hocs";
import Badge from "../badge/Badge";
import photoshopBadge from "../../assets/badges/photoshop.svg";
import illustratorBadge from "../../assets/badges/illustrator.svg";
import sketchBadge from "../../assets/badges/sketch.svg";
import xdBadge from "../../assets/badges/xd.svg";
import cssBadge from "../../assets/badges/css.svg";
import htmlBadge from "../../assets/badges/html.svg";
import vueBadge from "../../assets/badges/vue.svg";
import reduxBadge from "../../assets/badges/redux.svg";
import reactBadge from "../../assets/badges/react.svg";
import jestBadge from "../../assets/badges/jest.svg";
import jsBadge from "../../assets/badges/js.svg";
import nodeBadge from "../../assets/badges/node.svg";
import expressBadge from "../../assets/badges/express.svg";
import csharpBadge from "../../assets/badges/csharp.svg";
import firebaseBadge from "../../assets/badges/firebase.svg";
import firestoreBadge from "../../assets/badges/firestore.svg";
import kubernetesBadge from "../../assets/badges/kubernetes.svg";
import jenkinsBadge from "../../assets/badges/jenkins.svg";
import gcpBadge from "../../assets/badges/gcp.svg";
import linuxBadge from "../../assets/badges/linux.svg";
import Skill from "../skill/Skill";
import "./Skills.scss";

const Skills = ({ document }) => {
  const element = document.createElement("section");
  element.className = "skills__section";

  const uxSkillBadges = [
    Badge({ src: photoshopBadge }),
    Badge({ src: illustratorBadge }),
    Badge({ src: sketchBadge }),
    Badge({ src: xdBadge })
  ];
  element.appendChild(
    Skill({
      badges: uxSkillBadges,
      title: "UI/UX",
      description: "Lorem Ipsum"
    })
  );

  const frontendBadges = [
    Badge({ src: cssBadge }),
    Badge({ src: htmlBadge }),
    Badge({ src: vueBadge }),
    Badge({ src: reduxBadge }),
    Badge({ src: reactBadge }),
    Badge({ src: jestBadge }),
    Badge({ src: jsBadge })
  ];
  element.appendChild(
    Skill({
      badges: frontendBadges,
      title: "Front End Development",
      description: "Lorem Ipsum"
    })
  );

  const backendBadges = [
    Badge({ src: nodeBadge }),
    Badge({ src: expressBadge }),
    Badge({ src: csharpBadge }),
    Badge({ src: firebaseBadge }),
    Badge({ src: firestoreBadge })
  ];
  element.appendChild(
    Skill({
      badges: backendBadges,
      title: "Back End Development",
      description: "Lorem Ipsum"
    })
  );

  const infrastructureBadges = [
    Badge({ src: kubernetesBadge }),
    Badge({ src: jenkinsBadge }),
    Badge({ src: gcpBadge }),
    Badge({ src: linuxBadge })
  ];
  element.appendChild(
    Skill({
      badges: infrastructureBadges,
      title: "Infrastructure",
      description: "Lorem Ipsum"
    })
  );

  return element;
};

export default withDOM(Skills);
