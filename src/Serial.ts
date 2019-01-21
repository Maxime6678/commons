import * as Serial from 'serialport'

/**
 * Installation:
 *      npm install serialport @types/serialport
 * 
 * Exemple:
 * 
 *      export class ArduinoSerial extends SerialBuilder {
 *  
 *           constructor(path: string, bitrate: number) {
 *               super(path, bitrate)
 *           }
 *  
 *           public onReady() {
 *               console.log('Ready to receive and send')
 *           }
 *  
 *           public onError(err: string) {
 *              console.log(`err: ${err}`)
 *           }
 *  
 *          public onData(data: string) {
 *              console.log(`receive: ${data}`)
 *          }
 *  
 *      }
 *  
 *      const arduinoSerial = new ArduinoSerial('COM4', 9600)
 *      arduinoSerial.send('Hello world!', (err: string) => console.log(`err: ${err}`))      
 *
 */

/**
 * Use this as extends for create a Serial connection more easiest.
 *
 * @export
 * @abstract
 * @class SerialBuilder
 */
export abstract class SerialBuilder {

    public readonly instance: Serial

    /**
     * Creates an instance of SerialBuilder.
     * @param {string} path Provide the port of the arduino connection
     * @param {number} bitrate Provide the bitrate of the connection
     * @memberof SerialBuilder
     */
    constructor(path: string, bitrate: number) {
        this.instance = new Serial(path, {
            baudRate: bitrate
        })
        this.instance.on('open', () => this.onReady())
        this.instance.on('error', (err: string) => this.onError(err))
        this.instance.on('data', (data: string) => this.onData(data))
    }

    /**
     * Send a data to the arduino board
     *
     * @param {string} data Provide the data
     * @param {(err: string) => void} [callback] Got the err if an error is trigged
     * @memberof SerialBuilder
     */
    public send(data: string, callback?: (err: string) => void) {
        this.instance.write(data, (err: string) => {
            callback(err || null)
        })
    }

    /**
     * Execute when the instance is ready
     *
     * @abstract
     * @memberof SerialBuilder
     */
    public abstract onReady()

    /**
     * Execute when the instance trigger an error
     *
     * @abstract
     * @param {string} err Provide the message of the error
     * @memberof SerialBuilder
     */
    public abstract onError(err: string)

    /**
     * Execute when the instance receive data from arduino board
     *
     * @abstract
     * @param {string} data Provite the data
     * @memberof SerialBuilder
     */
    public abstract onData(data: string)

}