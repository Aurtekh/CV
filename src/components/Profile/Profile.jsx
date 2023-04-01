import React from 'react';
import avatar from '../../assets/img/avatar.jpg';

const Profile = () => {
  return (
    <section className="profile" id="profile">
      <div className="profile__wrapper">
        <div className="profile__container__FIO">
          <h1 className="profile__title">Daniil Ermolovich</h1>
          <div className="profile__subtitle">Frontend developer</div>
        </div>
        <img className="profile__avatar" src={avatar} alt="Avatar" />
      </div>
    </section>
  );
};

export default Profile;
