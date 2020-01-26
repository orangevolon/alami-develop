import { withDOM } from "../../../hocs";

const SplashSection = ({ document }) => {
  const element = document.createElement("section");
  element.innerText = "Splash section";

  return element;
};

export default withDOM(SplashSection);
