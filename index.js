var kittens = [ "Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kitten.pop()
}

function destructivelyRemoveFirstKitten() {
  kitten.shift()
}

function AppendKitten(name) {
  kittens = kittens + name;
}

function PrependKitten(name) {
  kittens = name + kittens;
}

function RemoveLastKitten() {
  kitten.slice(-1)
}

function RemoveFirstKitten() {
  kitten.slice(1)
}