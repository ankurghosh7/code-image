import { ReadonlyURLSearchParams } from "next/navigation";

export default function createUrl(
  pathName: string,
  searchParams: URLSearchParams | ReadonlyURLSearchParams
) {
  const params = new URLSearchParams(searchParams.toString());
  return pathName + "?" + params.toString();
}
