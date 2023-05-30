import { defineComponent } from 'vue'
import { primary, themeClass, container, header } from '../styles/app.css'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <>
        <header class={header}>my header</header>
        <p class={themeClass}>
          hell world
          <button class={primary}>提交</button>
          <div class={container}></div>
        </p>
      </>
    )
  }
})
