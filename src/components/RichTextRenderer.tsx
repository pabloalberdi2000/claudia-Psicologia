'use client'

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, MARKS } from '@contentful/rich-text-types'
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
        <code className="bg-gray-100 px-2 py-1 rounded font-mono text-sm">
          {text}
        </code>
      ),
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node: any, children: ReactNode) => (
        <p className="mb-4 text-base leading-7 text-primary">{children}</p>
      ),
      [BLOCKS.HEADING_2]: (_node: any, children: ReactNode) => (
        <h2 className="text-2xl font-semibold text-primary mt-8 mb-4 pb-2 border-b-2 border-secondary">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_node: any, children: ReactNode) => (
        <h3 className="text-xl font-semibold text-primary mt-6 mb-3">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (_node: any, children: ReactNode) => (
        <h4 className="text-lg font-semibold text-primary mt-5 mb-2">
          {children}
        </h4>
      ),
      [BLOCKS.UL_LIST]: (_node: any, children: ReactNode) => (
        <ul className="list-disc list-inside mb-4 ml-2 space-y-2">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node: any, children: ReactNode) => (
        <ol className="list-decimal list-inside mb-4 ml-2 space-y-2">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node: any, children: ReactNode) => (
        <li className="text-primary">{children}</li>
      ),
      [BLOCKS.QUOTE]: (_node: any, children: ReactNode) => (
        <blockquote className="border-l-4 border-secondary pl-4 italic text-primary my-4 bg-surface-container py-3">
          {children}
        </blockquote>
      ),
    },
  }

  return <div className="prose prose-sm max-w-none">
    {documentToReactComponents(document, options)}
  </div>
}

export default RichTextRenderer
