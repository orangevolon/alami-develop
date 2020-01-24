import Skill from "../../skill/Skill";
import Badge from "../../badge/Badge";
import kubernetesBadge from "../../../assets/badges/kubernetes.svg";
import jenkinsBadge from "../../../assets/badges/jenkins.svg";
import gcpBadge from "../../../assets/badges/gcp.svg";
import linuxBadge from "../../../assets/badges/linux.svg";

const InfrastructureBadge = () => {
  const kubernetesBadgeElement = Badge({ src: kubernetesBadge });
  kubernetesBadgeElement.classList.add("kuberenetes-badge__img");

  const jenkinsBadgeElement = Badge({ src: jenkinsBadge });
  jenkinsBadgeElement.classList.add("jenkins-badge__img");

  const gcpBadgeElement = Badge({ src: gcpBadge });
  gcpBadgeElement.classList.add("gcp-badge__img");

  const linuxBadgeElement = Badge({ src: linuxBadge });
  linuxBadgeElement.classList.add("linux-badge__img");

  return Skill({
    badges: [
      kubernetesBadgeElement,
      jenkinsBadgeElement,
      gcpBadgeElement,
      linuxBadgeElement
    ],
    title: "Infrastructure",
    description: "Lorem Ipsum"
  });
};

export default InfrastructureBadge;
