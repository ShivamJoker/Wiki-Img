declare module 'wiki-img/cli' {
  export {};

}
declare module 'wiki-img/index' {
  export interface Thumbnail {
      mimetype: string;
      size: null | number;
      width: number;
      height: number;
      duration: null | number;
      url: string;
  }
  export interface Page {
      id: number;
      key: string;
      title: string;
      excerpt: string;
      description: string;
      thumbnail?: Thumbnail;
  }
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

   */
  export const getWikiImg: (query: string, dir?: string) => Promise<Page | Error>;

}
declare module 'wiki-img' {
  import main = require('wiki-img/src/index');
  export = main;
}