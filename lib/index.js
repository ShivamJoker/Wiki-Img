import { get } from "node:https";
import { createWriteStream } from "node:fs";
import path from "node:path";
// //u.wiki.org/wiki/commons/thumb/2/23/elon.jpg/121px-elon.jpg
const parseRawImg = (src)=>{
    const splitted = src.split("/");
    splitted.pop();
    // we dont need the last 121px-elon
    splitted.splice(5, 1);
    // get rid of thumb
    return `https:${splitted.join("/")}`;
};
// put everything back
const saveImg = (page, dir)=>{
    const rawThumbUrl = parseRawImg(page.thumbnail.url);
    // eg image/jpeg
    const fileExt = page.thumbnail.mimetype.split("/")[1];
    return new Promise((resolve, reject)=>{
        const addr = new URL(rawThumbUrl);
        const imgreq = get({
            host: addr.host,
            method: "GET",
            port: 443,
            path: addr.pathname,
            headers: {
                Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "User-Agent": "Mozilla/5.0 "
            }
        }, (res)=>{
            if (res.statusCode == 200) {
                const imgPath = path.resolve(dir, `${page.key}.${fileExt}`);
                const fstream = createWriteStream(imgPath, {
                    encoding: "binary"
                });
                // res.pipe(process.stdout);
                res.pipe(fstream);
                fstream.on("error", reject);
                fstream.on("finish", ()=>{
                    resolve(true);
                });
                return;
            }
            reject(`Failed to get img with status ${res.statusMessage}`);
        });
        imgreq.end();
    });
};
/**
 * Query and download image from wikipedia
 * @param {string} query - Search term for wikipedia
 * @param {string} dir  - Relative path of image to be saved
 * @returns {Promise} Promise with info about the search
 * @example
  // get lady gaga image in celebs directory
  getWikiImg("Lady gaga", "./celebs")
    .then((res) => console.log(res))
    .catch((err) => console.log("failed to get img", err));

 */ export const getWikiImg = (query, dir = "./")=>{
    return new Promise((resolve, reject)=>{
        const path = "https://api.wikimedia.org/core/v1/wikipedia/en/search";
        const imgreq = get(`${path}/title?q=${query}&limit=1`);
        imgreq.on("response", (res)=>{
            let body = "";
            res.on("data", (d)=>{
                body += d;
            });
            res.on("end", async ()=>{
                const json = JSON.parse(body);
                const page = json.pages[0];
                const thumb = page?.thumbnail?.url;
                if (!thumb) {
                    return reject("No thumbnail found");
                }
                try {
                    await saveImg(page, dir);
                    resolve(page);
                } catch (err) {
                    reject(err);
                }
            });
        });
    });
};
