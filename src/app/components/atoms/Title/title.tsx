import React from "react";

interface TitleProps {
  name: string;
}

export function title(props: TitleProps) {
  return (
    <h2 className="text-5xl font-black text-white">
      {props.name}
    </h2>
  );
}
