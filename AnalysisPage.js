let data;
function init(){
  $.ajaxSetup({async: false});
  let link = `https://data.cityofnewyork.us/resource/uvpi-gqnh.json`
  data = $.getJSON(link).responseJSON;
  console.log(data);
}

function ByBorough(){
  let q = 0, m = 0, br  = 0, bx = 0, s = 0;
  for(let i = 0; i < data.length; i++){
  let tree = data[i];
  if(tree.boroname == "Queens"){
      q++;
    }else if(tree.boroname == "Manhattan"){
      m++;
    }else if(tree.boroname == "Brooklyn"){
      br++;
    }else if(tree.boroname == "Bronx"){
      bx++;
    }else if(tree.boroname == "Staten Island"){
      s++;
    }
  }
  
  let chartData = [
    ["Queens",q],
    ["Manhattan",m],
    ["Brooklyn", br],
    ["Bronx", bx],
    ["Staten Island", s]
  ]
  let chartType = get("chartType").value;
  displayChart(chartData,"chart",chartType);
  para.innerHTML = "The data in this chart is organized based on what Borough of New York State each tree is in.";
}

function ByStatus(){
  let a = 0, st = 0, d = 0, bx = 0, s = 0;
  for(let i = 0; i < data.length; i++){
  let tree = data[i];
  if(tree.status == "Alive"){
      a++;
    }else if(tree.status == "Stump"){
      st++;
    }else if(tree.status == "Dead"){
      d++;
    }
  }
    
  let chartData = [
    ["Alive",a],
    ["Stump",st],
    ["Dead", d],
  ]
    
  let chartT = get("chartT").value;
  displayChart(chartData,"chart",chartT);
  para.innerHTML = "The data in this chart is organized based on the trees status (whether they are alive, dead, or a stump).";
}