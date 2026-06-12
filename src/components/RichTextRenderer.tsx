'use client'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS, INLINES } from '@contentful/rich-text-types'
import type { Document } from '@contentful/rich-text-types'
import React, { ReactNode } from 'react'

interface RichTextRendererProps {
  document: Document
}

const RichTextRenderer: React.FC<RichTextRendererProps> = ({ document }) => {
  const options = {
    renderMark: {
      [MARKS.BOLD]: (text: ReactNode) => (
        <strong className="font-semibold text-primary">{text}</strong>
      ),
      [MARKS.ITALIC]: (text: ReactNode) => (
        <em className="italic text-primary">{text}</em>
      ),
      [MARKS.UNDERLINE]: (text: ReactNode) => (
        <u className="underline">{text}</u>
      ),
      [MARKS.CODE]: (text: ReactNode) => (
        <code className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded font-mono text-sm">
          {text}
        </code>
      ),
      [MARKS.SUPERSCRIPT]: (text: ReactNode) => (
        <sup className="text-sm">{text}</sup>
      ),
      [MARKS.SUBSCRIPT]: (text: ReactNode) => (
        <sub className="text-sm">{text}</sub>
      ),
    },
    renderNode: {
      // Headings
      [BLOCKS.HEADING_1]: (_node: any, children: ReactNode) => (
        <h1 className="text-4xl font-bold text-primary mt-10 mb-6 leading-tight">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (_node: any, children: ReactNode) => (
        <h2 className="text-3xl font-bold text-primary mt-8 mb-4 pb-2 border-b-2 border-secondary">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_node: any, children: ReactNode) => (
        <h3 className="text-2xl font-semibold text-primary mt-6 mb-3">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (_node: any, children: ReactNode) => (
        <h4 className="text-xl font-semibold text-primary mt-5 mb-2">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (_node: any, children: ReactNode) => (
        <h5 className="text-lg font-semibold text-primary mt-4 mb-2">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (_node: any, children: ReactNode) => (
        <h6 className="text-base font-semibold text-primary mt-3 mb-2">
          {children}
        </h6>
      ),
      // Paragraphs
      [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => (
        <p className="mb-4 text-base leading-7 text-primary">
          {children}
        </p>
      ),
      // Lists
      [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => (
        <ul className="list-disc list-outside mb-4 ml-6 space-y-2 text-primary">
          {children}
        </ul>
      ),
      [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => (
        <ol className="list-decimal list-outside mb-4 ml-6 space-y-2 text-primary">
          {children}
        </ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: any, children: ReactNode) => (
        <li className="text-primary leading-7">
          {children}
        </li>
      ),
      // Blockquote
      [BLOCKS.QUOTE]: (_node: any, children: ReactNode) => (
        <blockquote className="border-l-4 border-secondary pl-6 italic text-primary my-6 bg-surface-container py-4 rounded">
          {children}
        </blockquote>
      ),
      // Horizontal Rule
      [BLOCKS.HR]: () => (
        <hr className="my-8 border-outline-variant" />
      ),
      // Code Block
      [BLOCKS.CODE]: (_node: any, children: ReactNode) => (
        <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4">
          <code className="font-mono text-sm">
            {children}
          </code>
        </pre>
      ),
      // Table (si Contentful lo envía)
      [BLOCKS.TABLE]: (_node: any, children: ReactNode) => (
        <table className="w-full border-collapse my-4">
          {children}
        </table>
      ),
      [BLOCKS.TABLE_ROW]: (_node: any, children: ReactNode) => (
        <tr className="border-b border-outline-variant">
          {children}
        </tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (_node: any, children: ReactNode) => (
        <th className="text-left p-3 bg-surface-container font-semibold text-primary border-r border-outline-variant">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_CELL]: (_node: any, children: ReactNode) => (
        <td className="p-3 text-primary border-r border-outline-variant">
          {children}
        </td>
      ),
      // Links (inline)
      [INLINES.HYPERLINK]: (node: any, children: ReactNode) => (
        <a
          href={node.data.uri}
          className="text-secondary hover:text-secondary-dark underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  }

  return (
    <div className="space-y-4">
      {documentToReactComponents(document, options)}
    </div>
  )
}

export default RichTextRenderer
