export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter((num) => num < 1);
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  return names.filter((name) => name.charAt(0) === char);
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  return words.filter((word) => word.startsWith("to "));
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  return nums.filter((num) => Number.isInteger(num));
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = [];
  users.forEach((user) => {
    cities.push(user?.data?.city?.displayName);
  });
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let squareRoots = [];
  nums.forEach((num) => {
    squareRoots.push(parseFloat(Math.sqrt(num).toFixed(2)));
  });
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let relevantSentences = [];
  sentences.forEach((sentence) => {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      relevantSentences.push(sentence);
    }
  });
  return relevantSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let longestSides = [];
  triangles.forEach((triangle) => {
    longestSides.push(Math.max(...triangle));
  });
  return longestSides;
}
