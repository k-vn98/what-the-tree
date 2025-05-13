function init(){
  $.ajaxSetup({async: false});
  let link = `https://data.cityofnewyork.us/resource/uvpi-gqnh.json`;
  data = $.getJSON(link).responseJSON;
  console.log(data);
  output = get("output");
  result = get("result");
  get("species").innerHTML = fillDropDown("spc_common");
  get("species1").innerHTML = fillDropDown("spc_common");
  get("borough").innerHTML = fillDropDown("boroname");
  get("borough1").innerHTML = fillDropDown("boroname");
  get("city").innerHTML = fillDropDown("zip_city");
  cards(data);
}

function reload(){
  output.innerHTML = "";
  cards(data);
  console.log("Data reloaded!");
  //Dev only function, use console!
}

function filterBySpecies(){
  let species = get("species1").value;
  let subdata = "";
  subdata = filter( data, "spc_common", species );
  // console.log(subdata);
  output.innerHTML = "";
  cards(subdata);
}

function filterByBorough(){
  let borough = get("borough").value;
  let subdata = "";
  subdata = filter( data, "boroname", borough );
  output.innerHTML = "";
  cards(subdata);
}

function filterByCity(){
  let city = get("city").value;
  let subdata = "";
  subdata = filter( data, "zip_city", city );
  output.innerHTML = "";
  cards(subdata);
}

function filterBySpeciesAndBorough(){
  let species = get("species1").value;
  let boro = get("borough1").value;
  let subdata = filter( data, "spc_common", species );
  let subsubdata = filter(subdata, "boroname", boro)
  output.innerHTML = "";
  cards(subsubdata);
}