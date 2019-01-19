[commons](../README.md) > ["Redis"](../modules/_redis_.md)

# External module: "Redis"

## Index

### Enumerations

* [RedisClientType](../enums/_redis_.redisclienttype.md)

### Classes

* [EventConstructor](../classes/_redis_.eventconstructor.md)
* [RedisBuilder](../classes/_redis_.redisbuilder.md)
* [SubscribeConstructor](../classes/_redis_.subscribeconstructor.md)

### Type aliases

* [Key](_redis_.md#key)

---

## Type aliases

<a id="key"></a>

###  Key

**Ƭ Key**: *`string` | `Buffer`*

*Defined in [Redis.ts:85](https://github.com/Maxime6678/commons/blob/72bac02/src/Redis.ts#L85)*

Installation: npm install ioredis @types/ioredis

Exemple:

```
 class Normal extends RedisBuilder {

     constructor(type: RedisClientType, host: string, password: string, port: number, database: number, name: string) {
         super(type, host, password, port, database, name)
     }

     onConnect(client: Redis.Redis) {
         console.log(`normal connected!`)
     }

     onReady(client: Redis.Redis) {
         console.log(`normal ready!`)
     }

     onError(client: Redis.Redis, err: string) {
         console.log(`normal error: ${err}`)
     }

 }

 class Subscriber extends RedisBuilder {

     constructor(type: RedisClientType, host: string, password: string, port: number, database: number, name: string) {
         super(type, host, password, port, database, name)
     }

     onConnect(client: Redis.Redis) {
         console.log(`subcriber connected!`)
     }

     onReady(client: Redis.Redis) {
         console.log(`subcriber ready!`)
     }

     onError(client: Redis.Redis, err: string) {
         console.log(`subcriber error: ${err}`)
     }

 }

 class EndEvent extends EventConstructor {

     execute(client: Redis.Redis) {
         return () => {
             console.log(`${client.config.name} end connection`)
         }
     }

 }

 class ChannelSubscribe extends SubscribeConstructor {

     execute(client: Redis.Redis, data: string) {
         console.log(`${client.config.name} receive ${data} on 'channel'`)
     }

 }

 const normal = new Normal(RedisClientType.NORMAL, process.env.REDIS_HOST, process.env.REDIS_PASSWORD, Number(process.env.REDIS_PORT), 0, 'Normal')
 normal.registerEvent('end', new EndEvent())
 normal.connect()

 const subscribe = new Subscriber(RedisClientType.SUBSCRIBER, process.env.REDIS_HOST, process.env.REDIS_PASSWORD, Number(process.env.REDIS_PORT), 0, 'Subscribe')
 subscribe.registerSubscribe('channel', new ChannelSubscribe())
 subscribe.registerEvent('end', new EndEvent())
 subscribe.connect()
```

___

