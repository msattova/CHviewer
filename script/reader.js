
const formatJSON = function(jsondata){
  console.log(jsondata);

  let html = "";
  for(let d of jsondata){
    html += "<p>" + d + "</p>";
  }
  document.getElementById("jsondata").innerHTML = html;

}

    /*
    let url = new URL(window.location.href);
    let params = url.searchParams;
    let jsonurl = "../charactor_sheet/json/"+params.get("file");
    */
    let jsonurl = "../charactor_sheet/json/nova_CH.json";

    window.addEventListener("load", ()=>{
      fetch(jsonurl)
        .then(response => response.json())
        .then(data => formatJSON(data));
    });
