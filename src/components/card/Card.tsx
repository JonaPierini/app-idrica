import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Card = ({ children }: Props) => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-lg p-4 shadow-md">
      {children}
    </div>
  );
};
