const createTile = id => {
  const tile = document.createElement("div");
  tile.classList.add("tile");
  return tile;
}

const createTiles = quantity => {
  Array.from(Array(quantity)).map((tile, index) => {
    const wrapper = document.getElementById("tiles");
    wrapper.appendChild(createTile());
  });
}

const createGrid = _ => {
  const wrapper = document.getElementById("tiles");
  wrapper.innerHTML = "";

  const columns = Math.floor(document.body.clientWidth / 50);
  const rows = Math.floor(document.body.clientHeight / 50);

  wrapper.style.setProperty("--columns", columns);
  wrapper.style.setProperty("--rows", rows);

  createTiles(columns * rows);
}

window.onresize = _ => createGrid();
createGrid();
