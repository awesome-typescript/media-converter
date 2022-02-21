import {
  isVideoMetadataLandscape,
  isVideoMetadataPortrait,
  isVideoMetadataSquare,
  isVideoMetadataRatio_4_5,
  isVideoMetadataRatio_9_16,
  isVideoMetadataRatio_16_9,
} from './video-aspect-ratio'
import {
  mediaFilesDurationInSeconds,
  mediaFileDurationInSeconds,
  mediaFilesDurationInMinutes,
  mediaFileDurationInMinutes,
} from './media-duration'

export class MediaMetadata {
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get filesDurationInSeconds() {
    return mediaFilesDurationInSeconds
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get fileDurationInSeconds() {
    return mediaFileDurationInSeconds
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get filesDurationInMinutes() {
    return mediaFilesDurationInMinutes
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get fileDurationInMinutes() {
    return mediaFileDurationInMinutes
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get isLandscape() {
    return isVideoMetadataLandscape
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get isPortrait() {
    return isVideoMetadataPortrait
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get isSquare() {
    return isVideoMetadataSquare
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get isRatio_4_5() {
    return isVideoMetadataRatio_4_5
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get isRatio_9_16() {
    return isVideoMetadataRatio_9_16
  }

  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  public static get isRatio_16_9() {
    return isVideoMetadataRatio_16_9
  }
}
