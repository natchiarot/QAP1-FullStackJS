var url = require("url");

const urlString =
  "http://www.urlstring.com:8000/urlstringpath?query=value#fragment";

// Using the boolean value true gives query parameters in an object format,
// which allows them to be accessed and manipulated more conveniently.
const parsedUrl = url.parse(urlString, true);

console.log(parsedUrl);

const constructedUrl = url.format({
  protocol: "",
  host: "www.constructedhost.com",
  port: 8008,
  pathname: "/constructedpath",
  search: "query=value",
  hash: "fragment",
});

console.log(constructedUrl);
