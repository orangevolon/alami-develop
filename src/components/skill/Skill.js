import { withDOM } from "../../hocs";
import "./Skill.scss";

const Skill = ({ badges = [], document, title = "", description = "" }) => {
  const element = document.createElement("article");
  element.className = "skill__article";

  const titleElement = document.createElement("h3");
  titleElement.className = "title__h3";
  titleElement.innerText = title;
  element.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.className = "description__p";
  descriptionElement.innerText = description;
  element.appendChild(descriptionElement);

  const badgeContainerElement = document.createElement("div");
  badgeContainerElement.className = "badges__div";
  badges.forEach(badge => badgeContainerElement.appendChild(badge));
  element.appendChild(badgeContainerElement);

  return element;
};

export default withDOM(Skill);
