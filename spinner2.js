const lines = ['\r|   ', '\r/   ', '\r-   ', '\r\\   '];

const spinner = () => {
  let time = 0;
  for (let i = 0; time < 10000; i++) {
    for (let i = 0; i < lines.length; i++) {
      setTimeout(() => {
        process.stdout.write(lines[i]);
      }, time += 200);
    }
  }
};

spinner();