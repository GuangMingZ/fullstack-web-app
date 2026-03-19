import { useEffect, useMemo } from "react";

export function useDocumentTitle(...titleParts: string[]) {
  const title = useMemo(
    () => titleParts.filter(Boolean).join(" - "),
    [titleParts]
  );
  useEffect(() => {
    const originalTitle = document.title;
    document.title = title;
    return () => {
      document.title = originalTitle;
    };
  }, [title]);
}
