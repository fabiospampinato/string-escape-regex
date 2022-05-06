
/* IMPORT */

import {describe} from 'fava';
import escape from '../dist/index.js';

/* MAIN */

describe ( 'String Escape Regex', it => {

  it ( 'works', t => {

    const input = 'asd\\^$.*+?()[]{}|';
    const output = 'asd\\\\\\^\\$\\.\\*\\+\\?\\(\\)\\[\\]\\{\\}\\|';

    console.log ( escape(input) );
    console.log ( output );
    t.is ( escape ( input ), output );

  });

});
