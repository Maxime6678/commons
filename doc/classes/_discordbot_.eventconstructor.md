[commons](../README.md) > ["DiscordBot"](../modules/_discordbot_.md) > [EventConstructor](../classes/_discordbot_.eventconstructor.md)

# Class: EventConstructor

Use this as extends for create a event more easiest.
*__exports__*: 

*__abstract__*: 

*__class__*: EventConstructor

## Hierarchy

**EventConstructor**

## Index

### Methods

* [execute](_discordbot_.eventconstructor.md#execute)

---

## Methods

<a id="execute"></a>

### `<Abstract>` execute

▸ **execute**(client: *`Discord.Client`*): `Function`

*Defined in [DiscordBot.ts:185](https://github.com/Maxime6678/commons/blob/165f217/src/DiscordBot.ts#L185)*

Execute when the event is trigged.
*__abstract__*: 

*__memberof__*: EventConstructor

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| client | `Discord.Client` |  Provide the client of the bot |

**Returns:** `Function`
Return the function that the event must execute

___

