// import * as frenchLanguage from './fr_FR.json'
// import * as englishLanguage from './en_EN.json'

/*
 * This project is under MIT License
 * View LICENSE for more details
 *
 * Copyright (c) 2019 Maxime6678
 */

/**
 * Installation:
 *      MAKE SURE THE custom_typings/json-loader.d.ts IS:
 * 
 *      declare module '*.json' {
 *          const value: any
 *          export default value
 *      }
 * 
 * Exemple:
 *      
 *      const language = new Language()
 *      console.log(language.getLabel(Languages.FRENCH, 'accountNotExist'))
 * 
 */

/**
 * FRENCH: Use this for french language
 * ENGLISH: Use this for english language
 *
 * @export
 * @enum {number}
 */
export enum Languages {
    FRENCH, ENGLISH
}

/**
 * Use this as extends for create a language system more easiest.
 *
 * @export
 * @class Language
 */
export class Language {

    private languages: Map<Languages, any>

    /**
     * Creates an instance of Language.
     * @memberof Language
     */
    constructor() {
        this.languages = new Map<Languages, any>()
        this.languages.set(Languages.FRENCH, {}) // {} = frenchLanguage
        this.languages.set(Languages.ENGLISH, {}) // {} = englishLanguage
    }

    /**
     * Get label from a specified language
     *
     * @param {Languages} language Provide the Language
     * @param {string} identifier Provide the identifier of your .json file
     * @returns {string} Return the label
     * @memberof Language
     */
    getLabel(language: Languages, identifier: string): string {
        return this.languages.get(language)[identifier]
    }

}