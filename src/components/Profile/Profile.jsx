import React from 'react';
import avatar from '../../assets/img/avatar.jpg';
import { useTranslation } from 'react-i18next';

const Profile = () => {
  const { t } = useTranslation();

  return (
    <section className="profile" id="profile">
      <div className="profile__wrapper">
        <img className="profile__avatar" src={avatar} alt="Avatar" />
        <div className="profile__cloud">
          <div className="profile__FIO">{t('Name')}</div>
          <div className="profile__FIO profile__FIO-gray">{t('Prof')}</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
