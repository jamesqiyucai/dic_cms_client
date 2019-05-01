export function GetItalicizedRanges(root: HTMLElement): Array<[number, number]> {
  const range = [];
  let counter = 0;
  const children = root.childNodes;
  console.log(children)
  children.forEach(child => {
    if (child.nodeName === '#text') {
      counter += child.nodeValue.length;
    } else if (child.nodeName === 'I') {
      range.push([counter, counter + child.textContent.length - 1]);
      counter += child.textContent.length;
    }
  });
  return range;
}
