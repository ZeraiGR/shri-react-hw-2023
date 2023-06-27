"use client";
import React, {ReactNode, useCallback, useState} from "react";
import styles from './accordion.module.css';

interface IAccordionContext {
  activeGroup?: string | undefined
  switchGroup?: (id: string) => void;
}

export const AccordionContext = React.createContext<IAccordionContext>({});

interface AccordionProps {
  children: ReactNode;
  defaultGroup: string;
}

export default function Accordion ({ children, defaultGroup }: AccordionProps) {
    const [activeGroup, setActiveGroup] = useState<string | undefined>(defaultGroup);

    const switchGroup = useCallback((id: string) => {
        setActiveGroup((activeId) => activeId === id ? undefined : id);
    }, []);

    return (
        <AccordionContext.Provider value={{activeGroup, switchGroup}}>
            <ul className={styles.accordion}>
                {children}
            </ul>
        </AccordionContext.Provider>
    );
};
