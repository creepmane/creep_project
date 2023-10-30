import {join, dirname} from 'path'
import { defineNuxtModule } from '@nuxt/kit'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineNuxtModule({
  // name: 'nuxt-ui',
  // configKey: 'nuxtUi',
  hooks: {
    'components:dirs' (dirs) {
      dirs.push({
        path: join(__dirname, 'components'),
        prefix: 'creep-ui'
      })
    }
  }
  // setup (options, nuxt) {
  //   // Add plugin
  //   this.addPlugin({
  //     src: join(__dirname, 'plugin.js'),
  //     fileName: 'nuxt-ui.js',
  //     options
  //   })
  // }
})
