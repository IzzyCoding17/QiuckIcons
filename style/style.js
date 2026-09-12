const glyphs = [
  "★",
  "●",
  "▲",
  "◆",
  "♥",
  "☁",
  "☀",
  "☂",
  "✉",
  "⚙",
  "♫",
  "☎",
  "⌂",
  "♞",
  "✂",
  "☺",
  "☯",
  "⚑",
  "⚡",
  "♻",
  "✎",
  "☕",
  "❄",
  "♟",
];
const grid = document.getElementById("iconGrid");
for (let i = 0; i < 24; i++) {
  const tile = document.createElement("div");
  tile.className = "icon-tile" + (i % 6 === 0 ? " accent" : "");
  tile.textContent = glyphs[i % glyphs.length];
  grid.appendChild(tile);
}
