import React from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export const Profile = ({ avatar, first_name, last_name, title }) => {
  return (
    <>
      <div className="profile-photo">
        <img src={avatar} alt="member" />
      </div>
      <div className="name">
        {first_name} {last_name}
      </div>
      <div className="position">{title}</div>
      <div className="description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        sapiente asperiores corporis laboriosam impedit ratione tenetur soluta
        maiores aliquam ducimus!
      </div>
      <div className="buttons">
        <FaArrowAltCircleLeft className="btn" />
        <FaArrowAltCircleRight className="btn" />
      </div>
      <div className="button-surprise-me">Surprise Me</div>
    </>
  );
};
