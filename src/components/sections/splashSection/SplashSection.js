import { withDOM, withPubSub } from "../../../hocs";
import "./SplashSection.scss";
import avatarSrc from "../../../assets/avatar.png";
import { PUBSUB_SCROLL } from "../../../constants";

const SplashSection = ({ document, pubSub }) => {
  const element = document.createElement("section");
  element.className = "splash-section__section";

  const pictureElement = document.createElement("img");
  pictureElement.className = "picture__img";
  pictureElement.src = avatarSrc;
  pictureElement.width = 200;
  pictureElement.height = 200;
  element.appendChild(pictureElement);

  const titleElement = document.createElement("h1");
  titleElement.className = "title__h1";
  titleElement.innerText = "Amir Alami";
  element.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "description__p";
  descriptionElement.innerText = "Senior Full Stack Developer";
  element.appendChild(descriptionElement);

  pubSub.subscribe(PUBSUB_SCROLL, e => {
    pictureElement.style.transform = `translateY(${e / 2}px)`;
    pictureElement.style.filter = `blur(${e / 10}px)`;
    element.style.clipPath = `circle(${20000 / (e + 1)}px at center)`;
  });

  return element;
};

export default withPubSub(withDOM(SplashSection));
