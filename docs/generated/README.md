# How to use?

## Interfaces

- [Page](interfaces/Page.md)
- [Thumbnail](interfaces/Thumbnail.md)

## Functions

### getWikiImg

▸ **getWikiImg**(`query`, `dir?`): `Promise`<`Error` \| [`Page`](interfaces/Page.md)\>

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

`Promise`<`Error` \| [`Page`](interfaces/Page.md)\>

Promise with info about the search

#### Defined in

[index.ts:87](https://github.com/ShivamJoker/Wiki-Img/blob/3d15d17/src/index.ts#L87)
