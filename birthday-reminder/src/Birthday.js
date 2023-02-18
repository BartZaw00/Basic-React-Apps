function Birthday(props) {
    return (<div className="birthday">
        <div className="birthday-img">
            <img src={props.birthday.img_url} alt="" />
        </div>
        <div className="birthday-details">
            <span>{props.birthday.name}</span>
            <span>{props.birthday.age} years</span>
        </div>
    </div>)
}

export default Birthday;