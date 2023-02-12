import fs from 'fs'

import { videoToAudioConverter } from '../video-converter/video-to-audio-converter'

import { videoAndAudioCombiner } from './video-and-audio-combiner'

describe('video-and-audio-combiner', () => {
  test('Video and Audio', async () => {
    const localeAudioFilePath = './tmp/media/downloads/video-story.mp3'
    const localeAudioFilePathCopy2 =
      './tmp/media/downloads/video-story-temp1.mp3'

    const localeVideoFilePath = './tmp/media/downloads/video-story.mp4'
    const localeVideoFilePathCopy2 =
      './tmp/media/downloads/video-story-temp1.mp4'

    const localeVideoFilePathOutput =
      './tmp/media/downloads/video-mp4-and-mp3-combiner-temp1.mp4'

    await fs.copyFileSync(localeAudioFilePath, localeAudioFilePathCopy2)
    await fs.copyFileSync(localeVideoFilePath, localeVideoFilePathCopy2)

    await videoToAudioConverter(
      localeVideoFilePathCopy2,
      localeAudioFilePathCopy2,
    )
    await videoAndAudioCombiner(
      localeVideoFilePathCopy2,
      localeAudioFilePathCopy2,
      localeVideoFilePathOutput,
    )

    const is = await fs.existsSync(localeVideoFilePathOutput)
    expect(is).toBe(true)
  })
})
