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

function AppendKitten(name) {
  kittens = kittens + name;
}

function PrependKitten(name) {
  kittens = name + kittens;
}

function RemoveLastKitten() {
  kittens.slice(-1)
}

function RemoveFirstKitten() {
  kittens.slice(1)
}