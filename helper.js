function get(id){
  return document.getElementById(id);
}

function fillDropDown(key){
  let list = [];
  let build = ""
  for(let i = 0; i < data.length; i++){
    let data_field = data[i];
    if(!list.includes(data_field[key])){
      list.push(data_field[key]);
    }
  }
  list.sort();
  for(let field of list){
      build += `<option>${field}</option>`;
  }
  return build;
}

function card(tree){
  let build = "";
  build += `<div class="fitted card">`;
  build += `     <h3>${tree.spc_common}</h3>`;
  build += `     <p>Status: ${tree.status}</p>`;
  build += `     <p>Health: ${tree.health}</p>`;
  build += `     <p>Address: ${tree.address}</p>`;
  build += `     <p>Zip: ${tree.zipcode}</p>`;
  build += `     <p>City: ${tree.zip_city}</p>`;
  build += `     <p>Borough: ${tree.boroname}</p>`;
  build += `</div>`;
  return build;
}

function cards(trees){
  let front = "";
  let back = "";
  let N = 0;
  for(let i = 0; i < trees.length; i++){
    let tree = trees[i];
    front = card(tree);
    back = showLocation(tree.latitude,tree.longitude)
    let flipcard = new FlipCard(front, back)
    flipcard.render("output")
    N++;
  }
  get("result").innerHTML = `${N} results found`
}

function filter ( treelist, key, value ){
  let list = [];
  
  for (let i = 0; i < treelist.length; i++){
    let ctree = treelist[i];
    if (ctree[key] == value ){
      list.push( ctree )
    }
  }
  return list;
}

function showLocation(lat, lon){
  //mapKey = "YOUR_MAPQUEST_API_KEY";
  //let map = `https://www.mapquestapi.com/staticmap/v5/map?center=${lat},${lon}&zoom=12&size=@2x&key=${mapKey}`;
  //return`<img class="map" src="${map}">`;
  return ;
}

function displayChart( data, id, type ){
  let chart = c3.generate({
    bindto: '#' + id,
    data: {
      columns: data,
      type:type
    }
  });
}