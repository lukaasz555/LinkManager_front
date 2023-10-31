export function getRandomID(): number {
  let id = "";

  for (let i = 0; i < 3; i++) {
    const n = Math.floor(Math.random() * 10);
    id += String(n);
  }

  return parseInt(id);
}
