export function GetItalicizedRanges(root: HTMLElement): Array<[number, number]> {
  const range: [number, number][] = [];
  let counter = 0;
  const children = root.childNodes;
  children.forEach(child => {
    if (child.nodeName === '#text') {
      if (child.nodeValue) {
        counter += child.nodeValue.length;
      }
    } else if (child.nodeName === 'I') {
      if (child.textContent) {
        range.push([counter, counter + child.textContent.length - 1]);
        counter += child.textContent.length;
      }
    }
  });
  return range;
}
