var allVersionsSelected = [];
function addAllVersions(anotherVersion)
{
    allVersionsSelected.push(anotherVersion);
    console.log(allVersionsSelected.length);
}
addAllVersions("nightly/22");
addAllVersions("nightly/24");
addAllVersions("nightly/23");
var myMap = new Map();
var points = new Map();
Telemetry.init(function() {
    allVersionsSelected.map(function(version){  
    Telemetry.loadEvolutionOverBuilds(version , 'CYCLE_COLLECTOR',
                                  function(histogramEvolution) {
  // Get submissions from a histogram aggregated over all dates
  // in the HistogramEvolution instance
  //var filtered = histogramEvolution.range();
  myMap.set(version, histogramEvolution);  
  //----
  
  var it = Iterator(myMap);   
  for (var pair in it) 
  {
      points.set(pair.version, pair.histogramEvolution.map(function(date, histogram, index) {
          return {
            x:  date.getTime(), // Use get unix timestamp
            y:  histogram.submissions()
          };
      }););
  }        
                                      -------//
  console.log(version, "----histogram evol-----", Object.keys(histogramEvolution));
});
});
});

function print(line) { $('#output').append(line + '\n'); };