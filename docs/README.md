# Wiki-img

Easily download wikipedia images in NodeJS

![image](https://user-images.githubusercontent.com/23727670/188309888-5d9c4da1-5a2c-496e-b34e-a805b2c8b347.png)

## Installation

```sh
pnpm install wiki-img
```

```sh
yarn add wiki-img
```

```sh
npm install wiki-img
```

### Install globally

```sh
pnpm install -g wiki-img
```

## CLI Usage

```sh
npx wiki-img zuckerberg --log
```

### Outputs

```json
{
  "id": 2844938,
  "key": "Mark_Zuckerberg",
  "title": "Mark Zuckerberg",
  "excerpt": "Zuckerberg",
  "matched_title": "Zuckerberg",
  "description": "American internet entrepreneur and founder of Facebook",
  "thumbnail": {
    "mimetype": "image/jpeg",
    "size": null,
    "width": 161,
    "height": 200,
    "duration": null,
    "url": "//upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/161px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg"
  }
}
```

Without `--log` you won't see any output in the terminal, the image will be
saved to your current directory
