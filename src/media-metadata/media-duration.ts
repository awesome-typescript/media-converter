import ffmpeg from 'fluent-ffmpeg'

import { MediaFilesNotFoundException } from '../exceptions'

export const mediaFilesDurationInSeconds = async (
  localeMediaFilePaths: string[],
): Promise<number> => {
  if (localeMediaFilePaths.length <= 0) {
    throw new MediaFilesNotFoundException(
      `Media LocaleMediaFilePaths: ${localeMediaFilePaths.length}`,
    )
  }

  const durations = await Promise.all(
    localeMediaFilePaths.map(async (localeMediaFilePath) => {
      // eslint-disable-next-line @typescript-eslint/return-await,no-return-await
      return await mediaFileDurationInSeconds(localeMediaFilePath)
    }),
  )

  return durations.reduce((previousValue, currentValue) => {
    return previousValue + currentValue
  }, 0)
}

export const mediaFilesDurationInMinutes = async (
  localeMediaFilePaths: string[],
): Promise<number> => {
  const seconds = await mediaFilesDurationInSeconds(localeMediaFilePaths)
  return seconds / 60
}

export const mediaFileDurationInSeconds = async (
  localeMediaFilePath: string,
): Promise<number> => {
  if (!localeMediaFilePath) {
    throw new MediaFilesNotFoundException(
      'FileSystemDownloadMediaFilePath file not found',
    )
  }

  return mediaFileDuration(localeMediaFilePath)
}

export const mediaFileDurationInMinutes = async (
  localeMediaFilePath: string,
): Promise<number> => {
  if (!localeMediaFilePath) {
    throw new MediaFilesNotFoundException(
      'LocaleFileMediaFilePath file not found',
    )
  }

  const duration = await mediaFileDurationInSeconds(localeMediaFilePath)
  return duration / 60
}

const mediaFileDuration = async (
  localeMediaFilePath: string,
): Promise<number> => {
  return new Promise((resolve, reject) => {
    ffmpeg.ffprobe(localeMediaFilePath, (error, metadata) => {
      if (error) {
        reject(error)
      }
      if (metadata?.format?.duration) {
        resolve(metadata.format.duration)
      }
    })
  })
}
