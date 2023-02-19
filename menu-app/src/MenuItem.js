function MenuItem(props) {
    return (
        <div className="menu-element">
            <img src={props.item.image} alt={props.item.name} />
            <div className="description">
                <div className="description-header">
                    <span className="description-title">{props.item.name}</span>
                    <span className="description-price">{props.item.price}</span>
                </div>
                <div className="description-header-line"></div>
                <div className="description-text">{props.item.description}</div>
            </div>
        </div>
    );
}

export default MenuItem;
