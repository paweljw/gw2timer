export default function (word, number) {
  if (!number) return null

  if (number > 1) {
    return `${number} ${word}s`
  } else {
    return `${number} ${word}`
  }
}
