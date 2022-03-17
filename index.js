const incBtn = document.getElementById('inc-btn');
const decBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');
const loadBtn = document.getElementById('load-btn');
const loaderLine = document.getElementById('loader-line');

// 400 is 0
let interval = 0;

loadBtn.addEventListener('click', () => {
  if (interval) {
    return;
  }
  interval = setInterval(() => {
    const currentProgress = loaderLine.style.strokeDasharray;
    if (Number(currentProgress) === 0 || Number(currentProgress) >= 300) {
      loaderLine.style.strokeDasharray = '200';
      return;
    }
    if (Number(currentProgress) === 200) {
      loaderLine.style.strokeDasharray = '300';
    }
  }, 500);
});

incBtn.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = 0;
    loaderLine.style.strokeDasharray = '426';
    return;
  }
  const currentProgress = loaderLine.style.strokeDasharray;
  if (Number(currentProgress) === 0) {
    loaderLine.style.strokeDasharray = '426';
    return;
  }
  if (Number(currentProgress) < 790) {
    loaderLine.style.strokeDasharray = `${Number(currentProgress) + 26}`;
  }
});

decBtn.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = 0;
  }
  const currentProgress = loaderLine.style.strokeDasharray;
  if (Number(currentProgress) > 400) {
    loaderLine.style.strokeDasharray = `${Number(currentProgress) - 26}`;
  }
});

resetBtn.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    interval = 0;
  }
  loaderLine.style.strokeDasharray = '400';
});
