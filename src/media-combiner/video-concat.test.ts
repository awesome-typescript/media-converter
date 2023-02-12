import fs from 'fs'

import { videoConcat } from './video-concat'

describe('video-concat', () => {
  test('Concat multiple files to one file', async () => {
    const localeVideoFilePath1 = './tmp/media/downloads/video-landscape.ts'
    const localeVideoFilePath2 = './tmp/media/downloads/video-landscape2.ts'

    const localeVideoFilePathOutput =
      './tmp/media/downloads/video-concat-temp1.mp4'

    await videoConcat(
      [localeVideoFilePath1, localeVideoFilePath2],
      localeVideoFilePathOutput,
    )

    const is = await fs.existsSync(localeVideoFilePathOutput)
    expect(is).toBe(true)
  })
})
