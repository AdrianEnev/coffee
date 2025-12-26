import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    containerClass?: string;
}

export function Section({ children, className, id, containerClass }: SectionProps) {
    return (
        <section id={id} className={cn("w-full py-20 md:py-32", className)}>
            <div className={cn("container mx-auto px-6 md:px-12 max-w-7xl", containerClass)}>
                {children}
            </div>
        </section>
    );
}
