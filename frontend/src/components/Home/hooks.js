import { useEffect, useState } from 'react';
function useFetch(url) {
  const [fishes, setfish] = useState({ data: [] });
  async function fetchUrl() {
    const response = await fetch(url);
    const json = await response.json();
    setfish(json);
  }
  useEffect(() => {
    fetchUrl();
  }, []);
  return [fishes];
}
export { useFetch };
