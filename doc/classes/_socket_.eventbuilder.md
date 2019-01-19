[commons](../README.md) > ["Socket"](../modules/_socket_.md) > [EventBuilder](../classes/_socket_.eventbuilder.md)

# Class: EventBuilder

Use this as extends for create a Socket.io event more easiest.
*__export__*: 

*__abstract__*: 

*__class__*: EventBuilder

## Hierarchy

**EventBuilder**

## Index

### Methods

* [execute](_socket_.eventbuilder.md#execute)

---

## Methods

<a id="execute"></a>

### `<Abstract>` execute

▸ **execute**(io: *`Socket.Server`*): `function`

*Defined in Socket.ts:122*

Execute when the event is trigged.
*__abstract__*: 

*__memberof__*: EventBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| io | `Socket.Server` |  Provide the io for broadcast ... |

**Returns:** `function`
Return the function that the event must execute

___

