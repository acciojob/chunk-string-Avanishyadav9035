function stringChop(str, size) {
  // your code here
	let words = str.split(" ");
    let chunks = [];
    let currentChunk = [];

    for (let word of words) {
        if (currentChunk.join(" ").length + word.length + 1 <= size) {
            currentChunk.push(word);
        } else {
            chunks.push(currentChunk.join(" "));
            currentChunk = [word];
        }
    }
    if (currentChunk.length) chunks.push(currentChunk.join(" "));

    return chunks;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
