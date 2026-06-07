function stringFormat(str) {
  return str.trim().toLowerCase().replaceAll(" ", "-");
}

export function findObjectFromName(arr, text) {
  if (!text) return undefined;
  return arr.find(({ name }) => stringFormat(name) === text.toLowerCase());
}

export function createTabArray(arr) {
  return arr.map(({ name }) => ({
    label: name,
    path: stringFormat(name),
  }));
}
