[commons](../README.md) > ["LogChannel"](../modules/_logchannel_.md)

# External module: "LogChannel"

## Index

### Classes

* [Log](../classes/_logchannel_.log.md)
* [LogChannel](../classes/_logchannel_.logchannel.md)

### Type aliases

* [LogData](_logchannel_.md#logdata)

---

## Type aliases

<a id="logdata"></a>

###  LogData

**Ƭ LogData**: *`string` | `Discord.RichEmbed` | `Discord.MessageAttachment`*

*Defined in LogChannel.ts:35*

Installation: npm install discord.js

Exemple:

```
 class StaffLogChannel extends LogChannel {

     constructor(channel: Discord.TextChannel) {
         super(channel)
     }

     send(client: Discord.Client, data: any) {
         return `Data: ${data}`
     }

 }

 const logger = new Log(myBot)
 logger.registerLogChannel('staff', new StaffLogChannel(myBot.channels.get(staffChannelID)))
 logger.sendLogChannel('staff', { foo: 'bar' })
```

___

