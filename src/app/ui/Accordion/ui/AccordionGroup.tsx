"use client";

import React, {ReactNode, useContext} from "react";
import { AccordionContext } from "../Accordion";
import classNames from "classnames";
import styles from "./accordionGroup.module.css";

interface AccordionGroupProps {
  children: ReactNode;
  title: string;
  id: string;
}

export const AccordionGroup = ({ children, title, id }: AccordionGroupProps) => {
    const { activeGroup, switchGroup } = useContext(AccordionContext),
        isActive = activeGroup === id;

    const mods = classNames(
      {[styles.active]: isActive}, 
      styles.group,
      "card",
    );

    return (
        <li className={mods}>
            <button className={styles.button} onClick={() => switchGroup?.(id)} type="button">
                <span className={styles.title}>{title}</span>
                <svg width="30" height="30" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                    <path className={styles.icon} fillRule="evenodd" clipRule="evenodd" d="M11.0001 29.3334H19.0001C26.2401 29.3334 29.3334
                    26.2401 29.3334 19.0001V11.0001C29.3334 3.76008 26.2401 0.666748 19.0001 0.666748H11.0001C3.76008
                    0.666748 0.666748 3.76008 0.666748 11.0001V19.0001C0.666748 26.2401 3.76008 29.3334 11.0001
                    29.3334ZM2.66675 11.0001C2.66675 4.85341 4.85341 2.66675 11.0001 2.66675H19.0001C25.1467 2.66675
                    27.3334 4.85341 27.3334 11.0001V19.0001C27.3334 25.1467 25.1467 27.3334 19.0001 27.3334H11.0001C4.85341
                    27.3334 2.66675 25.1467 2.66675 19.0001V11.0001ZM14.2934 18.5868C14.4934 18.7868 14.7467 18.8801 15.0001
                    18.8801C15.2534 18.8801 15.5067 18.7868 15.7067 18.5868L20.4134 13.8801C20.8001 13.4934 20.8001 12.8534
                    20.4134 12.4668C20.0267 12.0801 19.3867 12.0801 19.0001 12.4668L15.0001 16.4668L11.0001 12.4668C10.6134
                    12.0801 9.9734 12.0801 9.58674 12.4668C9.20007 12.8534 9.20007 13.4934 9.58674 13.8801L14.2934
                    18.5868Z"/>
                </svg>
            </button>
            <p>{children}</p>
        </li>
    )
}
