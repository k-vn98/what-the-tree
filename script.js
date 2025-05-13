let data, output, result;

function init(){
  $.ajaxSetup({async: false});
  let link = `https://data.cityofnewyork.us/resource/uvpi-gqnh.json`
  data = $.getJSON(link).responseJSON;
  let trees = [
    "images/Red_Maple.jpg", "images/japanese_zelkova.jpg", "images/black_cherry.jpg", "images/Honeylocust.jpg", "images/sweetgum.jpg", "images/white_oak.jpg"
  ]
  let gallery1 = new Gallery(trees);
  gallery1.render("output")
  gallery1.play();
}

function GetInfo(){
  let zip = get("zip").value;
  let link = `https://data.cityofnewyork.us/resource/uvpi-gqnh.json`
  data = $.getJSON(link).responseJSON;
  console.log(data);

  output.innerHTML = build;
}