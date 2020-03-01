import tools from '../tools'

const toolsById = tools.reduce(function (acc, val) {
  acc[val.id] = val
  return acc
}, {})

export default function (id) {
  const app = toolsById[id]
  if (!app) return null
  app.head = {
    title: app.name + ' - Toolkit',
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
