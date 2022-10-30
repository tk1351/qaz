export const excludeFromString = (aString: string, excludeString: string) =>
  aString.substring(0, aString.indexOf(excludeString))
