import * as components from './components'
import type { App } from 'vue'

function install(app: App) {
  for (const key in components)
    // @ts-expect-error Ignore "element has 'any' type" type error.
    app.component(key, components[key])
}

export default { install }

export * from './components'
