/**
 * Combines multiple CSS class names into a single string
 * @param classes - CSS class names or conditional class objects
 * @returns Combined class names as a string
 *
 * @example
 * // Returns "btn btn-primary active"
 * classNames('btn', 'btn-primary', { active: true, disabled: false })
 */
export function classNames(
  ...classes: (string | Record<string, boolean> | undefined | null)[]
): string {
  return classes
    .filter(Boolean)
    .map((cls) => {
      if (typeof cls === "string") return cls;
      if (typeof cls === "object" && cls !== null) {
        return Object.entries(cls)
          .filter(([_, value]) => Boolean(value))
          .map(([key]) => key)
          .join(" ");
      }
      return "";
    })
    .join(" ")
    .trim();
}
