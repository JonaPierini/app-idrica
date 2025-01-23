interface ButtonProps {
  action: () => void;
  title: string;
  style?: string;
  height?: string;
  width?: string;
}

export const Button = ({
  action,
  title,
  style,
  height = "h-10",
  width = "w-32",
}: ButtonProps) => {
  return (
    <button
      onClick={action}
      className={`bg-blue-600 text-white font-semibold rounded-lg ${height} ${width} ${style} hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`}
    >
      {title}
    </button>
  );
};
