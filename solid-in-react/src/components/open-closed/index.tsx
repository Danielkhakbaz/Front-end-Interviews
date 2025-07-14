import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
}

const OpenClosed = ({
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded cursor-pointer hover:opacity-80",
        variant === "primary"
          ? "bg-blue-500 text-white"
          : "bg-gray-300 text-black",
        className
      )}
      {...props}
    />
  );
};

export default OpenClosed;
