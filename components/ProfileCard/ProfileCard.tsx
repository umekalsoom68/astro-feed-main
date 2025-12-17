import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ProfileCardProps {
  name: string;
  role: string;
  image: string;
  github?: string; 
}

const ProfileCard: React.FC<ProfileCardProps> = ({ name, role, image, github }) => {
  return (
    <div className="bg-slate-800 p-6 rounded-lg text-center flex flex-col items-center">
      <div className="relative w-24 h-24 mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="rounded-full object-cover"
        />
      </div>
      
      <h3 className="text-xl font-bold mb-1">{name}</h3>
      <p className="text-gray-400 mb-4">{role}</p>

      {github && (
        <Link
          href={github}
          target="_blank"
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-full text-sm transition-all"
        >
          GitHub
        </Link>
      )}
    </div>
  );
};

export default ProfileCard;