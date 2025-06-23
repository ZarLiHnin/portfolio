type ButtonProps = {
  color?: "blue-700" | "blue-600" | "yellow-500";
  children: React.ReactNode;
};

export default function Button({ color = "blue-700", children }: ButtonProps) {
  const colorClass = {
    "blue-700": "bg-blue-700 text-white",
    "blue-600": "bg-blue-600 text-white",
    "yellow-500": "bg-yellow-500 text-blue-900",
  }[color];

  return (
    <button className={`${colorClass} px-4 py-2 rounded`}>{children}</button>
  );
}
