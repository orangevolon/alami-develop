import "./App.scss";
import { Avatar } from "./components";
import { PUBSUB_SCROLL } from "./constants";
import { withPubSub, withDOM } from "./hocs";
import Skills from "./components/skills/Skills";

const App = ({ pubSub, window }) => {
  // publish scroll event
  window.addEventListener("scroll", () => {
    pubSub.publish(PUBSUB_SCROLL, window.scrollY);
  });

  const element = document.createDocumentFragment();

  const title = document.createElement("h1");
  title.innerText = "Amir Alami";
  title.className = "name";

  element.appendChild(Avatar());
  element.appendChild(title);
  element.appendChild(Skills());

  return element;
};

export default withPubSub(withDOM(App));
