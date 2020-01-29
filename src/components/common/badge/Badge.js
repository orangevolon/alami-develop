import { withDOM, withPubSub } from "@hocs";
import { PUBSUB_SCROLL } from "@constants";
import "./Badge.scss";
import transform from "../../../lib/transform";

const Badge = ({ src, document, window, pubSub }) => {
  const element = document.createElement("img");
  element.src = src;
  element.className = "badge__img";
  element.style.transformOrigin = "center center";

  pubSub.subscribe(PUBSUB_SCROLL, e => {
    element.style.transform = transform(-element.getBoundingClientRect().y)
      .offset(window.innerHeight / 2)
      .offset(-element.getBoundingClientRect().height / 2)
      .scale(5 / window.innerHeight)
      .inverseSquare(1)
      .scale(0.4)
      .offset(0.8)
      .format(val => `translate(-50%, -50%) scale(${val})`);
  });

  return element;
};

export default withDOM(withPubSub(Badge));
