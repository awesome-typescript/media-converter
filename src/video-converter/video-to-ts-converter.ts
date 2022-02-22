import ffmpeg from 'fluent-ffmpeg'

const ffmpegOptions = [
  '-acodec copy',
  '-vcodec copy',
  '-vbsf h264_mp4toannexb',
  '-f mpegts',
]

export const videoToTsConverter = async (
  localeMediaFilePath: string,
  localeMediaSaveFilePath: string,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(localeMediaFilePath)
      .addOptions(ffmpegOptions)
      .save(localeMediaSaveFilePath)
      .on('start', (command) =>
        // eslint-disable-next-line no-console
        console.log(`videoMP4ToTSConverter: ${command}`),
      )
      .on('end', () => resolve())
      .on('error', (error) => reject(error))
  })
}
