import React from 'react';

interface InputProps {
  texto: string;
}

export function Input({ texto }: InputProps) {
  return <input type="text" className="w-64 p-2 rounded-sm" placeholder={texto} />;
}
