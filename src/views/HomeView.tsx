import { defineComponent } from 'vue'
import { myHeader, themeClass, label, secondary } from '../styles/app.css'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <>
        <header class={myHeader}>my header</header>
        <div class={themeClass}>
          <span class={label}>my label</span>
        </div>
        <button class={secondary}>button</button>
      </>
    )
  }
})
