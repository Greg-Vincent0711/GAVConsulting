const Logo = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 276 96"
    role="img"
    aria-label="GAV Consulting"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="1.5"
      y="1.5"
      width="93"
      height="93"
      rx="10"
      stroke="currentColor"
      strokeWidth="3"
    />
    <text
      x="48"
      y="60"
      textAnchor="middle"
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="34"
      fontWeight="700"
      letterSpacing="1"
      fill="currentColor"
    >
      GAV
    </text>
    <text
      x="110"
      y="42"
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="26"
      fontWeight="600"
      fill="currentColor"
    >
      Consulting
    </text>
    <text
      x="111"
      y="66"
      fontFamily="Inter, system-ui, sans-serif"
      fontSize="12"
      fontWeight="500"
      letterSpacing="3"
      fill="currentColor"
      opacity="0.6"
    >
      EST. 2016
    </text>
  </svg>
);

export default Logo;
