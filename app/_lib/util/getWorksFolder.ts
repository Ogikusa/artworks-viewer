export default function getWorksFolder() {
  const path = process.env.WORKS_FOLDER;
  if (!path) throw new Error();
  return path;
}
