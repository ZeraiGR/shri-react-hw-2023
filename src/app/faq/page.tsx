import styles from './faq.module.css';
import Accordion from "@/app/ui/Accordion/Accordion";
import { data } from "./data";
import classNames from "classnames";
import {AccordionGroup} from "@/app/ui/Accordion/ui/AccordionGroup";

export default function Faq () {
    const defaultGroup = data[0].id;

    return (
        <section>
            <h1 className={classNames(styles.title, "title", "card")}>Вопросы-ответы</h1>
            <Accordion defaultGroup={defaultGroup}>
                {data.map(({title, text, id}) =>
                    <AccordionGroup key={id} title={title} id={id}>
                        {text}
                    </AccordionGroup>
                )}
            </Accordion>
        </section>
    )
}
