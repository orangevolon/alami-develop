import { PUBSUB_SCROLL } from "@constants";
import avatarSrc from "@assets/picture.jpg";
import { withDOM, withPubSub } from "@hocs";

import "./SplashSection.scss";
import transform from "../../../lib/transform";

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
    element.style.clipPath = transform(e)
      .cutOff(0, window.innerHeight)
      .scale(1 / window.innerHeight)
      .inverseSquare(1)
      .scale(window.innerWidth)
      .format(val => `circle(${val}px at center)`);

    pictureElement.style.filter = transform(e)
      .cutOff(0, window.innerHeight)
      .scale(100 / window.innerHeight)
      .format(val => `blur(${val}px)`);

    pictureElement.style.transform = transform(e)
      .cutOff(0, window.innerHeight)
      .scale(1 / 2)
      .format(val => `translateY(${val}px)`);
  });

  return element;
};

export default withPubSub(withDOM(SplashSection));
