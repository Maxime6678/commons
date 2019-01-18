[commons](../README.md) > ["Redis"](../modules/_redis_.md) > [RedisBuilder](../classes/_redis_.redisbuilder.md)

# Class: RedisBuilder

Use this as extends for create a Redis instance more easiest.
*__export__*: 

*__abstract__*: 

*__class__*: RedisBuilder

## Hierarchy

**RedisBuilder**

## Index

### Constructors

* [constructor](_redis_.redisbuilder.md#constructor)

### Properties

* [database](_redis_.redisbuilder.md#database)
* [host](_redis_.redisbuilder.md#host)
* [instance](_redis_.redisbuilder.md#instance)
* [name](_redis_.redisbuilder.md#name)
* [password](_redis_.redisbuilder.md#password)
* [port](_redis_.redisbuilder.md#port)
* [subscribe](_redis_.redisbuilder.md#subscribe)
* [type](_redis_.redisbuilder.md#type)

### Methods

* [connect](_redis_.redisbuilder.md#connect)
* [get](_redis_.redisbuilder.md#get)
* [getInstance](_redis_.redisbuilder.md#getinstance)
* [getName](_redis_.redisbuilder.md#getname)
* [getRedisParam](_redis_.redisbuilder.md#getredisparam)
* [onConnect](_redis_.redisbuilder.md#onconnect)
* [onError](_redis_.redisbuilder.md#onerror)
* [onReady](_redis_.redisbuilder.md#onready)
* [registerEvent](_redis_.redisbuilder.md#registerevent)
* [registerSubscribe](_redis_.redisbuilder.md#registersubscribe)
* [set](_redis_.redisbuilder.md#set)
* [setex](_redis_.redisbuilder.md#setex)

---

## Constructors

<a id="constructor"></a>

###  constructor

⊕ **new RedisBuilder**(type: *[RedisClientType](../enums/_redis_.redisclienttype.md)*, host: *`string`*, password: *`string`*, port: *`number`*, database: *`number`*, name: *`string`*): [RedisBuilder](_redis_.redisbuilder.md)

*Defined in Redis.ts:114*

Creates an instance of RedisBuilder.
*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| type | [RedisClientType](../enums/_redis_.redisclienttype.md) |  Provide the type of Client |
| host | `string` |  Provide the host of the server |
| password | `string` |  Provide the password of the server |
| port | `number` |  Provide the port of the server |
| database | `number` |  Provide the database you want to use |
| name | `string` |  Provide the name of the connection |

**Returns:** [RedisBuilder](_redis_.redisbuilder.md)

___

## Properties

<a id="database"></a>

### `<Private>` database

**● database**: *`number`*

*Defined in Redis.ts:111*

___
<a id="host"></a>

### `<Private>` host

**● host**: *`string`*

*Defined in Redis.ts:108*

___
<a id="instance"></a>

### `<Private>` instance

**● instance**: *`Redis.Redis`*

*Defined in Redis.ts:113*

___
<a id="name"></a>

### `<Private>` name

**● name**: *`string`*

*Defined in Redis.ts:112*

___
<a id="password"></a>

### `<Private>` password

**● password**: *`string`*

*Defined in Redis.ts:109*

___
<a id="port"></a>

### `<Private>` port

**● port**: *`number`*

*Defined in Redis.ts:110*

___
<a id="subscribe"></a>

### `<Private>` subscribe

**● subscribe**: *`Map`<`string`, [SubscribeConstructor](_redis_.subscribeconstructor.md)>*

*Defined in Redis.ts:114*

___
<a id="type"></a>

### `<Private>` type

**● type**: *[RedisClientType](../enums/_redis_.redisclienttype.md)*

*Defined in Redis.ts:107*

___

## Methods

<a id="connect"></a>

###  connect

▸ **connect**(): `void`

*Defined in Redis.ts:168*

Login the instance to the Redis server.
*__memberof__*: RedisBuilder

**Returns:** `void`

___
<a id="get"></a>

###  get

▸ **get**(key: *[Key](../modules/_redis_.md#key)*, callback: *`function`*): `void`

*Defined in Redis.ts:179*

Return the data for a key
*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | [Key](../modules/_redis_.md#key) |  Provide the key of data |
| callback | `function` |  Return err if have err or data |

**Returns:** `void`

___
<a id="getinstance"></a>

###  getInstance

▸ **getInstance**(): `Redis.Redis`

*Defined in Redis.ts:217*

Return the Redis instance
*__memberof__*: RedisBuilder

**Returns:** `Redis.Redis`
Redis instance

___
<a id="getname"></a>

###  getName

▸ **getName**(): `string`

*Defined in Redis.ts:227*

Return the name of instance
*__memberof__*: RedisBuilder

**Returns:** `string`
Return the name

___
<a id="getredisparam"></a>

### `<Private>` getRedisParam

▸ **getRedisParam**(): `Redis.RedisOptions`

*Defined in Redis.ts:152*

Return parameters for create redis instance.
*__memberof__*: RedisBuilder

**Returns:** `Redis.RedisOptions`

___
<a id="onconnect"></a>

### `<Abstract>` onConnect

▸ **onConnect**(instance: *`Redis.Redis`*): `any`

*Defined in Redis.ts:263*

Execute when the instance is connected.
*__abstract__*: 

*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| instance | `Redis.Redis` |  Provide the instance of connection |

**Returns:** `any`

___
<a id="onerror"></a>

### `<Abstract>` onError

▸ **onError**(instance: *`Redis.Redis`*, err: *`string`*): `any`

*Defined in Redis.ts:282*

Execute when the instance trigger an error
*__abstract__*: 

*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| instance | `Redis.Redis` |  Provide the instance of connection |
| err | `string` |  Provide the error from the instance |

**Returns:** `any`

___
<a id="onready"></a>

### `<Abstract>` onReady

▸ **onReady**(instance: *`Redis.Redis`*): `any`

*Defined in Redis.ts:272*

Execute when the instance is ready.
*__abstract__*: 

*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| instance | `Redis.Redis` |  Provide the instance of connection |

**Returns:** `any`

___
<a id="registerevent"></a>

###  registerEvent

▸ **registerEvent**(name: *`string`*, event: *[EventConstructor](_redis_.eventconstructor.md)*): `void`

*Defined in Redis.ts:238*

Register a event for your instance
*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of your event |
| event | [EventConstructor](_redis_.eventconstructor.md) |  Instance of EventConstructor class |

**Returns:** `void`

___
<a id="registersubscribe"></a>

###  registerSubscribe

▸ **registerSubscribe**(name: *`string`*, subcribe: *[SubscribeConstructor](_redis_.subscribeconstructor.md)*): `void`

*Defined in Redis.ts:249*

Register a event for your instance
*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| name | `string` |  The name of your subscribe channel |
| subcribe | [SubscribeConstructor](_redis_.subscribeconstructor.md) |  Instance of SubscribeConstructor class |

**Returns:** `void`

___
<a id="set"></a>

###  set

▸ **set**(key: *[Key](../modules/_redis_.md#key)*, value: *`any`*, callback?: *`function`*): `void`

*Defined in Redis.ts:192*

Create a new row with key and data
*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | [Key](../modules/_redis_.md#key) |  Provide the key of the new row |
| value | `any` |  Provide the data of the new row |
| `Optional` callback | `function` |

**Returns:** `void`

___
<a id="setex"></a>

###  setex

▸ **setex**(key: *[Key](../modules/_redis_.md#key)*, seconds: *`number`*, value: *`any`*, callback?: *`function`*): `void`

*Defined in Redis.ts:206*

Create a new row with key and data for x seconds
*__memberof__*: RedisBuilder

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| key | [Key](../modules/_redis_.md#key) |  Provide the key of the new row |
| seconds | `number` |  Provide the seconds of data stay |
| value | `any` |  Provide the data of the new row |
| `Optional` callback | `function` |

**Returns:** `void`

___

