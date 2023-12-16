export function getIdAndEmailFromToken(token: string): {
  id: string;
  email: string;
} {
  const { sub: id, email } = JSON.parse(atob(token.split(".")[1]));
  return { id, email };
}
