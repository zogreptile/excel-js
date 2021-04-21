import { cn } from 'core/cn';

const CHAR_CODES = {
  A: 65,
  Z: 90,
};

function createTemplate(props = {}, content = '', tagName = 'div') {
  const { classname = '' } = props;
  delete props.classname;

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
    classname: cn('grid__row'),
  },
  content,
  );
}

export function createGrid(rowsCount = 10) {
  const colsCount = CHAR_CODES.Z - CHAR_CODES.A + 1;

  const firstEmptyCellInRow = createTemplate({
    classname: cn('grid__cell', { mods: { type: 'heading' } }),
  });

  const headingCols = [firstEmptyCellInRow]
    .concat(
      Array(colsCount)
        .fill('')
        .map((el, ind) => createTemplate({
          classname: cn('grid__cell', { mods: { type: 'heading' } }),
        },
        String.fromCharCode(CHAR_CODES.A + ind),
        )),
    )
    .join('');

  const contentCols = Array(colsCount)
    .fill('')
    .map((el, ind) => createTemplate({
      classname: cn('grid__cell'),
      contenteditable: true,
    }));

  return [createRow(headingCols)]
    .concat(
      Array(rowsCount)
        .fill('')
        .map((el, ind) => {
          const headingCell = createTemplate({
            classname: cn('grid__cell', { mods: { type: 'heading' } }),
          },
          ind + 1,
          );

          return createRow([headingCell].concat(contentCols).join(''));
        })
    )
    .join('');
}
