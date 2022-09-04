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

index.ts:87

# Interface: Page

## Properties

### description

• **description**: `string`

#### Defined in

index.ts:19

___

### excerpt

• **excerpt**: `string`

#### Defined in

index.ts:18

___

### id

• **id**: `number`

#### Defined in

index.ts:15

___

### key

• **key**: `string`

#### Defined in

index.ts:16

___

### thumbnail

• `Optional` **thumbnail**: [`Thumbnail`](#generatedinterfacesthumbnailmd)

#### Defined in

index.ts:20

___

### title

• **title**: `string`

#### Defined in

index.ts:17

# Interface: Thumbnail

## Properties

### duration

• **duration**: `number`

#### Defined in

index.ts:10

___

### height

• **height**: `number`

#### Defined in

index.ts:9

___

### mimetype

• **mimetype**: `string`

#### Defined in

index.ts:6

___

### size

• **size**: `number`

#### Defined in

index.ts:7

___

### url

• **url**: `string`

#### Defined in

index.ts:11

___

### width

• **width**: `number`

#### Defined in

index.ts:8
