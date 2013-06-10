var parser = require('../range-selection-parser')
  , _ = require('underscore');

describe('Method parseSelectionString', function () {
  describe('should parse selection string', function () {
    it('and if called with only one argument, return array of numbers', function() {
      var tests = [
        { result: [4, 5, 6],
          strings: [
            '4     -   6',
            'foo4-6',
            '4 -6-'
          ]
        },
        { result: [],
          strings: [
            'foo',
            'bar'
          ]
        },
        { result: [0, 1, 2, 3, 4, 5],
          strings: [
            '0- 5',
            '0-5'
          ]
        },
        { result: [1, 2, 3, 7, 8],
          strings: [
            '1-3 7-8',
            '1 - 3, 7 - 8',
            '  1 - 3.  7-8',
            '1 - 3, 7 - 8'
          ]
        },
        { result: [0, 5, 6, 7, 9],
          strings: [
            '0, 5-7, 9',
            'foo0 5   -7x9']
        }
      ];

      _.each(tests, function(test) {
        _.each(test.strings, function(str) {
          expect(parser.parseSelectionString(str)).toEqual(test.result);
        });
      });

    });
    it('and if called with an array as second arguments, return array of selected items', function () {
      var sampleArray = ['foo', 'bar', 'baz', 'bay', 'bax', 'baq']
        , tests = [
            { result: ['foo', 'bay', 'bax', 'baq'],
              strings: [
                '1,4-',
                '  1  4 -',
                ' 1,foo4-']
            },
            { result: ['bay', 'bax', 'baq'],
              strings: [
                '4     -   6',
                'foo4-6',
                '4 -6-'
              ]
            },
            { result: [],
              strings: [
                'foo',
                'bar'
              ]
            },
            { result: ['foo', 'bar', 'baz', 'bay', 'bax'],
              strings: [
                '0- 5',
                '0-5'
              ]
            },
            { result: ['foo', 'baz', 'bay', 'bax'],
              strings: [
                '1, 3-5',
                '1 ,  3  -5',
                'foo1,3-5'
              ]
            }
          ];

      _.each(tests, function(test) {
        _.each(test.strings, function(str) {
          expect(parser.selectFromArray(sampleArray, str)).toEqual(test.result);
        });
      });
    });

  });
});
