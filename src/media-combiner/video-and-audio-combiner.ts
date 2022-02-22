import ffmpeg from 'fluent-ffmpeg'

const ffmpegOptions = ['-c copy', '-map 0:v:0', '-map 1:a:0']

/**
 *
 * @param localeVideoFilePath
 * @param localeAudioFilePath
 * @param localeVideoSaveFilePath
 *
 * @example:
 * ffmpeg -i INSTAGRAM-video1.mp4 -i INSTAGRAM-video1.mp3 -c copy -map 0:v:0 -map 1:a:0 output.mp4
 */
export const videoAndAudioCombiner = async (
  localeVideoFilePath: string,
  localeAudioFilePath: string,
  localeVideoSaveFilePath: string,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(localeVideoFilePath)
      .addInput(localeAudioFilePath)
      .addOptions(ffmpegOptions)
      .save(localeVideoSaveFilePath)
      .on('start', (command) =>
        // eslint-disable-next-line no-console
        console.log(`videoAndAudioCombiner: ${command}`),
      )
      .on('end', () => resolve())
      .on('error', (error) => {
        // eslint-disable-next-line no-console
        console.log('error:videoAndAudioCombiner')
        reject(error)
      })
  })
}
