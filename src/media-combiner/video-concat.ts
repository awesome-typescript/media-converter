import ffmpeg from 'fluent-ffmpeg'

export const videoConcat = (
  localeVideoConcatFilePaths: string,
  localeVideoFileOutputPath: string,
): Promise<void> => {
  return new Promise((resolve, reject) => {
    ffmpeg()
      .input(`concat:${localeVideoConcatFilePaths}`)
      .inputOptions(['-f mpegts', '-fflags discardcorrupt'])
      .outputOptions(['-c copy', '-movflags faststart'])
      .save(localeVideoFileOutputPath)
      .on('start', (command) => {
        console.log(`videoConcat:${command}`)
      })
      .on('end', () => resolve())
      .on('error', (error) => {
        console.log('videoConcat:', error)
        console.log('videoConcat:concatPaths:', localeVideoConcatFilePaths)
        console.log('videoConcat:outputPath:', localeVideoFileOutputPath)
        reject(error)
      })
  })
}
