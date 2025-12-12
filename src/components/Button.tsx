/**
 * @copyright 2024 Zhenghong Chen
 * @license Apache-2.0
 */

import { MouseEventHandler } from "react";

interface ButtonPrimaryProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
}

interface ButtonOutlineProps {
  href?: string;
  target?: string;
  label: string;
  icon?: string;
  classes?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement | HTMLButtonElement>;
}

const ButtonPrimary = ({
  href,
  target = "_blank",
  label,
  icon,
  classes,
}: ButtonPrimaryProps) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className={"btn btn-primary " + classes}
      >
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button className={"btn btn-primary " + classes}>
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

const ButtonOutline = ({
  href,
  target = "_self",
  label,
  icon,
  classes,
  onClick,
}: ButtonOutlineProps) => {
  if (href) {
    return (
      <a
        href={href}
        target={target}
        className={"btn btn-outline " + classes}
        onClick={onClick as MouseEventHandler<HTMLAnchorElement>}
      >
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </a>
    );
  } else {
    return (
      <button
        className={"btn btn-outline " + classes}
        onClick={onClick as MouseEventHandler<HTMLButtonElement>}
      >
        {label}

        {icon ? (
          <span className="material-symbols-rounded" aria-hidden="true">
            {icon}
          </span>
        ) : undefined}
      </button>
    );
  }
};

export { ButtonPrimary, ButtonOutline };
