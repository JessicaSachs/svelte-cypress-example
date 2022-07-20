import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import Unocss from 'unocss/vite'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    Unocss({
      variants: [
        // hocus:
        (matcher) => {
          if (!matcher.startsWith('hocus:'))
            return matcher
          return {
            // slice `hover:` prefix and passed to the next variants and rules
            matcher: matcher.slice(6),
            selector: s => `${s}:hover, ${s}:focus`,
          }
        }
      ],
    })
  ]
})
