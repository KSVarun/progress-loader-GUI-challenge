const incBtn = document.getElementById('inc-btn');
const decBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');
const loaderLine = document.getElementById('loader-line');

// 400 is 0

incBtn.addEventListener('click', () => {
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
  const currentProgress = loaderLine.style.strokeDasharray;
  if (Number(currentProgress) > 400) {
    loaderLine.style.strokeDasharray = `${Number(currentProgress) - 26}`;
  }
});

resetBtn.addEventListener('click', () => {
  const currentProgress = loaderLine.style.strokeDasharray;
  if (Number(currentProgress) > 400) {
    loaderLine.style.strokeDasharray = '400';
  }
});
