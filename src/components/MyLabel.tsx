import "./MyLabel.css";

export interface Props {
  /**
   * Text to display
   */
  label: string;
  /**
   * Size of the label
   */
  size?: "normal" | "h1" | "h2" | "h3";
  /**
   * Capitalize all letters
   */
  allCaps?: boolean;
  /**
   * Color of the label
   */
  color?: "text-primary" | "text-secondary" | "text-tertiary";
  /**
   * Font color
   */
  fontColor?: string;
  /**
   * Background color
   */
  backgroundColor?: string;
}

/**
 * !Todas son opcionales
 * allCaps: Boolean,
 * color: "text-primary" | "text-secondary" | "text-tertiary",
 * fontColor?: string, texto del span
 */

export const MyLabel = ({
  label,
  size = "normal",
  allCaps = false,
  color,
  fontColor,
  backgroundColor = "transparent",
}: Props) => {
  return (
    <span
      className={`${size} ${color} label`}
      style={{ color: fontColor, backgroundColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  );
};
