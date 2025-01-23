import Flag from "react-world-flags";

interface Props {
  onClick: () => void;
  code: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
}

export const Flags = ({
  onClick,
  code,
  alt,
  width = 30,
  height = 30,
  className = "cursor-pointer",
}: Props) => {
  return (
    <Flag
      onClick={onClick}
      code={code}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
};
