console.log('in main.js');

window.onload = function() {

  const boxes = document.querySelectorAll('.box');

  let dragSrcEl = null;

  function handleDragStart(e) {
    e.target.style.opacity = '0.4';

    dragSrcEl = e.target;

    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
  }

  function handleDrop(e) {
    e.preventDefault && e.preventDefault();

    if (dragSrcEl === e.target) return;

    dragSrcEl.innerHTML = e.target.innerHTML;
    e.target.innerHTML = e.dataTransfer.getData('text/html');
  }

  function handleDragEnd(e) {
    e.target.style.opacity = '1';

    boxes.forEach(box => {
      box.classList.remove('over');
    });
  }

  function handleDragEnter(e) {
    e.target.classList.add('over');
  }

  function handleDragLeave(e) {
    e.target.classList.remove('over');
  }

  function handleDragOver(e) {
    e.preventDefault && e.preventDefault();

    e.dataTransfer.dropEffect = 'move';
  }


  boxes.forEach(box => {
    box.addEventListener('dragstart', handleDragStart, false);
    box.addEventListener('dragend', handleDragEnd, false);
    box.addEventListener('dragenter', handleDragEnter, false);
    box.addEventListener('dragleave', handleDragLeave, false);
    box.addEventListener('dragover', handleDragOver, false);
    box.addEventListener('drop', handleDrop, false);
  });

}
