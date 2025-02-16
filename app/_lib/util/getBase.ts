export default function getBase() {
  if (!process.env.NEXT_PUBLIC_BASE_URL) {
    return "/";
  }
  return process.env.NEXT_PUBLIC_BASE_URL;
}
