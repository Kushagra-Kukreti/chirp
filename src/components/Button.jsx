export default function Button({
  children,
  type = "button",
  bgColor = "bg-sky-700/100",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`
        inline-flex items-center justify-center
        px-5 py-2.5 rounded-xl font-medium
        ${bgColor} ${textColor} ${className}
        shadow-sm
        transition-all duration-200
        hover:opacity-90 hover:shadow-md
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        disabled:opacity-50 disabled:cursor-not-allowed
      `}
      {...props}
    >
      {children}
    </button>
  );
}
