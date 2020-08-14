export function getContent(str) {
  let arr = str.split(" ");
  str = arr.slice(0, 22).join(" ");
  if (arr.length > 21) str += " ...";
  return str;
}

export function getTitle(str) {
  str = str.slice(0, 7);
  if (str.length > 6) str += " ...";
  return str;
}
