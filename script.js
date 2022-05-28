const CHAMPION_DATA_BASE_URL =
  "https://ddragon.leagueoflegends.com/cdn/12.10.1/data/en_US/champion/id.json";

function httpGet(url) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", url, false);
  xmlHttp.send();
  return xmlHttp.responseText;
}

function getChampionData(id) {
  var url = CHAMPION_DATA_BASE_URL.replace("id", id);
  var res = httpGet(url);
  var championData = JSON.parse(res).data[id];
  return championData;
}

function handleSearch() {
  var id = document.getElementById("champion-search").value;
  var championData = getChampionData(id);
  document.getElementById("champion-name").innerHTML = championData.id;

  drawSpells(championData);
}

function drawSpells(championData) {
  var spellList = document.getElementById("spell-list");

  championData.spells.forEach((spell) => {
    var li = document.createElement("li");
    li.setAttribute("id", spell.id);
    li.appendChild(document.createTextNode(spell.name));
    spellList.appendChild(li);
  });
}

window.onload = () => {};
