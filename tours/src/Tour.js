import { useState } from "react";

const Tour = ({ id, img, title, price, description, onButtonClick }) => {
  const [isToggled, setIsToggled] = useState(false);

  function handleClick() {
    onButtonClick(id);
  }

  function truncateString(text, maxLength) {
    const truncatedString = text.substring(0, maxLength);
    const lastSpaceIndex = truncatedString.lastIndexOf(" ");

    if (lastSpaceIndex === -1) return truncatedString;

    if (truncatedString.charAt(lastSpaceIndex - 1).match(/[^a-zA-Z]/))
      return truncatedString.substring(0, lastSpaceIndex - 1);

    return truncatedString.substring(0, lastSpaceIndex);
  }

  return (
    <article className="tour">
      <img src={img} alt={title} />
      <div className="tour-details">
        <div className="tour-details-header">
          <h4>{title}</h4>
          <span className="price">${price}</span>
        </div>
        <p className="description">
          {isToggled
            ? description + " "
            : truncateString(description, 130) + "... "}
          <button
            className="btn-see-more"
            onClick={() => setIsToggled(!isToggled)}
          >
            {isToggled ? "Hide text" : "Show more"}
          </button>
        </p>
        <button className="btn-not-interested" onClick={handleClick}>
          Not Interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
