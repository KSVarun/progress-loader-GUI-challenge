const incBtn = document.getElementById('inc-btn');
const decBtn = document.getElementById('dec-btn');
const resetBtn = document.getElementById('reset-btn');
const loaderLine = document.getElementById('loader-line');

function getValueFromPercent(percent) {
  return Number(percent.split('%')[0]);
}

incBtn.addEventListener('click', () => {
  const currentProgress = getValueFromPercent(loaderLine.getAttribute('x2'));
  if (currentProgress < 98) {
    loaderLine.style.strokeWidth = 8;
    loaderLine.setAttribute('x1', '2%');
    loaderLine.setAttribute('x2', `${currentProgress + 14}%`);
  }
});

decBtn.addEventListener('click', () => {
  const currentProgress = getValueFromPercent(loaderLine.getAttribute('x2'));
  if (currentProgress > 0) {
    loaderLine.setAttribute('x2', `${currentProgress - 14}%`);
    if (currentProgress === 14) {
      loaderLine.style.strokeWidth = 0;
      loaderLine.setAttribute('x1', '0%');
    }
  }
});

resetBtn.addEventListener('click', () => {
  const currentProgress = getValueFromPercent(loaderLine.getAttribute('x2'));
  if (currentProgress > 0) {
    loaderLine.setAttribute('x2', '0%');
    loaderLine.setAttribute('x1', '0%');
    loaderLine.style.strokeWidth = 0;
  }
});
