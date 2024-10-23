import React from "react";
interface MarqueeProps {
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    children?: React.ReactNode;
    vertical?: boolean;
    repeat?: number;
    [key: string]: unknown;
}
export default function Marquee({ className, reverse, pauseOnHover, children, vertical, repeat, ...props }: MarqueeProps): React.JSX.Element;
export {};
//# sourceMappingURL=marquee.d.ts.map