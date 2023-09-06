export function range(minimumValue: number, maximumValue: number): number[] {
  return Array.apply(null, new Array(maximumValue + 1 - minimumValue)).map((_, index) => index + minimumValue)
}