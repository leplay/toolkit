import _ from 'lodash'
import tools from './tools'
const toolsById = _.keyBy(tools, 'id')

export default function (id) {
  const app = toolsById[id]
  if (!app) return null
  app.head = {
    title: app.name,
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: app.description
      }
    ]
  }
  return app
}
