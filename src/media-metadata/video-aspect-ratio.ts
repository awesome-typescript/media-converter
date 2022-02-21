import ffmpeg, { FfprobeData } from 'fluent-ffmpeg'
import {
  isSquare,
  isLandscape,
  isPortrait,
  isRatio_4_5,
  isRatio_9_16,
  isRatio_16_9,
} from '@awesome-typescript/aspect-ratio-calculator'

export const isVideoMetadataRatio_4_5 = async (
  localeVideoFilePath: string,
): Promise<boolean> => {
  const metadata = await videoAspectRatio(localeVideoFilePath)
  const [{ width, height }] = metadata.streams

  if (height && width) {
    return isRatio_4_5(width, height)
  }

  return false
}

export const isVideoMetadataRatio_9_16 = async (
  localeVideoFilePath: string,
): Promise<boolean> => {
  const metadata = await videoAspectRatio(localeVideoFilePath)
  const [{ width, height }] = metadata.streams

  if (height && width) {
    return isRatio_9_16(width, height)
  }

  return false
}

export const isVideoMetadataRatio_16_9 = async (
  localeVideoFilePath: string,
): Promise<boolean> => {
  const metadata = await videoAspectRatio(localeVideoFilePath)
  const [{ width, height }] = metadata.streams

  if (height && width) {
    return isRatio_16_9(width, height)
  }

  return false
}

export const isVideoMetadataLandscape = async (
  localeVideoFilePath: string,
): Promise<boolean> => {
  const metadata = await videoAspectRatio(localeVideoFilePath)
  const [{ width, height }] = metadata.streams

  if (height && width) {
    return isLandscape(width, height)
  }

  return false
}

export const isVideoMetadataPortrait = async (
  localeVideoFilePath: string,
): Promise<boolean> => {
  const metadata = await videoAspectRatio(localeVideoFilePath)
  const [{ width, height }] = metadata.streams

  if (height && width) {
    return isPortrait(width, height)
  }

  return false
}

export const isVideoMetadataSquare = async (
  localeVideoFilePath: string,
): Promise<boolean> => {
  const metadata = await videoAspectRatio(localeVideoFilePath)
  const [{ width, height }] = metadata.streams

  if (height && width) {
    return isSquare(width, height)
  }

  return false
}

export const videoAspectRatio = (
  localeVideoFilePath: string,
): Promise<FfprobeData> => {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(localeVideoFilePath, (error, metadata) => {
      if (error) {
        reject(error)
      }
      if (metadata) {
        resolve(metadata)
      }
    })
  })
}
