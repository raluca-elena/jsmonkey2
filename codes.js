var allVersionsSelected = [];
function addAllVersions(anotherVersion)
{
    allVersionsSelected.push(anotherVersion);
    console.log(allVersionsSelected.length);
}
addAllVersions("nightly/22");
//addAllVersions("nightly/24");
//addAllVersions("nightly/23");
var myMap = new Map();
var points = new Map();
Telemetry.init(function() {
    allVersionsSelected.map(function(version){  
    Telemetry.loadEvolutionOverBuilds(version , 'CYCLE_COLLECTOR',
                                  function(histogramEvolution) {
  // Get submissions from a histogram aggregated over all dates
  // in the HistogramEvolution instance
  //var filtered = histogramEvolution.range();
  var data = histogramEvolution.map(function(date, histogram, index) {
      
          var a = [];
          a[0] = date.getTime();
          a[1] = histogram.submissions();
          return a;
  
});      
  function print(line) { $('#output').append(line + '\n'); };
  g = new Dygraph(document.getElementById("graph"),data, { labels: [ "x", "y" ] });
  
});
});
});

function print(line) { $('#output').append(line + '\n'); };
//g = new Dygraph(document.getElementById("graph"), [ [1,10], [2,20], //[3,50], [4,70] ], { labels: [ "x", "y" ] });
//g = new Dygraph(document.getElementById("graph"),data, { labels: [ "x", //"y" ] });
