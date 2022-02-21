import fs from 'fs'

import { videoToAudioConverter } from './video-to-audio-converter'

describe('video-to-audio-converter', () => {
  test('video to audio', async () => {
    const localeMediaFilePath = './tmp/media/downloads/video-landscape.mp4'
    const localeAudioSaveFilePath =
      './tmp/media/downloads/video-landscape-out1.mp3'

    await videoToAudioConverter(localeMediaFilePath, localeAudioSaveFilePath)

    const is = await fs.existsSync(localeAudioSaveFilePath)

    expect(is).toBe(true)
  })

  test('audio to audio', async () => {
    const localeMediaFilePath = './tmp/media/downloads/video-landscape.mp3'
    const localeMediaSaveFilePath =
      './tmp/media/downloads/video-landscape-out2.mp3'

    await videoToAudioConverter(localeMediaFilePath, localeMediaSaveFilePath)

    const is = await fs.existsSync(localeMediaSaveFilePath)

    expect(is).toBe(true)
  })
})
