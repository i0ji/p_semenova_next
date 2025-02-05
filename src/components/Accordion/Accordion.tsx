import styles from './Accordion.module.scss';

export default function Accordion(
  props: AccordionModelNamespace.AccordionModel
) {
  const activeStatus = props.visibility ? styles.active : '';

  return (
    <div>
      <p className={`${styles.accordion__content} ${activeStatus}`}>
        {props.plot}
      </p>
    </div>
  );
}
