import { withDOM } from "../../hocs";

const Skill = ({ badges = [], document, title = "", description = "" }) => {
  const element = document.createElement("article");

  const titleElement = document.createElement("h3");
  titleElement.innerText = title;
  element.appendChild(titleElement);

  const descriptionElement = document.createElement("p");
  descriptionElement.innerText = description;
  element.appendChild(descriptionElement);

  const badgeContainerElement = document.createElement("div");
  badges.forEach(badge => badgeContainerElement.appendChild(badge));
  element.appendChild(badgeContainerElement);

  return element;
};

export default withDOM(Skill);
