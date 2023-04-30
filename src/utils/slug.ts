export default function slug(str: string): string {
  str = str.replace(/[^\w\s]/gi, "-");
  str = str.replace(/\s+/g, "-").toLowerCase();
  return str;
}
