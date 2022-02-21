import { MediaFilesNotFoundException } from '../exceptions'

import {
  mediaFilesDurationInSeconds,
  mediaFilesDurationInMinutes,
} from './media-duration'

describe('media-duration', () => {
  test('duration in seconds', async () => {
    const localeMediaFilePath = './tmp/media/downloads/video-landscape.mp4'

    const duration = await mediaFilesDurationInSeconds([
      localeMediaFilePath,
      localeMediaFilePath,
      localeMediaFilePath,
    ])

    expect(duration).toBe(77.898)
  })

  test('duration in minutes', async () => {
    const localeMediaFilePath = './tmp/media/downloads/video-landscape.mp4'

    const duration = await mediaFilesDurationInMinutes([
      localeMediaFilePath,
      localeMediaFilePath,
      localeMediaFilePath,
    ])

    expect(duration).toBe(1.2983)
  })

  test('no video files provided', async () => {
    await expect(mediaFilesDurationInMinutes([])).rejects.toThrow(
      MediaFilesNotFoundException,
    )
  })
})
