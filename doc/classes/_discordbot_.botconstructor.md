[commons](../README.md) > ["DiscordBot"](../modules/_discordbot_.md) > [BotConstructor](../classes/_discordbot_.botconstructor.md)

# Class: BotConstructor

Use this as extends for create a Discord bot more easiest.
*__export__*: 

*__abstract__*: 

*__class__*: BotConstructor

## Hierarchy

**BotConstructor**

## Index

### Constructors

* [constructor](_discordbot_.botconstructor.md#constructor)

### Properties

* [client](_discordbot_.botconstructor.md#client)
* [commands](_discordbot_.botconstructor.md#commands)
* [token](_discordbot_.botconstructor.md#token)

### Methods

* [connect](_discordbot_.botconstructor.md#connect)
* [onError](_discordbot_.botconstructor.md#onerror)
* [onReady](_discordbot_.botconstructor.md#onready)
* [registerCommand](_discordbot_.botconstructor.md#registercommand)
* [registerEvent](_discordbot_.botconstructor.md#registerevent)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new BotConstructor**(token: *`string`*): [BotConstructor](_discordbot_.botconstructor.md)

*Defined in [DiscordBot.ts:68](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L68)*

Creates an instance of BotConstructor.
*__memberof__*: BotConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| token | `string` |  Provide the bot token found on [https://discordapp.com/developers/applications/](https://discordapp.com/developers/applications/) |

**Returns:** [BotConstructor](_discordbot_.botconstructor.md)

___

## Properties

<a id="client"></a>

###  client

**● client**: *`Discord.Client`*

*Defined in [DiscordBot.ts:66](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L66)*

___
<a id="commands"></a>

### `<Private>` commands

**● commands**: *`Map`<`string`, [CommandConstructor](_discordbot_.commandconstructor.md)>*

*Defined in [DiscordBot.ts:68](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L68)*

___
<a id="token"></a>

###  token

**● token**: *`string`*

*Defined in [DiscordBot.ts:67](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L67)*

___

## Methods

<a id="connect"></a>

###  connect

▸ **connect**(): `void`

*Defined in [DiscordBot.ts:99](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L99)*

Login the bot to the Discord world.
*__memberof__*: BotConstructor

**Returns:** `void`

___
<a id="onerror"></a>

### `<Abstract>` onError

▸ **onError**(client: *`Discord.Client`*, error: *`Error`*): `void`

*Defined in [DiscordBot.ts:142](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L142)*

Execute when the bot trigger an error.
*__abstract__*: 

*__memberof__*: BotConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `Discord.Client` |  Provide the client of the bot |
| error | `Error` |  Provide the error from the bot |

**Returns:** `void`

___
<a id="onready"></a>

### `<Abstract>` onReady

▸ **onReady**(client: *`Discord.Client`*): `void`

*Defined in [DiscordBot.ts:132](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L132)*

Execute when the bot is ready.
*__abstract__*: 

*__memberof__*: BotConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `Discord.Client` |  Provide the client of the bot |

**Returns:** `void`

___
<a id="registercommand"></a>

###  registerCommand

▸ **registerCommand**(name: *`string`*, command: *[CommandConstructor](_discordbot_.commandconstructor.md)*): `void`

*Defined in [DiscordBot.ts:110](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L110)*

Register a command for your bot.
*__memberof__*: BotConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of your command without the prefix |
| command | [CommandConstructor](_discordbot_.commandconstructor.md) |  Instance of CommandConstructor class |

**Returns:** `void`

___
<a id="registerevent"></a>

###  registerEvent

▸ **registerEvent**(name: *`string`*, event: *[EventConstructor](_discordbot_.eventconstructor.md)*): `void`

*Defined in [DiscordBot.ts:121](https://github.com/Maxime6678/commons/blob/6d85187/src/DiscordBot.ts#L121)*

Register a event for your bot
*__memberof__*: BotConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of your event |
| event | [EventConstructor](_discordbot_.eventconstructor.md) |  Instance of Event class |

**Returns:** `void`

___

