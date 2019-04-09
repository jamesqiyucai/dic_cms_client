export function ItalicizeText(text: string, ranges: Array<[number, number]>): string {
  const children: string[] = [];

  if (ranges.length === 0) {
    return text;
  } else if (ranges.length === 1) {
    const range = ranges[0];
    children.push(text.substring(0, range[0]));
    children.push(`<i>${text.substring(range[0], range[1] + 1)}</i>`);
    children.push(text.substring(range[1] + 1));
    return children.join('');
  } else {
    ranges.forEach((range, index, array) => {
      if (index === 0) {
        children.push(text.substring(0, range[0]));
        console.log(text.substring(0, range[0]));
        children.push(`<i>${text.substring(range[0], range[1] + 1)}</i>`);
      } else if (index === array.length - 1) {
        const previousRange = array[index - 1];
        children.push(text.substring(previousRange[1] + 1, range[0]));
        children.push(`<i>${text.substring(range[0], range[1] + 1)}</i>`);
        children.push(text.substring(range[1] + 1));
      } else {
        const previousRange = array[index - 1];
        children.push(text.substring(previousRange[1] + 1, range[0]));
        children.push(`<i>${text.substring(range[0], range[1] + 1)}</i>`);
      }
    });
    return children.join('');
  }
}
