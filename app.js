(function() {
  var Cafe = function(loc, min, max, avg) {
    this.loc = loc;
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.arr1 = [];
  }

  Cafe.prototype.generateRandom = function() {
    var pass = 0;
    while (pass < 12) {
      var i = Math.random(i);
      var hourlyDonuts =  Math.round(Math.floor(i * (this.max - this.min) + this.min) * this.avg);
      this.arr1.push(hourlyDonuts);
      pass += 1;
    }
    return this.arr1;
  }

  Cafe.prototype.render = function() {
    var rendering = this.generateRandom();
    var total = 0;
    for (var i = 0; i < rendering.length; i++) {
      total += rendering[i];
    };

    rendering.unshift(this.loc);
    rendering.push(total);
    var str = rendering.join('</td><td>');
    document.getElementById('myTable').innerHTML += '<tr><td>' + str + '</td></tr>';
    return rendering;
  }

  var downtown = new Cafe('Downtown', 8, 43, 4.50);
  var capitolhill = new Cafe('Capitol Hill', 4, 37, 2.00);
  var southlakeunion = new Cafe('South Lake Union', 9, 23, 6.33);
  var wedgewood = new Cafe('Wedgewood', 2, 28, 1.25);
  var ballard = new Cafe('Ballard', 8, 58, 3.75);

  downtown.render();
  capitolhill.render();
  southlakeunion.render();
  wedgewood.render();
  ballard.render();

  document.getElementById("btn").addEventListener("click", showInput); //event listener

  function showInput() {
    var locVal = document.getElementById('loc').value;
    var minVal = document.getElementById('min').value;
    var maxVal = document.getElementById('max').value;
    var avgVal = document.getElementById('avg').value;

    var newCafe = new Cafe(locVal, minVal, maxVal, avgVal);
    newCafe.render();
  }
})();
