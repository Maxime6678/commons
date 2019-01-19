[commons](../README.md) > ["DiscordBot"](../modules/_discordbot_.md) > [CommandConstructor](../classes/_discordbot_.commandconstructor.md)

# Class: CommandConstructor

Use this as extends for create a bot command more easiest.
*__exports__*: 

*__abstract__*: 

*__class__*: CommandConstructor

## Hierarchy

**CommandConstructor**

## Index

### Methods

* [execute](_discordbot_.commandconstructor.md#execute)

---

## Methods

<a id="execute"></a>

### `<Abstract>` execute

▸ **execute**(client: *`Discord.Client`*, message: *`Discord.Message`*, args: *`string`[]*): `any`

*Defined in [DiscordBot.ts:164](https://github.com/Maxime6678/commons/blob/165f217/src/DiscordBot.ts#L164)*

Execute when the command is trigged.
*__abstract__*: 

*__memberof__*: CommandConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `Discord.Client` |  Provide the client of the bot |
| message | `Discord.Message` |  Provide the message from user |
| args | `string`[] |  Provide the args of the command |

**Returns:** `any`

___

