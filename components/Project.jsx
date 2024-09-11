"use client";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";

export function Project({ name, description, link, image }) {
  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white"
        initial={initial}
        animate={animate}
        exit={exit}
        transition={transition}
      >
        {image && (
          <img
            className="w-full h-48 object-cover"
            src={image}
            alt={`${name} image`}
          />
        )}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-300 text-base">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold hover:bg-blue-600 transition"
          >
            View Project
          </a>
        </div>
      </m.div>
    </LazyMotion>
  );
}
