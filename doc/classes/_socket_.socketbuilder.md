[commons](../README.md) > ["Socket"](../modules/_socket_.md) > [SocketBuilder](../classes/_socket_.socketbuilder.md)

# Class: SocketBuilder

Use this as extends for create a Socket.io server more easiest.
*__export__*: 

*__abstract__*: 

*__class__*: SocketBuilder

## Hierarchy

**SocketBuilder**

## Index

### Constructors

* [constructor](_socket_.socketbuilder.md#constructor)

### Properties

* [events](_socket_.socketbuilder.md#events)
* [io](_socket_.socketbuilder.md#io)
* [port](_socket_.socketbuilder.md#port)

### Methods

* [listen](_socket_.socketbuilder.md#listen)
* [onReady](_socket_.socketbuilder.md#onready)
* [registerEvent](_socket_.socketbuilder.md#registerevent)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new SocketBuilder**(port: *`number`*): [SocketBuilder](_socket_.socketbuilder.md)

*Defined in [Socket.ts:55](https://github.com/Maxime6678/commons/blob/72bac02/src/Socket.ts#L55)*

Creates an instance of SocketBuilder.
*__memberof__*: SocketBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| port | `number` |  Provide the port for the server |

**Returns:** [SocketBuilder](_socket_.socketbuilder.md)

___

## Properties

<a id="events"></a>

### `<Private>` events

**● events**: *`Map`<`string`, [EventBuilder](_socket_.eventbuilder.md)>*

*Defined in [Socket.ts:55](https://github.com/Maxime6678/commons/blob/72bac02/src/Socket.ts#L55)*

___
<a id="io"></a>

###  io

**● io**: *`Socket.Server`*

*Defined in [Socket.ts:53](https://github.com/Maxime6678/commons/blob/72bac02/src/Socket.ts#L53)*

___
<a id="port"></a>

###  port

**● port**: *`number`*

*Defined in [Socket.ts:54](https://github.com/Maxime6678/commons/blob/72bac02/src/Socket.ts#L54)*

___

## Methods

<a id="listen"></a>

###  listen

▸ **listen**(): `void`

*Defined in [Socket.ts:73](https://github.com/Maxime6678/commons/blob/72bac02/src/Socket.ts#L73)*

Listen your Socket.io server to the world.
*__memberof__*: SocketBuilder

**Returns:** `void`

___
<a id="onready"></a>

### `<Abstract>` onReady

▸ **onReady**(): `void`

*Defined in [Socket.ts:100](https://github.com/Maxime6678/commons/blob/72bac02/src/Socket.ts#L100)*

Execute when the Socket.io server is ready.
*__abstract__*: 

*__memberof__*: SocketBuilder

**Returns:** `void`

___
<a id="registerevent"></a>

###  registerEvent

▸ **registerEvent**(name: *`string`*, event: *[EventBuilder](_socket_.eventbuilder.md)*): `void`

*Defined in [Socket.ts:90](https://github.com/Maxime6678/commons/blob/72bac02/src/Socket.ts#L90)*

Register a event for Socket.io server
*__memberof__*: SocketBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of your event |
| event | [EventBuilder](_socket_.eventbuilder.md) |  Instance of EventBuilder class |

**Returns:** `void`

___

