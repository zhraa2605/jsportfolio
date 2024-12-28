'use client'
import { cn } from "./../../lib/utils";
// import { Globe } from "./GridGlobe.tsx";
import  {BackgroundGradientAnimation} from "./Gradientbg";
import { useState } from "react";
import animationData from "./../../data/confetti.json"
import Lottie from "react-lottie";
import MagicButton from "./MagicButton";
import {IoCopyOutline} from "react-icons/io5";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-7 grid-cols-1 md:grid-cols-6 lg:grid-cols-5 gap-4 lg:gap-8 mx-auto ",
        className
      )}
      
    >
      {children}
    </div>
  );
};
export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg,
  }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
  }) => {
    const [copied , setCopied] = useState(false);
    const handleCopy = () => {
      navigator.clipboard.writeText("contact@gmail.com").then(() => {
      setCopied(true);
      });
    }

    return (
      <div
        className={cn(
          "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
          className
        )}
        style={{
          background: 'rgb(4,7,29)',
          backgroundColor:
            'linear-gradient(90deg , rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100% )',
        }}
      >
        <div className={cn(id === 5 && 'flex justify-center', 'h-full')}>
          <div className="w-full h-full absolute">
            {img && (
              <img
                src={img}
                alt={img}
                className={cn(imgClassName, 'object-cover object-center')}
              />
            )}
          </div>
  
          <div className={cn('absolute right-0 bottom-0', id === 5 && 'w-full opacity-80')}>
            {spareImg && (
              <img
                src={spareImg}
                alt={spareImg}
                className={cn(imgClassName, 'object-cover object-center')}
              />
            )}
          </div>
  
          {id === 5 && (
            <BackgroundGradientAnimation>
              <div className="absolute z-50 flex items-center justify-center text-white font-bold">
                {/* Add any content you want inside this */}
              </div>
            </BackgroundGradientAnimation>
          )}
  
          <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full h-40 flex flex-col px-5 p-5 lg:p-10')}>
            <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-10">
              {description}
            </div>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
                {title}
                
            </div>
          {id === 2 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-4 ">
                {['React.js' , 'Next.js' , 'TypeScript'].map((item ) => (
                  <span key={item } className="py-2  lg:px-3 px-3 text-xs  opacity-50 rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                  
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

             </div>
             <div className="flex flex-col gap-3 lg:gap-4 ">
             <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {['Django' , 'Flask' , 'MySQL' , ].map((item ) => (
                  <span key={item } className="py-2  lg:px-3 px-3 text-xs  opacity-50  rounded-lg text-center bg-[#10132E]">
                    {item}
                  </span>
                  
                ))}
               

             </div>
             
            </div>
          )
          
          }
          {id === 5 && (
            <div className=" mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}> 
                <Lottie options = {{loop: copied , autoplay : copied , animationData , rendererSettings :{ PresentationControls: 'xMidYMid slice'} }}/>
                </div>
                <MagicButton title={ copied ? 'Email Copied' : 'Copy my Email' }
                icon={<IoCopyOutline />}
                position="left" 
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}/>
            </div> 
          ) }

          </div>

        </div>
      </div>
    );
  };
  