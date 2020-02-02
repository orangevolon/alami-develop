import { withDOM } from "@hocs";
import "./Skill.scss";

const Skill = ({ badges = [], document, title = "", description = "" }) => {
  const element = document.createElement("section");
  element.className = "skill__section";

  const contentElement = document.createElement("article");
  contentElement.className = "content__article";
  element.appendChild(contentElement);

  const titleElement = document.createElement("h3");
  titleElement.className = "title__h3";
  titleElement.innerText = title;
  contentElement.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "description__p";
  descriptionElement.innerText = description;
  contentElement.appendChild(descriptionElement);

  const badgeContainerElement = document.createElement("div");
  badgeContainerElement.className = "badges__div";
  badges.forEach(badge => badgeContainerElement.appendChild(badge));
  element.appendChild(badgeContainerElement);

  return element;
};

export default withDOM(Skill);
