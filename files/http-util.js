// Native node http/https modules wrapped with promises 
// Customized for this specific applcitaction
let https = require('https');
// Adjustable parameters
// request timeout in seconds
const REQ_TIMEOUT = 5;

module.exports = class HttpUtil {
  httpsGetText(url, path, req_timeout=REQ_TIMEOUT) {
    // create new promise
    return new Promise((resolve, reject) => {
      // custom request timeout
      setTimeout(() => {
        reject(new Error(`${new Date()} - ${req_timeout}s timeout exceeded`));  
      }, req_timeout*1000);

      // debugging url 
      console.log(`https://www.${url}/${path}`);
      https.get(`https://www.${url}/${path}`, (res) => {
        // response status check
        if (res.statusCode == 404 ) { // handle 404
          resolve("404 not found!");
        } else if (res.statusCode.toString(10).match(/30\d/g)) {  // handle 30x
          // debugging redirect url 
           console.log(res.headers['location'].match(/define.*/g)[0]);
          let new_path = res.headers['location'].match(/define.*/g)[0];
          let httpUtil = new HttpUtil();

          resolve(httpUtil.httpsGetText(url, new_path));
        } else if (res.statusCode < 200 || res.statusCode > 299) {  // handle anything else rather than 2xx
          reject(new Error(`${new Date()} - rejection in httpsGetText with status ${res.statusCode}`));
        }
        // var to store res body
        let res_body = "";
        // get body (by chunks)
        res.on('data', (data) => {
          res_body += data;
        });
        // resolve promise(return body as text)
        res.on('end', () => {
          resolve(res_body);
        });
      }).on('error', () => {reject(new Error(`${new Date()} - request rejection in httpsGetText`))});
    });
  }
}