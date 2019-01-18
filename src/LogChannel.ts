import * as Discord from 'discord.js'
import { BotConstructor } from './DiscordBot'

/*
 * This project is under MIT License
 * View LICENSE for more details
 *
 * Copyright (c) 2019 Maxime6678
 */

/**
 * Installation:
 *      npm install discord.js
 * 
 * Exemple:
 * 
 *      class StaffLogChannel extends LogChannel {
 *      
 *          constructor(channel: Discord.TextChannel) {
 *              super(channel)
 *          }
 *      
 *          send(client: Discord.Client, data: any) {
 *              return `Data: ${data}`
 *          }
 *      
 *      }
 *      
 *      const logger = new Log(myBot)
 *      logger.registerLogChannel('staff', new StaffLogChannel(myBot.channels.get(staffChannelID)))
 *      logger.sendLogChannel('staff', { foo: 'bar' })
 * 
 */

export type LogData = string | Discord.RichEmbed | Discord.MessageAttachment

/**
 * Create a instance of this just one time
 *
 * @export
 * @class Log
 */
export class Log {

    private bot: BotConstructor
    private channels: Map<String, LogChannel>

    /**
     * Set the BotConstructor instance
     * @param {BotConstructor} bot Provide the instance of BotConstructor
     * @memberof Log
     */
    public setClient(bot: BotConstructor) {
        this.bot = bot
    }

    /**
     * Register a channel for log
     *
     * @param {string} name Provide the name of channel (ref)
     * @param {LogChannel} logChannel Provide the instance of LogChannel
     * @memberof Log
     */
    public registerLogChannel(name: string, logChannel: LogChannel) {
        this.channels.set(name, logChannel)
    }

    /**
     * Send a log to a channel
     *
     * @param {string} name Provide the channel name (ref)
     * @param {*} data Provide the data for LogChannel#send
     * @memberof Log
     */
    public sendLogChannel(name: string, data: any) {
        if (this.channels.has(name)) {
            let logChannel = this.channels.get(name)
            logChannel.getTextChannel().send(logChannel.send(this.bot.client, data))
        }
    }

}

/**
 * Use this as extends for create a log channel more easiest.
 *
 * @export
 * @abstract
 * @class LogChannel
 */
export abstract class LogChannel {

    private channel: Discord.TextChannel

    /**
     * Creates an instance of LogChannel.
     * @param {Discord.TextChannel} channel Provide the Discord#TextChannel
     * @memberof LogChannel
     */
    constructor(channel: Discord.TextChannel) {
        this.channel = channel
    }

    /**
     * Get the Discord#TextChannel of LogChannel
     *
     * @returns {Discord.TextChannel} Return the Discord#TextChannel of LogChannel
     * @memberof LogChannel
     */
    public getTextChannel(): Discord.TextChannel {
        return this.channel
    }

    /**
     * Execute when you use Log#sendLogChannel
     *
     * @abstract
     * @param {Discord.Client} client Provide the client of bot
     * @param {*} data Provide the data from Log#sendLogChannel
     * @returns {LogData}
     * @memberof LogChannel
     */
    public abstract send(client: Discord.Client, data: any): LogData

}