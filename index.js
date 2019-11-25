var kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  return [...kittens, name]
}

function prependKitten(name) {
  kittens = [name, ...kittens]
}

function removeLastKitten() {
  kittens.slice(-1)
}

function removeFirstKitten() {
  kittens.slice(1)
}