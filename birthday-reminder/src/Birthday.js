function Birthday({ birthday }) {
  const { name, age, img_url } = birthday;
  return (
    <div className="birthday">
      <div className="birthday-img">
        <img src={img_url} alt={name} />
      </div>
      <div className="birthday-details">
        <span>{name}</span>
        <span>{age} years</span>
      </div>
    </div>
  );
}

export default Birthday;
