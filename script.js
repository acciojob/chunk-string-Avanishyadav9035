function stringChop(str, size) {
  // your code here
 // Convert size to a number
  size = Number(size);

  // Handle invalid input cases
  if (!str || typeof str !== "string") return [];
  if (isNaN(size) || size <= 0) return [];

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
