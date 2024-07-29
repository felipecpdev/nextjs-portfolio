import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import { Vortex } from './ui/Vortex'

const Footer = () => {
    return (
        <footer className="w-full pt-20 pb-10 z-10" id="contact">
            <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-screen overflow-hidden">
                <Vortex
                    backgroundColor="black"
                    rangeY={800}
                    particleCount={500}
                    baseHue={120}
                    className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"
                >
                    <h2 className="text-white text-2xl md:text-6xl font-bold text-center">
                        Es momento de alcanzar tus objetivos. Contáctame ahora para agendar una videollamada.
                    </h2>
                    <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
                        <a href="mailto:felipe.contreras.dev@gmail.com">
                            <MagicButton
                                title="Contáctame"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                        </a>
                    </div>
                </Vortex>
            </div>
            <div className="flex mt-30 md:mt-10 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light">
                    Copyright © 2024 Felipe Contreras Pacheco
                </p>

                <div className="flex items-center md:gap-3 gap-6 mt-2 md:mt-0">
                    {socialMedia.map((info) => (
                        <div
                            key={info.id}
                            className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg  bg-white-100 rounded-lg border border-black-300"
                        >
                            <a href={info.ref} target="_blank" rel="noopener">
                                <img src={info.img} alt="icons" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

export default Footer