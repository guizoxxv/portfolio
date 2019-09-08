import React from 'react';
import styles from './Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <span className={`font-bold ${styles.sameClass}`}>Header</span>
    </header>
  );
}

export default Header;
