'use client';

import React from 'react';
import styles from './Header.module.scss';

export default function Header() {
  const handleScrollToId = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight + 600,
      behavior: 'smooth'
    });
  };

  return (
    <header className={styles.header}>
      <a href="#" onClick={() => scrollToBottom()}>
        Катерина Семёнова
      </a>
    </header>
  );
}
