import { getWikiImg } from "../lib/index.js";
// remove first 2 args than join rest with space
const argv = process.argv;
argv.splice(0, 2);
let search_query = argv.join(" ");
const isLogging = search_query.includes("--log");
search_query = search_query.replaceAll("--log", "");
search_query = search_query.trim();
getWikiImg(search_query).then((res)=>isLogging && console.log(res)).catch((err)=>process.stderr.write(err + "\n"));
