/*global c3: true */

(function () {
  'use strict';

  var chart = c3.generate({
    bindto: '#chart',
    data: {
      url: '/data.csv',
      x: 'name',
      names: {
        sugar: 'Obsah cukru v lahvi (g)',
        volume: 'Obsah lahve (ml)'
      },
      types: {
        name: 'string',
        sugar: 'bar',
        volume: null
      }
    },
    axis: {
      rotated: true,
      x: {
        type: 'categorized',
        tick: {
          culling: {max: 0 }
        }
      },
      y: {
        max: 100,
        min: 0,
        // Range includes padding, set 0 if no padding needed
        // padding: {top:0, bottom:0}
      }
    },
    padding: {
      left: 100,
    },
    size: {
      height: 600,
    },
  });

})();
