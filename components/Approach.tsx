import React from "react";
import { Meteors } from "./ui/Meteors";
import { approaches } from "../data";

const Approach = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple dark:text-purple-dark"> Approach</span>
      </h1>
      <div className="my-20 flex flex-wrap lg:flex-nowrap items-stretch justify-center gap-4">
        {approaches.map(({ id, title, description }) => (
          <div key={id} className="w-full sm:w-80 h-80 relative">
            <div className="absolute inset-0 h-full w-full rounded-full blur-3xl" />
            <div className="relative shadow-xl border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start bg-black-100" 
            >
              <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                {title}
              </h1>
              <p className="font-normal text-base text-slate-500 mb-4 relative z-50 line-clamp-3">
                {description}
              </p>
              {/* Meteor effect */}
              <Meteors number={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Approach;
