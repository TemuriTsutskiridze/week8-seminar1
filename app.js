// 1. დაწერეთ ფუნქცია, რომელიც პარამეტრად მიიღებს callback ფუნქციებს და გამოიძახებს მათ იმის მიხედვით, თუ რამდენად სწორად შესრულდება რაიმე პირობა.

// ** დაწერეთ იგივე ფუნქციონალი promise-ების გამოყენებით

// Callback version
// function equalsCheck(successCallback, errorCallback) {
//   if (1 + 1 === 3) {
//     successCallback("Equals");
//   } else {
//     errorCallback("Doesn't equal");
//   }
// }

// equalsCheck(
//   (message) => {
//     console.log("Success:", message);
//   },
//   (error) => {
//     console.log("Failed:", error);
//   }
// );

// Promise version

// function equals() {
//   return new Promise((resolve, reject) => {
//     if (1 + 1 === 3) {
//       resolve("Equals");
//     } else {
//       reject("Doesn't equal");
//     }
//   });
// }

// equals()
//   .then((message) => {
//     console.log("Success:", message);
//   })
//   .catch((error) => {
//     console.log("Failed:", error);
//   });

// 2. Create two promises. The first one resolves with a number, and the second one multiplies the resolved number by 2.

// Promise Chaining

// function promiseOne() {
//   return new Promise((resolve, reject) => {
//     resolve(6);
//     // reject("Failed");
//   });
// }

// function promiseTwo(number) {
//   return new Promise((resolve, reject) => {
//     resolve(number * 2);
//   });
// }

// promiseOne()
//   .then((result) => promiseTwo(result))
//   .then((finalResult) => {
//     console.log(finalResult);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3. Write a function that runs after 2 seconds when executed, counts from 1 to 10 and then fetches the github user data.

async function getGithubUser(user) {
  const response = await fetch(`https://api.github.com/users/${user}`);
  const data = await response.json();
  console.log(data);
}

function mainFunction() {
  let counter = 0;

  let interval = setInterval(() => {
    counter++;
    console.log(counter);

    if (counter >= 10) {
      clearInterval(interval);
      getGithubUser("marikuna246");
    }
  }, 100);
}

setTimeout(mainFunction, 10);
