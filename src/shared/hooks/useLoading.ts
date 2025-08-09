import {useState} from "react";

export const useLoading = (initialState = false) => {
  const [loading, setLoading] = useState(initialState);

  const startLoading = () => setLoading(true);
  const stopLoading = () => setLoading(false);

  const waitWithLoading = async <T>(promise: Promise<T>): Promise<T> => {
    startLoading();
    try {
      const result = await promise;
      return result;
    } finally {
      stopLoading();
    }
  }

  return { loading, startLoading, stopLoading, waitWithLoading };
}
