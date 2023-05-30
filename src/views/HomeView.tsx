import { defineComponent } from 'vue'
import { container } from '../styles/app.css'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => <p class={container}>hell world</p>
  }
})
