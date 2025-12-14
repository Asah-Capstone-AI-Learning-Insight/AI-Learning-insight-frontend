export function getInitials(name, opts = {}) {
  const {
    size = 64,
    rounded = true,
    bold = true,
    background = "0d8abc",
    color = "ffffff",
  } = opts;

  const safeName = name && name.trim() ? name.trim() : "User";

  const params = new URLSearchParams({
    name: safeName,
    size: String(size),
    rounded: String(size),
    bold: String(bold),
    background,
    color,
  });

  return `https://ui-avatars.com/api/?${params.toString()}`;
}
