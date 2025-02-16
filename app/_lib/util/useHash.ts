import { useSyncExternalStore } from "react";

export default function useHash(): [string, (newHash: string) => void] {
  const hash = useSyncExternalStore(
    (callback) => {
      const listener = () => {
        callback();
      };
      window.addEventListener("hashchange", listener);
      return () => {
        window.removeEventListener("hashchange", listener);
      };
    },
    () => window.location.hash,
    () => ""
  );
  const setHash = (newHash: string) => {
    if (!window) return;
    window.location.hash = newHash;
  };
  return [hash, setHash];
}
