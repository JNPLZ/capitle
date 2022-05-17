import React from 'react';

type Props = {
    message: string
}

export default function Message({ message }:Props) {
  return (
    <div>
      <p>{message}</p>
    </div>
  );
}
