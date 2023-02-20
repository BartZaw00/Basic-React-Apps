function Experience(props) {
    return (
        <div className="experience-details">
            <div className="details-title">{props.job.title}</div>
            <div className="details-job">{props.job.company}</div>
            <div className="details-time">{props.job.time}</div>
            <div className="details">
                <div className="detail">
                    <span>{">>"}</span>
                    <p>{props.job.description1}</p>
                </div>
                <div className="detail">
                    <span>{">>"}</span>
                    <p>{props.job.description2}</p>
                </div>
                <div className="detail">
                    <span>{">>"}</span>
                    <p>{props.job.description3}</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;
