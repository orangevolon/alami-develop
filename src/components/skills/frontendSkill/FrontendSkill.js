import { Badge, Skill } from "@components";
import cssBadge from "@assets/badges/css.svg";
import htmlBadge from "@assets/badges/html.svg";
import vueBadge from "@assets/badges/vue.svg";
import reduxBadge from "@assets/badges/redux.svg";
import reactBadge from "@assets/badges/react.svg";
import jestBadge from "@assets/badges/jest.svg";
import jsBadge from "@assets/badges/js.svg";

import "./FrontendSkill.scss";

const FrontendSkill = () => {
  const cssBadgeElement = Badge({ src: cssBadge });
  cssBadgeElement.classList.add("css-badge__img");

  const htmlBadgeElement = Badge({ src: htmlBadge });
  htmlBadgeElement.classList.add("html-badge__img");

  const vueBadgeElement = Badge({ src: vueBadge });
  vueBadgeElement.classList.add("vue-badge__img");

  const reduxBadgeElement = Badge({ src: reduxBadge });
  reduxBadgeElement.classList.add("redux-badge__img");

  const reactBadgeElement = Badge({ src: reactBadge });
  reactBadgeElement.classList.add("react-badge__img");

  const jestBadgeElement = Badge({ src: jestBadge });
  jestBadgeElement.classList.add("jest-badge__img");

  const jsBadgeElement = Badge({ src: jsBadge });
  jsBadgeElement.classList.add("js-badge__img");

  const skillElement = Skill({
    badges: [
      cssBadgeElement,
      htmlBadgeElement,
      vueBadgeElement,
      reduxBadgeElement,
      reactBadgeElement,
      jestBadgeElement,
      jsBadgeElement
    ],
    title: "Front End Development",
    description: `The front-end is my strongest point in terms of experience and knowledge. I have worked with several front-end methodologies and technologies over the last decade, In the last two years, however, my main focus was React, React Native and VueJs.
    In the last two years, I have architectured 4 React web projects, 1 React Native project and 2 VueJS projects. I have also collaborated on many more front-end projects.`
  });
  skillElement.classList.add("frontend-skill__article");

  return skillElement;
};

export default FrontendSkill;
