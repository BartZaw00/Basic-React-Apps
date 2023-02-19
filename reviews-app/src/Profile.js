function Profile(props) {

    

    return (
        <>
            <div className="profile-photo"><img src={props.review.img} alt={props.review.name} /></div>
            <div className="name">{props.review.name}</div>
            <div className="position">{props.review.job}</div>
            <div className="description">{props.review.text}</div>
        </>
    )
}

export default Profile;