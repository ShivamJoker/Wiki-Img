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

# How to use?

## Interfaces

- [Page](#generatedinterfacespagemd)
- [Thumbnail](#generatedinterfacesthumbnailmd)

## Functions

### getWikiImg

▸ **getWikiImg**(`query`, `dir?`): `Promise`<`Error` \| [`Page`](#generatedinterfacespagemd)\>

Query and download image from wikipedia

**`Example`**

```ts
// get lady gaga image in celebs directory
 getWikiImg("Lady gaga", "./celebs")
   .then((res) => console.log(res))
   .catch((err) => console.log("failed to get img", err));
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `query` | `string` | `undefined` | Search term for wikipedia |
| `dir` | `string` | `"./"` | Relative path of image to be saved |

#### Returns

`Promise`<`Error` \| [`Page`](#generatedinterfacespagemd)\>

Promise with info about the search

#### Defined in

[index.ts:87](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L87)

# Interface: Page

## Properties

### description

• **description**: `string`

#### Defined in

[index.ts:19](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L19)

___

### excerpt

• **excerpt**: `string`

#### Defined in

[index.ts:18](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L18)

___

### id

• **id**: `number`

#### Defined in

[index.ts:15](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L15)

___

### key

• **key**: `string`

#### Defined in

[index.ts:16](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L16)

___

### thumbnail

• `Optional` **thumbnail**: [`Thumbnail`](#generatedinterfacesthumbnailmd)

#### Defined in

[index.ts:20](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L20)

___

### title

• **title**: `string`

#### Defined in

[index.ts:17](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L17)

# Interface: Thumbnail

## Properties

### duration

• **duration**: `number`

#### Defined in

[index.ts:10](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L10)

___

### height

• **height**: `number`

#### Defined in

[index.ts:9](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L9)

___

### mimetype

• **mimetype**: `string`

#### Defined in

[index.ts:6](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L6)

___

### size

• **size**: `number`

#### Defined in

[index.ts:7](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L7)

___

### url

• **url**: `string`

#### Defined in

[index.ts:11](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L11)

___

### width

• **width**: `number`

#### Defined in

[index.ts:8](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L8)
