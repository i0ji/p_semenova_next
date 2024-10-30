import React from "react";
import styles from "./Footer.module.scss";

export const footer =4;

export default function Footer() {
    return (
        <div className={styles.footer}>
            <hr />

            <div id="about" className={styles.footer__about}>
                <h4>Катерина Семёнова</h4>
                <article>
                    Графический дизайнер с&nbsp;6-летним опытом. На&nbsp;данный момент
                    занимаюсь разработкой и&nbsp;поддержкой фирменных стилей, навигации,
                    созданием key visual, POS&nbsp;-&nbsp;материалов, полиграфической
                    продукции для&nbsp;отелей, бизнес-центров
                    и&nbsp;торговых&nbsp;центров.
                    <br />
                    <br />
                    В 2017&nbsp;году получила высшее образование в&nbsp;Национальном
                    Институте Дизайна по&nbsp;направлению «Графический дизайн».
                    <br />
                    <br />
                    Участвовала в&nbsp;улучшении функционала инструмента Поиск
                    для&nbsp;приложения Иви в&nbsp;процессе прохождения годового курса
                    «UX/UI: дизайн цифровых продуктов». Ознакомиться с&nbsp;проектом можно
                    на&nbsp;
                    <a href="https://www.behance.net/gallery/182271937/Search-Online-cinema-IVI">
                        Behance
                    </a>
                    .
                </article>
            </div>

            <hr />
            <div className={styles.footer__contacts}>
                <h4>Контакты</h4>
                <div>
                    <p>
                        <a href="tel:+79055386075">905 538 60 75</a>
                    </p>
                    <p>
                        <a href="mailto:KaterinaSemenovaV@ya.ru">
                            KaterinaSemenovaV@ya.ru
                        </a>
                    </p>
                    <p>
                        <a href="https://t.me/KateSemenovaV">KateSemenovaV</a>
                    </p>
                    <p>
                        <a href="https://www.behance.net/KateMojojo">
                            Behance/KateSemenova
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
}