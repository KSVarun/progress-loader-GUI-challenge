const incBtn = document.getElementById('inc-btn');
const decBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');
const loadBtn = document.getElementById('load-btn');
const loaderLine = document.getElementById('loader-line');

// 400 is 0

loadBtn.addEventListener('click', () => {
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
    return;
  }
  loaderLine.classList.add('load');
});

incBtn.addEventListener('click', () => {
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
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
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
  }
  const currentProgress = loaderLine.style.strokeDasharray;
  if (Number(currentProgress) > 400) {
    loaderLine.style.strokeDasharray = `${Number(currentProgress) - 26}`;
  }
});

resetBtn.addEventListener('click', () => {
  if (loaderLine.classList.contains('load')) {
    loaderLine.classList.remove('load');
  }
  loaderLine.style.strokeDasharray = '400';
});
