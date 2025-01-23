import clsx from "clsx"

export default function Button({ label, className, onClick }) {
    return (
        <button type="submit" onClick={onClick} className={clsx("bg-yellow-500 px-7 py-2 rounded-lg", className)}>
          {label}
        </button>
    )
}