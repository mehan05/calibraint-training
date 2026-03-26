function printPattern(size: number) {
  let num = size * size;
  let f = true;
  let res = "";

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      res += num + " ";

      if (f) {
        if (j + 1 < size) num--;
      } else {
        if (j + 1 < size) num++;
      }
    }

    f = !f;
    num = num - size;
    res += "\n";
  }

  return res;
}

console.log(printPattern(3));
