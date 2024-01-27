// Import the URL module from Node.js.
var url = require("url");

// Example URL string to parse.
const urlString =
  "http://www.urlstring.com:8000/urlstringpath?query=value#fragment";

// Parse the URL string, setting the boolean value to true.

// Using the boolean value true gives query parameters in an object format,
// which allows them to be accessed and manipulated more conveniently.
const parsedUrl = url.parse(urlString, true);

// Displaying the parsed URL object.
console.log(parsedUrl);

// Constructing a URL using the url.format() method.
const constructedUrl = url.format({
  protocol: "",
  host: "www.constructedhost.com",
  port: 8008,
  pathname: "/constructedpath",
  search: "query=value",
  hash: "fragment",
});

// Displaying the constructed URL.
console.log(constructedUrl);
