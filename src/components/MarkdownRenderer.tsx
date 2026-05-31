import React from 'react'

export default function MarkdownRenderer({ content }: { content: string }) {
  // Procesa el markdown manualmente para renderizar correctamente
  const lines = content.split('\n')
  const elements: React.ReactNode[] = []
  let i = 0
  let elementKey = 0

  while (i < lines.length) {
    const line = lines[i]

    // Headings
    if (line.startsWith('# ')) {
      elements.push(
        <h1 key={elementKey++} className="font-display-lg text-display-lg text-primary leading-tight mt-8 mb-4">
          {line.replace('# ', '')}
        </h1>
      )
      i++
    } else if (line.startsWith('## ')) {
      elements.push(
        <h2 key={elementKey++} className="font-headline-md text-headline-md text-primary leading-tight mt-6 mb-3">
          {line.replace('## ', '')}
        </h2>
      )
      i++
    } else if (line.startsWith('### ')) {
      elements.push(
        <h3 key={elementKey++} className="font-headline-sm text-headline-sm text-primary leading-tight mt-4 mb-2">
          {line.replace('### ', '')}
        </h3>
      )
      i++
    }
    // List items
    else if (line.startsWith('- ')) {
      const listItems: React.ReactElement[] = []
      let listKey = 0
      while (i < lines.length && lines[i].startsWith('- ')) {
        const itemText = lines[i].replace('- ', '')
        const renderedItemText = renderInlineMarkdown(itemText)
        listItems.push(
          <li key={listKey++} className="text-on-surface-variant font-body-md mb-2">
            {renderedItemText}
          </li>
        )
        i++
      }
      elements.push(
        <ul key={elementKey++} className="list-disc ml-6 mb-4">
          {listItems}
        </ul>
      )
    }
    // Paragraphs (text that's not empty and not a heading/list)
    else if (line.trim() && !line.startsWith('#')) {
      const renderedText = renderInlineMarkdown(line)
      elements.push(
        <p key={elementKey++} className="text-on-surface-variant font-body-md leading-relaxed mb-4">
          {renderedText}
        </p>
      )
      i++
    }
    // Empty lines
    else {
      i++
    }
  }

  return <div className="space-y-2">{elements}</div>
}

// Helper function to render inline markdown (bold, italic, etc)
function renderInlineMarkdown(text: string): (string | React.ReactElement)[] | string {
  const boldRegex = /\*\*(.*?)\*\*/g
  const parts: (string | React.ReactElement)[] = []
  let lastIndex = 0
  let match: RegExpExecArray | null

  // Reiniciar el regex para que funcione correctamente
  boldRegex.lastIndex = 0

  while ((match = boldRegex.exec(text)) !== null) {
    // Agregar texto antes del match
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index))
    }
    // Agregar texto en negrita
    parts.push(
      <strong key={`bold-${match.index}`} className="font-bold text-primary">
        {match[1]}
      </strong>
    )
    lastIndex = match.index + match[0].length
  }

  // Agregar texto restante
  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex))
  }

  return parts.length > 0 ? parts : text
}
