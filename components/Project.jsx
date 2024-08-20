// "use client";

// import Link from "next/link";

  "use client";

import { LazyMotion, domAnimation, m } from "framer-motion";
import { initial, animate, exit, transition } from "utils/motions";

export function Project({ title, description, link }) {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white">
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-300 text-base">
            {description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <a
            href={link}
            className="inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
          >
            View Project
          </a>
        </div>
      </div>
    );
  }
