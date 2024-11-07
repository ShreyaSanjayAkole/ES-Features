let isSuccess = true;

new Promise((resolve, reject) => {
  if (isSuccess) {
    resolve("Success!");
  } else {
    reject("Failed!");
  }
})
  .then((result) => {
    console.log(`Result: ${result}`);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  })
  .finally(() => {
    console.log("Cleanup: Promise settled (resolved or rejected).");
  });
