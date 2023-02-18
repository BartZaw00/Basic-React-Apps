function Tour(props) {
    function handleClick() {
        props.onButtonClick(props.tour.id);
    }

    return (
        <article class="tour">
            <img src={props.tour.img} alt={props.tour.title} />
            <div class="tour-details">
                <div class="tour-details-header">
                    <h4>{props.tour.title}</h4>
                    <span class="price">${props.tour.price}</span>
                </div>
                <p class="description">{props.tour.description}</p>
                <button class="btn" onClick={handleClick}>Not Interested</button>
            </div>
        </article>
    )
}

export default Tour;