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

const Skills = ({ document }) => {
  const element = document.createElement("div");

  element.appendChild(Badge({ src: photoshopBadge }));
  element.appendChild(Badge({ src: illustratorBadge }));
  element.appendChild(Badge({ src: sketchBadge }));
  element.appendChild(Badge({ src: xdBadge }));
  element.appendChild(Badge({ src: cssBadge }));
  element.appendChild(Badge({ src: htmlBadge }));
  element.appendChild(Badge({ src: vueBadge }));
  element.appendChild(Badge({ src: reduxBadge }));
  element.appendChild(Badge({ src: reactBadge }));
  element.appendChild(Badge({ src: jestBadge }));
  element.appendChild(Badge({ src: jsBadge }));
  element.appendChild(Badge({ src: nodeBadge }));
  element.appendChild(Badge({ src: expressBadge }));
  element.appendChild(Badge({ src: csharpBadge }));
  element.appendChild(Badge({ src: firebaseBadge }));
  element.appendChild(Badge({ src: firestoreBadge }));
  element.appendChild(Badge({ src: kubernetesBadge }));
  element.appendChild(Badge({ src: jenkinsBadge }));
  element.appendChild(Badge({ src: gcpBadge }));
  element.appendChild(Badge({ src: linuxBadge }));

  return element;
};

export default withDOM(Skills);
