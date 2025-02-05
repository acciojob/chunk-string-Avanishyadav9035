function stringChop(str, size) {
  // your code here
  size = parseInt(size, 10); // Ensure size is a number
  if (size <= 0 || isNaN(size)) return []; // Handle invalid chunk size

  let chunks = [];
  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substring(i, i + size)); // Extract chunk of 'size' characters
  }
  return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size)); 
