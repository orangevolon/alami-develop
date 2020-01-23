import "./Avatar.scss";
import avatar from "../../assets/avatar.png";
import { withPubSub, withDOM } from "../../hocs";
import { PUBSUB_SCROLL } from "../../constants";

const Avatar = ({ pubSub, document }) => {
  const element = document.createElement("img");

  element.src = avatar;
  element.alt = "Amir Alami";
  element.className = "avatar__img";

  pubSub.subscribe(PUBSUB_SCROLL, e => {
    element.style.transform = `rotateY(${e}deg)`;
  });

  return element;
};

export default withPubSub(withDOM(Avatar));
