range-selection-parser
======================

Node.js module to parse range selection strings, for example '2, 5, 7-9'.

Installation:

```
npm install range-selection-parser
```

Usage:

```
var parser = require('range-selection-parser');

parser.parseSelectionString('3, 6-9');
  // => [3, 6, 7, 8, 9]

parser.selectFromArray(['a', 'b', 'c', 'd', 'e'], '1-3, 5');
  // => ['a', 'b', 'c', 'e']

parser.selectFromArray(['aa', 'bb', 'cc', 'dd'], '2-');
  // => ['bb', 'cc', 'dd']
```

Parser is very forgiving:

```
parser.parseSelectionString(' 0 ,  5- 9 13');
  // => [0, 5, 6, 7, 8, 9, 13]
```

Tests (jasmine-node must be installed):

```
jasmine-node test
```


