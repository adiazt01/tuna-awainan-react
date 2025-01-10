import ReactDOM from 'react-dom/client'
import "./index.css"
import { Index } from '.'

const rootElement = document.getElementById('app')!

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<Index />)
}
