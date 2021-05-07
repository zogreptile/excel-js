import { $ } from 'core/dom';

export function resizeHandler($root, event) {
  const $activeResizer = $(event.target);
  const resizerType = $activeResizer.data.resizer;

  const activeResizerStyles = resizerType === 'col' ?
    { height: '100vh' } :
    { width: '100vw' };

  $activeResizer
    .addClass('grid__cell-resizer_active')
    .css(activeResizerStyles);

  const $activeCell = resizerType === 'col' ?
    $activeResizer.closest('[data-col-number]') :
    $activeResizer.closest('[data-cell-type="row"]');

  const activeCellInitialCoords = $activeCell.getCoords();
  const deltas = {};

  document.onmousemove = (event) => {
    deltas.x = event.pageX - activeCellInitialCoords.right;
    deltas.y = event.pageY - activeCellInitialCoords.bottom;

    const resizerOffset = 6;

    $activeResizer.css({
      transform: resizerType === 'row' ?
        `translateY(${deltas.y + resizerOffset}px)` :
        `translateX(${deltas.x + resizerOffset}px)`,
    });
  };

  document.onmouseup = (event) => {
    document.onmousemove = null;
    document.onmouseup = null;

    if (resizerType === 'row') {
      $activeCell.css({
        height: `${activeCellInitialCoords.height + deltas.y}px`,
      });
    }

    if (resizerType === 'col') {
      $activeCell.css({
        width: `${activeCellInitialCoords.width + deltas.x}px`,
      });

      const colNumber = $activeResizer.closest('[data-col-number]').data.colNumber;
      const $colsToResize = $root.findAll(`[data-col-number="${colNumber}"]`);

      $colsToResize.forEach(($col) => $col.css({
        width: `${activeCellInitialCoords.width + deltas.x}px`,
      }));
    }

    $activeResizer
      .removeClass('grid__cell-resizer_active')
      .css({});
  };
}
