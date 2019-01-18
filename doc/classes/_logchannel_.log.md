[commons](../README.md) > ["LogChannel"](../modules/_logchannel_.md) > [Log](../classes/_logchannel_.log.md)

# Class: Log

Create a instance of this just one time
*__export__*: 

*__class__*: Log

## Hierarchy

**Log**

## Index

### Properties

* [bot](_logchannel_.log.md#bot)
* [channels](_logchannel_.log.md#channels)

### Methods

* [registerLogChannel](_logchannel_.log.md#registerlogchannel)
* [sendLogChannel](_logchannel_.log.md#sendlogchannel)
* [setClient](_logchannel_.log.md#setclient)

---

## Properties

<a id="bot"></a>

### `<Private>` bot

**● bot**: *[BotConstructor](_discordbot_.botconstructor.md)*

*Defined in LogChannel.ts:45*

___
<a id="channels"></a>

### `<Private>` channels

**● channels**: *`Map`<`String`, [LogChannel](_logchannel_.logchannel.md)>*

*Defined in LogChannel.ts:46*

___

## Methods

<a id="registerlogchannel"></a>

###  registerLogChannel

▸ **registerLogChannel**(name: *`string`*, logChannel: *[LogChannel](_logchannel_.logchannel.md)*): `void`

*Defined in LogChannel.ts:64*

Register a channel for log
*__memberof__*: Log

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Provide the name of channel (ref) |
| logChannel | [LogChannel](_logchannel_.logchannel.md) |  Provide the instance of LogChannel |

**Returns:** `void`

___
<a id="sendlogchannel"></a>

###  sendLogChannel

▸ **sendLogChannel**(name: *`string`*, data: *`any`*): `void`

*Defined in LogChannel.ts:75*

Send a log to a channel
*__memberof__*: Log

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  Provide the channel name (ref) |
| data | `any` |  Provide the data for LogChannel#send |

**Returns:** `void`

___
<a id="setclient"></a>

###  setClient

▸ **setClient**(bot: *[BotConstructor](_discordbot_.botconstructor.md)*): `void`

*Defined in LogChannel.ts:53*

Set the BotConstructor instance
*__memberof__*: Log

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| bot | [BotConstructor](_discordbot_.botconstructor.md) |  Provide the instance of BotConstructor |

**Returns:** `void`

___

