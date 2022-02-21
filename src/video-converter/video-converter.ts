import { videoToAudioConverter } from './video-to-audio-converter'
import { videoToTsConverter } from './video-to-ts-converter'

export class VideoConverter {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get videoToAudio() {
    return videoToAudioConverter
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get videoToTS() {
    return videoToTsConverter
  }
}
