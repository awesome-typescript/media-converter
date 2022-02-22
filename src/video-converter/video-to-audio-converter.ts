import ffmpeg from 'fluent-ffmpeg'

const ffmpegOptions = ['-vn', '-ar 44100', '-ac 2', '-b:a 192k']

/**
 *
 * @param localeMediaFilePath
 * @param localeMediaSaveFilePath
 *
 * @example:
 * ffmpeg -i morgen-story-audio.mp4 -vn -ar 44100 -ac 2 -b:a 192k morgen-story-audio.mp3
 */
export const videoToAudioConverter = async (
  localeMediaFilePath: string,
  localeMediaSaveFilePath: string,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(localeMediaFilePath)
      .addOptions(ffmpegOptions)
      .save(localeMediaSaveFilePath)
      // eslint-disable-next-line no-console
      .on('start', (command) => console.log(`videoAudioConverter: ${command}`))
      .on('end', () => resolve())
      .on('error', (error) => {
        // eslint-disable-next-line no-console
        console.log('error:videoAudioConverter')
        reject(error)
      })
  })
}
