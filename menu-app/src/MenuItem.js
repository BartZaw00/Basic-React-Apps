function MenuItem({item}) {
    return (
        <div className="menu-element">
            <img src={item.image} alt={item.name} />
            <div className="description">
                <div className="description-header">
                    <span className="description-title">{item.name}</span>
                    <span className="description-price">{item.price}</span>
                </div>
                <div className="description-header-line"></div>
                <div className="description-text">{item.description}</div>
            </div>
        </div>
    );
}

export default MenuItem;
