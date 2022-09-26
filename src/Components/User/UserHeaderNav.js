import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { ReactComponent as Pictures } from '../../Assets/feed.svg';
import { ReactComponent as Statistics } from '../../Assets/estatisticas.svg';
import { ReactComponent as Add } from '../../Assets/adicionar.svg';
import { ReactComponent as Exit } from '../../Assets/sair.svg';
import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={styles.nav}>
      <NavLink to="/user">
        <Pictures />
        Minhas Fotos
      </NavLink>
      <NavLink to="/user/statistics">
        <Statistics />
        Estatísticas
      </NavLink>
      <NavLink to="/user/post">
        <Add />
        Adicionar Fotos
      </NavLink>
      <button onClick={userLogout}>
        <Exit />
        Sair
      </button>
    </nav>
  );
};

export default UserHeaderNav;
