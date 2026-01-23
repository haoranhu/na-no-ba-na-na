export default function Logo({ className = "w-8 h-8", color = "text-yellow-500" }: { className?: string; color?: string }) {
  return (
    <div className={`${className} relative flex items-center justify-center`}>
      {/* Partially peeled banana icon - cartoon style with black outline */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Main banana body (unpeeled part) - vibrant deep yellow, curves downward */}
        <path
          d="M6 5C6 5 8 3 12 4C16 5 18 7 18 11C18 15 16 19 12 20.5C8 22 6 20 6 18.5C6 17 5.5 15.5 5 14C4.5 12.5 5 8 6 5Z"
          fill="#FFD700"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Peeled fruit section (lighter yellow) - top left, curves upward */}
        <path
          d="M6 5C6 5 7 4 9 5C11 6 12 7.5 12 9.5C12 11.5 11 13 9 13.5C7 14 6 13 6 12C6 11 5.5 10 5 9C4.5 8 5 6 6 5Z"
          fill="#FFEB3B"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Banana stem (dark brown/black dot at the unpeeled end tip) */}
        <circle
          cx="17.5"
          cy="11"
          r="1.2"
          fill="#000000"
        />
        {/* Peel edge line (separation between peeled and unpeeled sections) */}
        <path
          d="M9 5 L12 9.5"
          stroke="#000000"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}

