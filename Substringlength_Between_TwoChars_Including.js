const subLength = (string, char) => {
  string = '#' + string + '#'
  let subStrings = string.split(char);
  if (subStrings.length !== 3) {
    return 0;
  }
  return subStrings[1].length + 2;
}