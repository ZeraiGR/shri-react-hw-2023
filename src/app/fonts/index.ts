import {Roboto} from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ['latin', 'cyrillic'],
    variable: '--font-roboto',
    style: ["normal", "italic"],
});

export const sf_pro = localFont({
    src: [
        {
            path: './SFProText-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: './SFProText-RegularItalic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: './SFProText-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: './SFProText-Semibold.ttf',
            weight: '600',
            style: 'normal',
        },
    ],
    variable: '--font-sf-pro',
});
