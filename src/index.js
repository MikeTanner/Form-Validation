import "./styles/main.css";

const cache = {};
function importAll(r) {
  // eslint-disable-next-line no-return-assign
  r.keys().forEach((key) => (cache[key] = r(key)));
}
const images = importAll(
  require.context("./assets", false, /\.(gif|png|jpe?g|svg)$/)
);
console.log("test");
console.log("greg");
console.log(images);
