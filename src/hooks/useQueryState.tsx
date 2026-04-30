import { useSearchParams } from "react-router-dom";

export function useQueryState(paramName: string) {
  const [searchParams, setSearchParams] = useSearchParams();

  const value = searchParams.get(paramName) || "";

  const setValue = (newValue: string, options?: { clear?: string[] }) => {
    setSearchParams(
      (prev) => {
        const params = new URLSearchParams(prev);

        options?.clear?.forEach((param) => {
          params.delete(param);
        });

        if (newValue) {
          params.set(paramName, newValue);
        } else {
          params.delete(paramName);
        }

        return params;
      },
      { replace: true },
    );
  };

  return { value, setValue };
}
