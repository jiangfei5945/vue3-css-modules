import { defineComponent } from 'vue'
import { container, secondary } from '../styles/app.css'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <p class={container}>
        hell world
        <button class={secondary}>提交</button>
      </p>
    )
  }
})
