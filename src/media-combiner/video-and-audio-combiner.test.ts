import fs from 'fs'

import { videoToAudioConverter } from '../video-converter/video-to-audio-converter'
import { videoAndAudioCombiner } from './video-and-audio-combiner'

describe('video-and-audio-combiner', () => {
  test('Video and Audio', async () => {
    const fileSystemAudioDownloadMediaFilePath =
      './tmp/media/downloads/INSTAGRAM-video-story-sound.mp4'
    const fileSystemAudioDownloadMediaFilePathCopy2 =
      './tmp/media/downloads/INSTAGRAM-video-story-sound2.mp3'

    const fileSystemVideoMediaFilePath =
      './tmp/media/downloads/INSTAGRAM-video-story.mp4'
    const fileSystemVideoMediaFilePathCopy2 =
      './tmp/media/downloads/INSTAGRAM-video-story2.mp4'

    const fileSystemMediaFilePathOutput =
      './tmp/media/downloads/INSTAGRAM-video-mp4-and-mp3-combiner1.mp4'

    await fs.copyFileSync(
      fileSystemAudioDownloadMediaFilePath,
      fileSystemAudioDownloadMediaFilePathCopy2,
    )

    await fs.copyFileSync(
      fileSystemVideoMediaFilePath,
      fileSystemVideoMediaFilePathCopy2,
    )

    await videoToAudioConverter(
      fileSystemAudioDownloadMediaFilePath,
      fileSystemAudioDownloadMediaFilePathCopy2,
    )
    await videoAndAudioCombiner(
      fileSystemVideoMediaFilePathCopy2,
      fileSystemAudioDownloadMediaFilePathCopy2,
      fileSystemMediaFilePathOutput,
    )

    const is = await fs.existsSync(fileSystemMediaFilePathOutput)
    expect(is).toBe(true)
  })
})
