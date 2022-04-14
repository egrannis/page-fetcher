const request = require('request');
const fs = require('fs');
const args = process.argv.slice(2);
const URL = args[0];
const localPath = args[1];


request(URL, (error, response, body) => {
  if (error) {
    console.log('Failed to read URL');
    return;
  }
  fs.writeFile(localPath, body, (err) => { // writeFile(local path, body that you're getting from thr request)
    if (err) {
      console.error(err, 'Failed to write');
      return;
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);// bytes can be char count of content');
  }
  );
});

// we need to take in an input from the command line (process.argv)
// we need to make an http request using the URL from the command line and wait for the response
// we want to access the url, download the content from it (text?)
// once we get a response, we need to take the data we get, and write it into the local file system
//use node fs system to write the file
// take the URL and append it with local file system ending (I think)
// Once this is complete, we want it to print to the console
// we need to calculate how many bytes are in the file (by counting how many characters are in the output from the URL)
// GENERAL NOTES
//When you're trying to control the order of asynchronous operations, you can use nested callbacks.


