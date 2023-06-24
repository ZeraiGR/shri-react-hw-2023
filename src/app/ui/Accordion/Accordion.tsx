"use client";
import React, {useCallback, useState} from "react";
import styles from './accordion.module.css';

export const AccordionContext = React.createContext();

export default function Accordion ({ children, defaultGroup }) {
    const [activeGroup, setActiveGroup] = useState(defaultGroup);

    const switchGroup = useCallback((id) => {
        setActiveGroup(activeId => activeId === id ? undefined : id);
    }, []);

    return (
        <AccordionContext.Provider value={{activeGroup, switchGroup}}>
            <ul className={styles.accordion}>
                {children}
            </ul>
        </AccordionContext.Provider>
    );
};
