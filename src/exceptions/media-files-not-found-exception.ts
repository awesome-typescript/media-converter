import { FileNotFoundException } from '@awesome-typescript/exceptions'

export class MediaFilesNotFoundException extends FileNotFoundException {
  constructor(message?: string, error?: Error) {
    super(message)

    Object.setPrototypeOf(this, MediaFilesNotFoundException.prototype)
    Error.captureStackTrace(this, this.constructor)

    this.name = this.constructor.name
    this.names = [this.constructor.name, ...this.names]

    if (error) {
      this.stack = error.stack
    }
  }
}
