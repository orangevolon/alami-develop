import "./App.scss";
import { Avatar } from "./components";
import { PUBSUB_SCROLL } from "./constants";
import { withPubSub, withDOM } from "./hocs";

const App = ({ pubSub, window }) => {
  // publish scroll event
  window.addEventListener("scroll", () => {
    pubSub.publish(PUBSUB_SCROLL, window.scrollY);
  });

  const root = document.createDocumentFragment();

  const title = document.createElement("h1");
  title.innerText = "Amir Alami";
  title.className = "name";

  root.appendChild(Avatar());
  root.appendChild(title);

  return root;
};

export default withPubSub(withDOM(App));
