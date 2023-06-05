import React from "react";
import type { FC } from "react";
import Image from "next/image";

export interface AvatarProps {
  containerClassName?: string;
  sizeClass?: string;
  radius?: string;
  imgUrl?: string;
  userName?: string;
  hasChecked?: boolean;
  hasCheckedClass?: string;
}

const avatarColors = [
  "#ffdd00",
  "#fbb034",
  "#ff4c4c",
  "#c1d82f",
  "#f48924",
  "#7ac143",
  "#30c39e",
  "#06BCAE",
  "#0695BC",
  "#037ef3",
  "#146eb4",
  "#8e43e7",
  "#ea1d5d",
  "#fc636b",
  "#ff6319",
  "#e01f3d",
  "#a0ac48",
  "#00d1b2",
  "#472f92",
  "#388ed1",
  "#a6192e",
  "#4a8594",
  "#7B9FAB",
  "#1393BD",
  "#5E13BD",
  "#E208A7",
];

const Avatar: FC<AvatarProps> = ({
  containerClassName = "",
  sizeClass = "h-6 w-6 text-sm",
  radius = "rounded-full",
  imgUrl,
  userName,
}) => {
  const url = imgUrl || "";
  const name = userName || "John Doe";
  const _setBgColor = (name: string) => {
    const backgroundIndex = Math.floor(
      name.charCodeAt(0) % avatarColors.length
    );
    return avatarColors[backgroundIndex];
  };

  return (
    <div className="flex">
      <div
        className={`relative inline-flex items-center justify-center font-semibold uppercase text-neutral-100 ${radius} ${sizeClass} ${containerClassName}`}
        style={{ backgroundColor: url ? undefined : _setBgColor(name) }}
      >
        {url && (
          <Image
            className={`absolute inset-0 h-full w-full object-cover ${radius}`}
            src={url}
            alt={name}
          />
        )}
        <span>{name[0]}</span>
      </div>
      <div className="ml-2">{name}</div>
    </div>
  );
};

export default Avatar;
