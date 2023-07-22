import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>YouTube Links</h1>
    <ul id="youtube-links"></ul>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
