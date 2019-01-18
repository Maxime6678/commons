[commons](../README.md) > ["Language"](../modules/_language_.md)

# External module: "Language"

Installation: MAKE SURE THE custom\_typings/json-loader.d.ts IS:

```
 declare module '*.json' {
     const value: any
     export default value
 }
```

Exemple:

```
 const language = new Language()
 console.log(language.getLabel(Languages.FRENCH, 'accountNotExist'))
```

## Index

### Enumerations

* [Languages](../enums/_language_.languages.md)

### Classes

* [Language](../classes/_language_.language.md)

---

