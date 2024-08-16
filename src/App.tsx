import { useState, useEffect } from 'react'
import { remark } from 'remark'
import remarkHTML from 'remark-html'
import './App.css'

function App() {
  const [markdown, setMarkdown] = useState('')
  const [html, setHTML] = useState('')

  function handleHTML() {
    const html = remark().use(remarkHTML).processSync(markdown).toString()
    setHTML(html)
  }

  useEffect(() => {
    handleHTML()
  }, [markdown])

  return (
    <div className="container">
      <section>
        <header>
          <h1>Markdown</h1>
        </header>

        <textarea onChange={event => setMarkdown(event.target.value)} />
      </section>
      <section>
        <header>
          <h1>HTML</h1>
        </header>

        <div dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </div>
  )
}

export default App
