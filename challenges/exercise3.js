export function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let lessThanOne = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < 1) {
      lessThanOne.push(nums[i]);
    }
  }
  return lessThanOne;
}

export function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here
  let namesBeginningWith = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) === char) {
      namesBeginningWith.push(names[i]);
    }
  }
  return namesBeginningWith;
}

export function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let verbs = [];
  for (let i = 0; i < words.length; i++) {
    if (words[i].startsWith("to ")) {
      verbs.push(words[i]);
    }
  }
  return verbs;
}

export function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let integers = [];
  for (let i = 0; i < nums.length; i++) {
    if (Number.isInteger(nums[i])) {
      integers.push(nums[i]);
    }
  }
  return integers;
}

export function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let cities = [];
  for (let i = 0; i < users.length; i++) {
    cities.push(users[i]?.data?.city?.displayName);
  }
  return cities;
}

export function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let squareRoots = [];
  for (let i = 0; i < nums.length; i++) {
    squareRoots.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)));
  }
  return squareRoots;
}

export function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let relevantSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    if (sentences[i].toLowerCase().includes(str.toLowerCase())) {
      relevantSentences.push(sentences[i]);
    }
  }
  return relevantSentences;
}

export function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
