[commons](../README.md) > ["LogChannel"](../modules/_logchannel_.md) > [LogChannel](../classes/_logchannel_.logchannel.md)

# Class: LogChannel

Use this as extends for create a log channel more easiest.
*__export__*: 

*__abstract__*: 

*__class__*: LogChannel

## Hierarchy

**LogChannel**

## Index

### Constructors

* [constructor](_logchannel_.logchannel.md#constructor)

### Properties

* [channel](_logchannel_.logchannel.md#channel)

### Methods

* [getTextChannel](_logchannel_.logchannel.md#gettextchannel)
* [send](_logchannel_.logchannel.md#send)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new LogChannel**(channel: *`Discord.TextChannel`*): [LogChannel](_logchannel_.logchannel.md)

*Defined in [LogChannel.ts:93](https://github.com/Maxime6678/commons/blob/72bac02/src/LogChannel.ts#L93)*

Creates an instance of LogChannel.
*__memberof__*: LogChannel

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| channel | `Discord.TextChannel` |  Provide the Discord#TextChannel |

**Returns:** [LogChannel](_logchannel_.logchannel.md)

___

## Properties

<a id="channel"></a>

### `<Private>` channel

**● channel**: *`Discord.TextChannel`*

*Defined in [LogChannel.ts:93](https://github.com/Maxime6678/commons/blob/72bac02/src/LogChannel.ts#L93)*

___

## Methods

<a id="gettextchannel"></a>

###  getTextChannel

▸ **getTextChannel**(): `Discord.TextChannel`

*Defined in [LogChannel.ts:110](https://github.com/Maxime6678/commons/blob/72bac02/src/LogChannel.ts#L110)*

Get the Discord#TextChannel of LogChannel
*__memberof__*: LogChannel

**Returns:** `Discord.TextChannel`
Return the Discord#TextChannel of LogChannel

___
<a id="send"></a>

### `<Abstract>` send

▸ **send**(client: *`Discord.Client`*, data: *`any`*): [LogData](../modules/_logchannel_.md#logdata)

*Defined in [LogChannel.ts:123](https://github.com/Maxime6678/commons/blob/72bac02/src/LogChannel.ts#L123)*

Execute when you use Log#sendLogChannel
*__abstract__*: 

*__memberof__*: LogChannel

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `Discord.Client` |  Provide the client of bot |
| data | `any` |  Provide the data from Log#sendLogChannel |

**Returns:** [LogData](../modules/_logchannel_.md#logdata)

___

