[commons](../README.md) > ["Redis"](../modules/_redis_.md) > [EventConstructor](../classes/_redis_.eventconstructor.md)

# Class: EventConstructor

Use this as extends for create a event more easiest.
*__export__*: 

*__abstract__*: 

*__class__*: EventConstructor

## Hierarchy

**EventConstructor**

## Index

### Methods

* [execute](_redis_.eventconstructor.md#execute)

---

## Methods

<a id="execute"></a>

### `<Abstract>` execute

▸ **execute**(client: *`Redis.Redis`*): `function`

*Defined in [Redis.ts:283](https://github.com/Maxime6678/commons/blob/165f217/src/Redis.ts#L283)*

Execute when the event is trigged.
*__abstract__*: 

*__memberof__*: EventConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `Redis.Redis` |  Provide the instance of connection |

**Returns:** `function`
Return the function that the event must execute

___

