import React from "react";

interface TextProps{
    texto: string;
}

export function text({texto}:TextProps){

    return <p className="text-center text-white rounded-lg  w-28 gradientP">{texto}</p>;
}