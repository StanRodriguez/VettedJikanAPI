const $searchForm = document.getElementById("searchForm");
$searchForm.addEventListener("submit", getData);
async function getData(e) {
  e.preventDefault();
  console.log(e.target.search.value);
  const search = encodeURI(e.target.search.value);
  const type = e.target.type.value;

  //   const response = await fetch("https://api.jikan.moe/v3/anime/1/pictures");
  const response = await fetch(
    `https://api.jikan.moe/v3/search/${type}?q=${search}&page=1`
  );
  const data = await response.json();
  renderData(data);
}

function renderData(data) {
  console.log(data);
  const $results = document.getElementById("results");
  $results.innerHTML = "";
  for (const el of data.results) {
    const $img = document.createElement("img");
    const $h3 = document.createElement("h3");
    $h3.innerText = el.name;
    const $a = document.createElement("a");

    $img.src = el.image_url;
    $results.appendChild($h3);
    $results.appendChild($img);
    console.log(el);
  }
}
