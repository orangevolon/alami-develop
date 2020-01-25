import { withPubSub, withDOM } from "../../hocs";
import "./Badge.scss";

const Badge = ({ src, document, pubSub }) => {
  const element = document.createElement("img");
  element.src = src;
  element.className = "badge__img";

  return element;
};

export default withPubSub(withDOM(Badge));
