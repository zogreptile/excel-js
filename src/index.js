import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { Excel } from 'src/components/excel/Excel';

import { Menu } from 'src/components/menu/Menu';
import { Toolbar } from 'src/components/toolbar/Toolbar';
import { Formula } from 'src/components/formula/Formula';
import { Grid } from 'src/components/grid/Grid';

import './styles/index.scss';

const excel = new Excel('#root', {
  components: [Menu, Toolbar, Formula, Grid],
});

excel.render();
