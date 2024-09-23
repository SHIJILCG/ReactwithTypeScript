import React from "react";
type HorizonalPostion = "left" | "center" | "right";
type VertivalPostion = "top" | "center" | "bottom";
type PostionProps = {
  position:
    | Exclude<`${HorizonalPostion} - ${VertivalPostion}`, "center - center">
    | "center";
};
export const Toast = ({ position }: PostionProps) => {
  return <div> Toast Noatification Position -{position}</div>;
};
