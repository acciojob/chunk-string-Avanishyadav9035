function stringChop(str, size) {
  // your code here
   size = parseInt(size, 10); // Convert size to a number

  if (isNaN(size) || size <= 0) return []; // Handle invalid input

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
