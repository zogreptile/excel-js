import { cn } from 'core/cn';

const CHAR_CODES = {
  A: 65,
  Z: 90,
};

function createTemplate(props = {}) {
  const {
    classname = '',
    content = '',
    tagName = 'div',
  } = props;

  delete props.classname;
  delete props.content;

  const attributes = Object
    .keys(props)
    .map((key) => `${key}=${props[key]}`).join(' ');

  return `
    <${tagName} class="${classname}" ${attributes}>
      ${content}
    </${tagName}>
  `;
}

function createRow(content = '') {
  return createTemplate({
    'classname': cn('grid__row'),
    'content': content,
    'data-cell-type': 'row',
  });
}

/**
 *
 * @param {('col'|'row')} type
 * @return {String}
 */
function createCellResizer(type) {
  return createTemplate({
    'classname': cn('grid__cell-resizer', { mods: { [type]: true } }),
    'data-resizer': type,
  });
}

const headingCellMods = { mods: { type: 'heading' } };

export function createGrid(rowsCount = 10) {
  const colsCount = CHAR_CODES.Z - CHAR_CODES.A + 1;

  const firstEmptyCellInRow = createTemplate({
    classname: cn('grid__cell', headingCellMods),
  });

  const headingCols = [firstEmptyCellInRow]
    .concat(
      Array(colsCount)
        .fill('')
        .map((el, ind) => createTemplate({
          'classname': cn('grid__cell', headingCellMods),
          'data-col-number': ind + 1,
          'content': `
            ${String.fromCharCode(CHAR_CODES.A + ind)}
            ${createCellResizer('col')}
          `,
        })),
    )
    .join('');

  const contentCols = Array(colsCount)
    .fill('')
    .map((el, ind) => createTemplate({
      'classname': cn('grid__cell'),
      'data-col-number': ind + 1,
      'contenteditable': true,
    }));

  return [createRow(headingCols)]
    .concat(
      Array(rowsCount)
        .fill('')
        .map((el, ind) => {
          const headingCell = createTemplate({
            classname: cn('grid__cell', headingCellMods),
            content: `
              ${ind + 1}
              ${createCellResizer('row')}
            `,
          });

          return createRow([headingCell].concat(contentCols).join(''));
        })
    )
    .join('');
}
