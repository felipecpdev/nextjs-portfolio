import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import {
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import PDF from "./ui/PDF";

export function Grid() {
    return (
        <section id="about">
            <div className="py-20 pt-36 w-full z-50">
                <h1 className="heading pt-[15rem] lg:pt-[5rem] pb-4">
                    Sobre <span className="text-purple">mí</span>
                </h1>
                <BentoGrid className="max-w-4xl mx-auto py-4 md:auto-rows-[20rem]">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            className={item.className}
                            icon={item.icon}
                            img={item.img}
                            imgClassName={item.imgClassName}
                        />
                    ))}
                </BentoGrid>

                <PDF />
            </div>
        </section>

    );
}

const items = [
    {
        title: "Creador de Código, Constructor de Sueños",
        description: "Entusiasta de la tecnología con pasión por el desarrollo.",
        className: "md:col-span-2",
        icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        img: "/b5.svg",
        imgClassName: "w-full h-full",
    },
    {
        title: "Trabajo en equipo",
        description: "Aporto mi experiencia para optimizar procesos y alcanzar los objetivos del equipo.",
        className: "md:col-span-1",
        icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        img: "/web_developer.svg",
        imgClassName: "w-full h-full",
    },
    {
        title: "El arte de diseñar",
        description: "Experiencia en el diseño y maquetado resposive, con flex-box y grid-css.",
        className: "md:col-span-1",
        icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        img: "/online_collaboration.svg",
        imgClassName: "w-full h-full",
    },
    {
        title: "El poder de la comunicación",
        description:
            "Puedo mantener comunicación con el equipo de desarrollo y siempre atento a cualquier duda que se presente para cumplir las tareas en el tiempo estimado.",
        className: "md:col-span-2",
        icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        img: "/developer_activity.svg",
        imgClassName: "",
    },
];
