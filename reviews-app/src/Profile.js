function Profile({name,job,img,text}) {
    return (
        <>
            <div className="profile-photo"><img src={img} alt={name} /></div>
            <div className="name">{name}</div>
            <div className="position">{job}</div>
            <div className="description">{text}</div>
        </>
    )
}

export default Profile;