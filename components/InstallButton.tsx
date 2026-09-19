"use client";

export default function InstallButton({ installUrl }: { installUrl: string }) {
  return (
    <a className="button button-primary install-button" href={installUrl}>
      Add to Aria Workplace
      <span aria-hidden="true">↗</span>
    </a>
  );
}
