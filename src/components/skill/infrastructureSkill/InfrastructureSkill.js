import Skill from "../Skill";
import Badge from "../../badge/Badge";
import kubernetesBadge from "../../../assets/badges/kubernetes.svg";
import dockerBadge from "../../../assets/badges/docker.svg";
import jenkinsBadge from "../../../assets/badges/jenkins.svg";
import gcpBadge from "../../../assets/badges/gcp.svg";
import linuxBadge from "../../../assets/badges/linux.svg";
import "./InfrastructureSkill.scss";

const InfrastructureSkill = () => {
  const kubernetesBadgeElement = Badge({ src: kubernetesBadge });
  kubernetesBadgeElement.classList.add("kubernetes-badge__img");

  const dockerBadgeElement = Badge({ src: dockerBadge });
  dockerBadgeElement.classList.add("docker-badge__img");

  const jenkinsBadgeElement = Badge({ src: jenkinsBadge });
  jenkinsBadgeElement.classList.add("jenkins-badge__img");

  const gcpBadgeElement = Badge({ src: gcpBadge });
  gcpBadgeElement.classList.add("gcp-badge__img");

  const linuxBadgeElement = Badge({ src: linuxBadge });
  linuxBadgeElement.classList.add("linux-badge__img");

  const skillElement = Skill({
    badges: [
      kubernetesBadgeElement,
      dockerBadgeElement,
      jenkinsBadgeElement,
      gcpBadgeElement,
      linuxBadgeElement
    ],
    title: "Infrastructure",
    description: "Lorem Ipsum"
  });
  skillElement.classList.add("infrastructure-skill__article");

  return skillElement;
};

export default InfrastructureSkill;
