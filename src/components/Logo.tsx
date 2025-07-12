import type { SVGProps } from "react";

export function Logo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="10" className="fill-primary" />
      <path d="m10 16 2-8 2 8" className="stroke-primary-foreground" />
      <path d="M12 12h3" className="stroke-primary-foreground" />
    </svg>
  );
}
