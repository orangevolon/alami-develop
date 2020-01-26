import "./App.scss";
import { SkillsSection, SplashSection } from "@components";
import { PUBSUB_SCROLL } from "./constants";
import { withPubSub, withDOM } from "./hocs";
// import SplashSection from "./components/sections/splashSection/SplashSection";

const App = ({ pubSub, window }) => {
  // publish scroll event
  window.addEventListener("scroll", () => {
    pubSub.publish(PUBSUB_SCROLL, window.scrollY);
  });

  const element = document.createDocumentFragment();

  element.appendChild(SplashSection());
  element.appendChild(SkillsSection());

  return element;
};

export default withPubSub(withDOM(App));
