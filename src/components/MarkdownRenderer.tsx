'use client'

import React from 'react'

interface MarkdownRendererProps {
  content: string
}

/**
 * Renderiza markdown plano como HTML
 * Usado para contenido de defaultBlogPosts que está en formato markdown
 */
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Convertir markdown a elementos HTML básicos
  const parseMarkdown = (markdown: string): React.ReactNode[] => {
    const lines = markdown.split('\n')
    const elements: React.ReactNode[] = []
    let listItems: string[] = []
    let inList = false
    let listType: 'unordered' | 'ordered' = 'unordered'

    const flushList = (index: number) => {
      if (listItems.length > 0) {
        if (listType === 'unordered') {
          elements.push(
            <ul key={`ul-${index}`} className="list-disc list-inside my-4">
              {listItems.map((item, i) => (
                <li key={`li-${i}`} className="text-on-surface">
                  {item}
                </li>
              ))}
            </ul>
          )
        } else {
          elements.push(
            <ol key={`ol-${index}`} className="list-decimal list-inside my-4">
              {listItems.map((item, i) => (
                <li key={`li-${i}`} className="text-on-surface">
                  {item}
                </li>
              ))}
            </ol>
          )
        }
        listItems = []
        inList = false
      }
    }

    lines.forEach((line, index) => {
      const trimmed = line.trim()

      // Heading 1
      if (trimmed.startsWith('# ')) {
        flushList(index)
        elements.push(
          <h1 key={index} className="text-4xl font-bold text-primary my-6">
            {trimmed.substring(2)}
          </h1>
        )
      }
      // Heading 2
      else if (trimmed.startsWith('## ')) {
        flushList(index)
        elements.push(
          <h2 key={index} className="text-3xl font-bold text-primary my-5">
            {trimmed.substring(3)}
          </h2>
        )
      }
      // Heading 3
      else if (trimmed.startsWith('### ')) {
        flushList(index)
        elements.push(
          <h3 key={index} className="text-2xl font-bold text-primary my-4">
            {trimmed.substring(4)}
          </h3>
        )
      }
      // Unordered List
      else if (trimmed.startsWith('- ')) {
        if (!inList || listType !== 'unordered') {
          flushList(index)
          inList = true
          listType = 'unordered'
        }
        listItems.push(trimmed.substring(2))
      }
      // Ordered List
      else if (trimmed.match(/^\d+\. /)) {
        if (!inList || listType !== 'ordered') {
          flushList(index)
          inList = true
          listType = 'ordered'
        }
        listItems.push(trimmed.replace(/^\d+\. /, ''))
      }
      // Blockquote
      else if (trimmed.startsWith('> ')) {
        flushList(index)
        elements.push(
          <blockquote
            key={index}
            className="border-l-4 border-secondary pl-4 italic my-4 text-on-surface-variant"
          >
            {trimmed.substring(2)}
          </blockquote>
        )
      }
      // Horizontal Rule
      else if (trimmed === '---' || trimmed === '***') {
        flushList(index)
        elements.push(<hr key={index} className="my-6 border-outline-variant" />)
      }
      // Paragraph (regular text)
      else if (trimmed.length > 0) {
        flushList(index)
        // Parse inline formatting (bold, italic, code)
        const formatted = parseInlineMarkdown(trimmed)
        elements.push(
          <p key={index} className="text-on-surface my-3 leading-relaxed">
            {formatted}
          </p>
        )
      }
      // Empty lines
      else if (trimmed.length === 0 && inList) {
        flushList(index)
      }
    })

    flushList(lines.length)
    return elements
  }

  return <div className="prose-content">{parseMarkdown(content)}</div>
}

/**
 * Parse inline markdown formatting (bold, italic, code)
 */
function parseInlineMarkdown(text: string): React.ReactNode[] {
  const elements: React.ReactNode[] = []
  let lastIndex = 0

  // Regex para encontrar **bold**, *italic*, `code`
  const regex = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g
  let match

  while ((match = regex.exec(text)) !== null) {
    // Agregar texto antes del match
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index))
    }

    const matched = match[0]
    // Bold
    if (matched.startsWith('**')) {
      elements.push(
        <strong key={`bold-${match.index}`} className="font-semibold text-primary">
          {matched.substring(2, matched.length - 2)}
        </strong>
      )
    }
    // Italic
    else if (matched.startsWith('*')) {
      elements.push(
        <em key={`italic-${match.index}`} className="italic text-primary">
          {matched.substring(1, matched.length - 1)}
        </em>
      )
    }
    // Code
    else if (matched.startsWith('`')) {
      elements.push(
        <code
          key={`code-${match.index}`}
          className="bg-surface-container px-2 py-1 rounded font-mono text-sm text-on-surface"
        >
          {matched.substring(1, matched.length - 1)}
        </code>
      )
    }

    lastIndex = match.index + matched.length
  }

  // Agregar texto restante
  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex))
  }

  return elements.length > 0 ? elements : [text]
}

export default MarkdownRenderer
