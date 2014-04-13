/*global d3: true, dimple: true */

(function () {
  'use strict';

  var svg = dimple.newSvg('#chartContainer', 800, 400);

  d3.csv('/data.csv', function (data) {
    var popup = null;
    var dataset = data.map(function (d) {
      return {
        name: d.name,
        sugar: parseFloat(d.sugar),
        volume: +d.volume
      };
    });
    var myChart = new dimple.chart(svg, dataset);
    myChart.setMargins(170, 30, 30, 100);
    var x = myChart.addMeasureAxis('x', 'sugar');
    x.overrideMax = 100;
    var y = myChart.addCategoryAxis('y', 'name');
    // y.addOrderRule('sugar', false);
    y.addOrderRule(function (a, b) { // one cannot simply sort floats...
      return a.sugar[0] - b.sugar[0];
    });

    var x2 = myChart.addMeasureAxis('z', 'volume');
    x2.hidden = true;

    var series = myChart.addSeries(null, dimple.plot.bar);
    myChart.draw();
    x.tickFormat = '.2f';
    x.titleShape.text('Cukr (g)');
    y.titleShape.remove();

  });

})();
