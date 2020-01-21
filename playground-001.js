import { map, lensProp, set, pipe } from 'ramda'

const thing = 'https://res.cloudinary.com/dscfugb4z/video/upload/v1579643331/Static/beyond-compassion/event-2019-001_ej8u8j.mp4'

function computedMediaItems (mediaItems, selectedCategory) {
  const ret = !selectedCategory
    ? mediaItems
    : mediaItems.filter(p => p.categories.includes(selectedCategory))

  const fileLens = lensProp('file')
  const videoLens = lensProp('video')

  return map(
    (mediaItem) => {
      if (mediaItem.file.match(/\.[0-9a-z]+$/i)[0] === '.mp4') {
        return pipe(
          set(
            fileLens,
            // eslint-disable-next-line no-useless-escape
            // `${mediaItem.file.match(/([^\/]+)(?=\.\w+$)/)[0]}.jpg`
            `${mediaItem.file.replace('.mp4', '.jpg')}`
          ),
          set(
            videoLens,
            mediaItem.file
          )
        )(mediaItem)
      } else {
        return mediaItem
      }
    },
    ret
  )
}

const testMediaItems = [{ 'eventName': '2018 holiday celebration', 'file': 'https://res.cloudinary.com/dscfugb4z/video/upload/v1579643331/Static/beyond-compassion/event-2019-001_ej8u8j.mp4', 'categories': [1] }, { 'eventName': '2018 holiday celebration', 'file': 'https://res.cloudinary.com/dscfugb4z/image/upload/v1579644278/Static/beyond-compassion/event-2018-004_rbd7ye.jpg', 'categories': [1] }, { 'eventName': '2018 holiday celebration', 'file': 'https://res.cloudinary.com/dscfugb4z/image/upload/v1579644278/Static/beyond-compassion/event-2018-004_rbd7ye.jpg', 'categories': [1] }, { 'eventName': '2018 holiday celebration', 'file': 'https://res.cloudinary.com/dscfugb4z/image/upload/v1579644278/Static/beyond-compassion/event-2018-002_vx2g7p.jpg', 'categories': [1] }, { 'eventName': '2018 holiday celebration', 'file': 'https://res.cloudinary.com/dscfugb4z/image/upload/v1579644278/Static/beyond-compassion/event-2018-006_mcn2hh.jpg', 'categories': [1] }, { 'eventName': '2018 holiday celebration', 'file': 'https://res.cloudinary.com/dscfugb4z/image/upload/v1579644278/Static/beyond-compassion/event-2018-003_grrgqu.jpg', 'categories': [1] }]

computedMediaItems(testMediaItems, null) // ?
