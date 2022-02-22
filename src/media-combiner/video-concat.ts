import ffmpeg from 'fluent-ffmpeg'

export const videoConcat = (
  localeVideoConcatFilePaths: string[],
  localeVideoFileOutputPath: string,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(`concat:${localeVideoConcatFilePaths.join('|')}`)
      .inputOptions(['-f mpegts', '-fflags discardcorrupt'])
      .outputOptions(['-c copy', '-movflags faststart'])
      .save(localeVideoFileOutputPath)
      .on('start', (command) => {
        // eslint-disable-next-line no-console
        console.log(`videoConcat:${command}`)
      })
      .on('end', () => resolve())
      .on('error', (error) => {
        // eslint-disable-next-line no-console
        console.log('videoConcat:', error)
        // eslint-disable-next-line no-console
        console.log('videoConcat:concatPaths:', localeVideoConcatFilePaths)
        // eslint-disable-next-line no-console
        console.log('videoConcat:outputPath:', localeVideoFileOutputPath)
        reject(error)
      })
  })
}
