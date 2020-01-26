import { withDOM, withPubSub } from "../../../hocs";
import "./SplashSection.scss";
import avatarSrc from "../../../assets/picture.jpg";
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

  const contentWrapper = document.createElement("div");
  contentWrapper.className = "content-wrapper__div";
  element.appendChild(contentWrapper);

  const titleElement = document.createElement("h1");
  titleElement.className = "title__h1";
  titleElement.innerText = "Amir Alami";
  contentWrapper.appendChild(titleElement);

  const age = Math.floor(
    (Date.now() - new Date(1989, 6, 15)) / (1000 * 3600 * 24 * 365)
  );

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "description__p";
  descriptionElement.innerHTML = `
    Senior Full Stack Developer<br/>
    ${age} years old,<br/>
    +10 years of experience
  `;
  contentWrapper.appendChild(descriptionElement);

  pubSub.subscribe(PUBSUB_SCROLL, e => {
    pictureElement.style.transform = `translateY(${e / 2}px)`;
    pictureElement.style.filter = `blur(${e / 10}px)`;
    element.style.clipPath = `circle(${20000 / (e + 1)}px at center)`;
  });

  return element;
};

export default withPubSub(withDOM(SplashSection));
