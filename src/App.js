import "./App.scss";
import SplashSection from "@components/sections/splashSection/SplashSection";
import { PUBSUB_SCROLL } from "./constants";
import { withPubSub, withDOM } from "./hocs";
import Skills from "./components/skills/Skills";
// import SplashSection from "./components/sections/splashSection/SplashSection";

const App = ({ pubSub, window }) => {
  // publish scroll event
  window.addEventListener("scroll", () => {
    pubSub.publish(PUBSUB_SCROLL, window.scrollY);
  });

  const element = document.createDocumentFragment();

  element.appendChild(SplashSection());
  element.appendChild(Skills());

  return element;
};

export default withPubSub(withDOM(App));
