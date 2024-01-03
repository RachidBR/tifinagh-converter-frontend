
 const latinToTifinaghMapping = {
  'A': 'ⴰ',
  'B': 'ⴱ',
  'G': 'ⴳ',
  'D': 'ⴷ',
  'DD': 'ⴹ',
  'E': 'ⴻ',
  'F': 'ⴼ',
  'K': 'ⴽ',
  'H': 'ⵀ',
  'HH': 'ⵃ',
  'HN': 'ⵅ',
  'Q': 'ⵇ',
  'I': 'ⵉ',
  'J': 'ⵊ',
  'L': 'ⵍ',
  'M': 'ⵎ',
  'N': 'ⵏ',
  'O': 'ⵓ',
  'R': 'ⵔ',
  'Rr': 'ⵕ',
  'GH': 'ⵖ',
  'S': 'ⵙ',
  'CH': 'ⵛ',
  'T': 'ⵜ',
  'TT': 'ⵟ',
  'V': 'ⵠ',
  'W': 'ⵡ',
  'Y': 'ⵢ',
  'Z': 'ⵣ',
  'ZH': 'ⵥ',
};


module.exports = [
  {
    id: "get-latin-to-tifinagh", // route id
    url: "/conveter/latin-to-tifinagh/:text", // url in express format
    method: "GET", // HTTP method
    variants: [
      {
        id: "id-1", // variant id
        type: "json", // variant handler id
        options: {
          status: 200, // status to send
          body: latinToTifinaghMapping[0], // body to send
        },
      },
      {
        id: "real", // variant id
        type: "middleware", // variant handler id
        options: {
          // Express middleware to execute
          middleware: (req, res) => {
            const text = req.params.text;

            const upperCaseText = text.toUpperCase();

            // Split the text into words
            const words = upperCaseText.split(/\s+/);

            // Convert each word
            const convertedWords = words.map((word, index, array) => {
              // Check if 's' is inside a word and convert it to 'ⵣ'
              if (shouldConvertStoZ(array, index)) {
                return "ⵣ";
              }

              // Convert multi-character sequences
              const convertedSequence = convertMultiCharacterSequences(word);

              // Convert each letter in the word
              const convertedLetters = convertedSequence
                .split("")
                .map((char) => latinToTifinaghMapping[char] || char)
                .join("");

                console.log("latinToTifinagh " + latinToTifinaghMapping)
                console.log("convertedLetters " + convertedLetters)
              return convertedLetters;
            });

            
            console.log("converted words: " + convertedWords)
            // Join the converted words
            const result = convertedWords.join(" ");
            res.send({
              result:result,
            });
          },
        },
      },
      {
        id: "error", // variant id
        type: "json", // variant handler id
        options: {
          status: 400, // status to send
          // body to send
          body: {
            message: "Error",
          },
        },
      },
    ],
  },
];

function shouldConvertStoZ(text, index) {
  // Check if 's' is inside a word and convert it to 'ⵣ' if between two vowels
  const currentChar = text[index];
  const previousChar = text[index - 1];
  const nextChar = text[index + 1];

  return (
    currentChar === "s" &&
    index > 0 &&
    index < text.length - 1 &&
    isVowel(previousChar) &&
    isVowel(nextChar)
  );
}

function convertMultiCharacterSequences(word) {
  // Define multi-character sequences and their corresponding Tifinagh representations
  const sequences = {
    CH: "ⵛ",
    Dd: "ⴹ",
    Hh: "ⵃ",
    Hn: "ⵅ",
    Rr: "ⵕ",
    Gh: "ⵖ",
    Tt: "ⵟ",
    Zh: "ⵥ",

    // Add other sequences as needed
  };

  // Replace multi-character sequences in the word
  Object.entries(sequences).forEach(([sequence, tifinaghRepresentation]) => {
    const regex = new RegExp(sequence, "g");
    word = word.replace(regex, tifinaghRepresentation);
  });

  return word;
}

function isVowel(char) {
  // Define the vowels in your context
  const vowels = ["A", "E", "I", "O", "U"];

  return vowels.includes(char.toUpperCase());
}
