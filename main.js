console.log('in main.js');

window.onload = function() {

  const boxes = document.querySelectorAll('.box');

  function handleDragStart(e) {
    e.target.style.opacity = '0.4';
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';
  }

  [].forEach.call(boxes, (box) => {
    box.addEventListener('dragstart', handleDragStart, false);
    box.addEventListener('dragend', handleDragEnd, false);
  })

}
