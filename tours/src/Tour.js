import { useState } from "react";

function Tour(props) {
    const [isToggled, setIsToggled] = useState(false);

    function handleClick() {
        props.onButtonClick(props.tour.id);
    }

    function truncateString(text, maxLength) {
        const truncatedString = text.substring(0, maxLength);
        const lastSpaceIndex = truncatedString.lastIndexOf(" ");

        if (lastSpaceIndex === -1)
            return truncatedString;

        if (truncatedString.charAt(lastSpaceIndex - 1).match(/[^a-zA-Z]/))
            return truncatedString.substring(0, lastSpaceIndex - 1);

        return truncatedString.substring(0, lastSpaceIndex);
    }

    return (
        <article className="tour">
            <img src={props.tour.img} alt={props.tour.title} />
            <div className="tour-details">
                <div className="tour-details-header">
                    <h4>{props.tour.title}</h4>
                    <span className="price">${props.tour.price}</span>
                </div>
                <p className="description">{
                    isToggled
                        ? props.tour.description + " "
                        : truncateString(props.tour.description, 130) + "... "
                }<button className="btn-see-more" onClick={() => setIsToggled(!isToggled)}>{isToggled ? 'Hide text' : 'Show more'}</button></p>
                <button className="btn-not-interested" onClick={handleClick}>Not Interested</button>
            </div>
        </article>
    )
}

export default Tour;