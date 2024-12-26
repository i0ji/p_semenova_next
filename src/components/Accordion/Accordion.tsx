import { Children } from 'react';
import styles from './Accordion.module.scss';

export default function Accordion() {
  return (
    <div className={styles.accordion}>
      {Children.map(children, (child) => (
        <div className={styles.accordionItem}>{child}</div>
      ))}
    </div>
  );
}
