[commons](../README.md) > ["Language"](../modules/_language_.md) > [Language](../classes/_language_.language.md)

# Class: Language

Use this as extends for create a language system more easiest.
*__export__*: 

*__class__*: Language

## Hierarchy

**Language**

## Index

### Constructors

* [constructor](_language_.language.md#constructor)

### Properties

* [languages](_language_.language.md#languages)

### Methods

* [getLabel](_language_.language.md#getlabel)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new Language**(): [Language](_language_.language.md)

*Defined in [Language.ts:46](https://github.com/Maxime6678/commons/blob/c4ee63e/src/Language.ts#L46)*

Creates an instance of Language.
*__memberof__*: Language

**Returns:** [Language](_language_.language.md)

___

## Properties

<a id="languages"></a>

### `<Private>` languages

**● languages**: *`Map`<[Languages](../enums/_language_.languages.md), `any`>*

*Defined in [Language.ts:46](https://github.com/Maxime6678/commons/blob/c4ee63e/src/Language.ts#L46)*

___

## Methods

<a id="getlabel"></a>

###  getLabel

▸ **getLabel**(language: *[Languages](../enums/_language_.languages.md)*, identifier: *`string`*): `string`

*Defined in [Language.ts:66](https://github.com/Maxime6678/commons/blob/c4ee63e/src/Language.ts#L66)*

Get label from a specified language
*__memberof__*: Language

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| language | [Languages](../enums/_language_.languages.md) |  Provide the Language |
| identifier | `string` |  Provide the identifier of your .json file |

**Returns:** `string`
Return the label

___

