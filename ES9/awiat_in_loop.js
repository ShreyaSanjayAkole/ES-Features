async function processItems(items) {
    for (let item of items) {
      let result = await performAsyncTask(item);
      console.log(result);
    }
  }
  
  async function performAsyncTask(item) {
    return new Promise((resolve) =>
      setTimeout(() => resolve(`Processed: ${item}`), 1000)
    );
  }
  
  processItems([1, 2, 3]);
  