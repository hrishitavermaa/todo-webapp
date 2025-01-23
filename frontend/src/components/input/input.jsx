import clsx from "clsx";

export default function Input({
  type,
  value,
  placeholder,
  cb,
  icon,
  classname,
}) {
  const inputCss =
    "block outline-none bg-todo rounded-lg border-2 border-input px-3 py-2 w-[350px] mb-5 focus:border-yellow-500 resize-none ";

  return (
    <div className="relative w-[350px]">
      <input
        type={type}
        value={value}
        onChange={(e) => {
          cb(e.target.value);
        }}
        placeholder={placeholder}
        className={clsx(inputCss, classname)}
        required
      />
      {icon && (
        <span className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer">
          {icon}
        </span>
      )}
    </div>
  );
}
