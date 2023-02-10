
const JSON = (jsondata) => {
  console.log(jsondata);

  let html = "";
  for(let d of jsondata){
    html += "<p>" + d + "</p>";
  }
  document.getElementById("jsondata").innerHTML = html;

}
