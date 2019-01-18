[commons](../README.md) > ["Redis"](../modules/_redis_.md) > [SubscribeConstructor](../classes/_redis_.subscribeconstructor.md)

# Class: SubscribeConstructor

Use this as extends for create a subcribe more easiest.
*__export__*: 

*__abstract__*: 

*__class__*: SubscribeConstructor

## Hierarchy

**SubscribeConstructor**

## Index

### Methods

* [execute](_redis_.subscribeconstructor.md#execute)

---

## Methods

<a id="execute"></a>

### `<Abstract>` execute

▸ **execute**(client: *`Redis.Redis`*, data: *`string`*): `void`

*Defined in [Redis.ts:304](https://github.com/Maxime6678/commons/blob/c4ee63e/src/Redis.ts#L304)*

Execute when the channel is trigged.
*__abstract__*: 

*__memberof__*: SubscribeConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `Redis.Redis` |  Provide the instance of connection |
| data | `string` |  Provide the data of the trigger |

**Returns:** `void`

___

