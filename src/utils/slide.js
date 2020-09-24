export function getContent(str) {
  let arr = str.split(" ");
  str = arr.slice(0, 22).join(" ");
  if (arr.length > 21) str += " ...";
  return str;
}

export function getTitle(str) {
  const str1 = str;
  str = str.slice(0, 7);
  if (str1.length > 7) str += " ...";
  return str;
}
