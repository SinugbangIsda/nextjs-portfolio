import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
};

const Container = ({ 
  children
}: Props) => {
  return (
    <div className = "max-w-6xl sm:m-auto container break-words sm:p-6 p-8">
      { children }
    </div>
  )
};

export default Container;