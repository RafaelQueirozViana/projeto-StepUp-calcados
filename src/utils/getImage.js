export default function getImage(nome) {
  return new URL(`../assets/images/${nome}`, import.meta.url).href
}
