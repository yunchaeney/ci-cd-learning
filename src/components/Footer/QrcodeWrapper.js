export default function QrcodeWrapper({ className }) {
  return (
    <>
      <svg
        viewBox="0 0 96 96"
        fill="none"
        aria-hidden="true"
        className={className}
      >
        <path
          d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
          strokeWidth="2"
          strokeLinecap="round"
        ></path>
      </svg>
    </>
  );
}
