import fs from 'fs'

import { videoToTsConverter } from './video-to-ts-converter'

describe('video-to-ts-converter', () => {
  test('video to ts', async () => {
    const localeMediaFilePath = './tmp/media/downloads/video-landscape.mp4'
    const localeMediaFileTSPath =
      './tmp/media/downloads/video-landscape-out1.ts'

    await videoToTsConverter(localeMediaFilePath, localeMediaFileTSPath)

    const is = await fs.existsSync(localeMediaFileTSPath)

    expect(is).toBe(true)
  })

  test('video to ts 2', async () => {
    const localeMediaFilePath = './tmp/media/downloads/video-landscape2.mp4'
    const localeMediaFileTSPath =
      './tmp/media/downloads/video-landscape-out2.ts'

    await videoToTsConverter(localeMediaFilePath, localeMediaFileTSPath)

    const is = await fs.existsSync(localeMediaFileTSPath)

    expect(is).toBe(true)
  })
})
