import { videoConcat } from './video-concat'
import { videoAndAudioCombiner } from './video-and-audio-combiner'

export class MediaCombiner {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get videoConcat() {
    return videoConcat
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get videoAndAudioCombiner() {
    return videoAndAudioCombiner
  }
}
