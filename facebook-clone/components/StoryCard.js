import Image from "next/image";
import React from "react";

function StoryCard({ name, src, profile }) {
  return (
    <div className="relative  h-14 w-30 md:h-20 md:w-30 lg:h-48 lg:w-40">
      <div className="absolute top-3 h-11 left-3 bottom-0 opacity-0 border-3 border-solid border-blue-500  lg:opacity-100 rounded-full z-20">
        <Image
          className="rounded-full"
          src={profile}
          width={40}
          height={40}
          layout="fixed"
          objectFit="cover"
        />
      </div>
      <Image
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
        src={src}
        width={40}
        height={40}
        layout="fill"
      />
      <p className="absolute opacity-0 left-3 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate">
        {name}
      </p>
    </div>
  );
}

export default StoryCard;
