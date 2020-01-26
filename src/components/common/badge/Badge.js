import { withDOM } from "@hocs";
import "./Badge.scss";

const Badge = ({ src, document }) => {
  const element = document.createElement("img");
  element.src = src;
  element.className = "badge__img";

  return element;
};

export default withDOM(Badge);
