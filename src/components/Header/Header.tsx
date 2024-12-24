'use client';

import React from 'react';
import styles from './Header.module.scss';
import scrollToSide from '@/services/scrollToSide';

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="#" onClick={() => scrollToSide('bottom')}>
        Катерина Семёнова
      </a>
    </header>
  );
}
