export function combine(str) {
  const result = [];
  const lengthMap = new Map(); // Map to store combinations by their lengths

  // Include the combination with the entire string
  result.push(str);

  for (let i = 1; i <= Math.pow(2, str.length) - 1; i++) {
      const combination = [...str].filter((_, pos) => (i >> pos) & 1).join("");
      const length = combination.length;

      // Add the combination to the corresponding length group in the map
      if (!lengthMap.has(length)) {
          lengthMap.set(length, []);
      }
      lengthMap.get(length).push(combination);
  }

  // Arrange combinations by length
  lengthMap.forEach(combinations => {
      result.push(combinations);
  });

  return result.slice(1);
}


