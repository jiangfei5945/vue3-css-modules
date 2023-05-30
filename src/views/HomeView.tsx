import { defineComponent } from 'vue'
import { myHeader } from '../styles/app.css'

export default defineComponent({
  name: 'HomeView',
  setup() {
    return () => (
      <>
        <header class={myHeader}>my header</header>
      </>
    )
  }
})
