export function setToUrl(
  key: string,
  value: string,
  searchParams: URLSearchParams
) {
  try {
    searchParams.set(key, value);
    return 0;
  } catch (error) {
    console.error(error);
    return 1;
  }
}

export function getParams(key: string, searchParams: URLSearchParams) {
  try {
    return searchParams.get(key);
  } catch (error) {
    console.error(error);
    return null;
  }
}

export function removeParams(key: string, searchParams: URLSearchParams) {
  try {
    searchParams.delete(key);
    return 0;
  } catch (error) {
    console.error(error);
    return 1;
  }
}
