export function getList(list, state) {
  return fetch(`http://localhost:3000/${list}/${state}`)
    .then(data => data.json())
}