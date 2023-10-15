import React from "react";

interface TitleProps {
  name: string;
  className?: string;
}

export function title(props: TitleProps) {
  return (
    <h2 className={props.className}>
      {props.name}
    </h2>
  );
}
export default title;
