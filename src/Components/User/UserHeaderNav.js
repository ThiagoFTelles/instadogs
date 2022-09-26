import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as Pictures } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as Add } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/user" end>
        <Pictures />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to="/user/statistics">
        <Statistics />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to="/user/post">
        <Add />
        {mobile && 'Adicionar Fotos'}
      </NavLink>
      <button onClick={userLogout}>
        <Exit />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
