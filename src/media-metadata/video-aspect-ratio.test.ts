import {
  isVideoMetadataLandscape,
  isVideoMetadataPortrait,
  isVideoMetadataSquare,
  videoAspectRatio,
  isVideoMetadataRatio_9_16,
  isVideoMetadataRatio_4_5,
  isVideoMetadataRatio_16_9,
} from './video-aspect-ratio'

describe('video-aspect-ratio', () => {
  test('get video width height', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-landscape.mp4'

    const metadata = await videoAspectRatio(localeVideoFilePath)

    expect(metadata).not.toBeNull()
    expect(metadata).not.toBeUndefined()
  })

  test('video is Landscape', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-landscape.mp4'

    const is = await isVideoMetadataLandscape(localeVideoFilePath)

    expect(is).toBe(true)
  })

  test('video is not Landscape', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-story.mp4'

    const is = await isVideoMetadataLandscape(localeVideoFilePath)

    expect(is).toBe(false)
  })

  // eslint-disable-next-line jest/no-disabled-tests
  test.skip('video is Portrait', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-portrait.mp4'

    const is = await isVideoMetadataPortrait(localeVideoFilePath)

    expect(is).toBe(true)
  })

  test('video is not Portrait', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-square.mp4'

    const is = await isVideoMetadataPortrait(localeVideoFilePath)

    expect(is).toBe(false)
  })

  test('video is Square', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-square.mp4'

    const is = await isVideoMetadataSquare(localeVideoFilePath)

    expect(is).toBe(true)
  })

  test('video is not Square', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-story.mp4'

    const is = await isVideoMetadataSquare(localeVideoFilePath)

    expect(is).toBe(false)
  })

  test('video is Ratio 16:9', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-landscape.mp4'

    const is = await isVideoMetadataRatio_16_9(localeVideoFilePath)

    expect(is).toBe(true)
  })

  test('video is not Ratio 16:9', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-story.mp4'

    const is = await isVideoMetadataRatio_16_9(localeVideoFilePath)

    expect(is).toBe(false)
  })

  test('video is Ratio 9:16', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-story.mp4'

    const is = await isVideoMetadataRatio_9_16(localeVideoFilePath)

    expect(is).toBe(true)
  })

  test('video is not Ratio 9:16', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-portrait.mp4'

    const is = await isVideoMetadataRatio_9_16(localeVideoFilePath)

    expect(is).toBe(false)
  })

  test('video is Ratio 4:5', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-portrait.mp4'

    const is = await isVideoMetadataRatio_4_5(localeVideoFilePath)

    expect(is).toBe(true)
  })

  test('video is not Ratio 4:5', async () => {
    const localeVideoFilePath = './tmp/media/downloads/video-story.mp4'

    const is = await isVideoMetadataRatio_4_5(localeVideoFilePath)

    expect(is).toBe(false)
  })
})
