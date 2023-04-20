//. Create two variables and assign a person’s name to each. Console log a statement that says which name is shorter or longer, and by how many characters.                                                  

// define two variables
const name1 = "Johnathan";
const name2 = "Nate";

// Compare the length of the two names
const difference = Math.abs(name1.length - name2.length);

// Output the result to the console
if (name1.length > name2.length) {
  console.log(`${name1} is longer than ${name2} by ${difference} character(s).`);
} else if (name1.length < name2.length) {
  console.log(`${name2} is longer than ${name1} by ${difference} character(s).`);
} else {
  console.log(`${name1} and ${name2} have the same length.`);
}