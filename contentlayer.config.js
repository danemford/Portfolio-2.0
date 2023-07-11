import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeAutoLinkHeadings from 'rehype-autolink-headings'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

/** @type {import('contentlayer/source-files').ComputedFields} */
const ComputedFields = {
    slug: {
        type: 'string',
        resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
    slugAsParams : {
        type: 'string',
        resolve: (doc) => doc._raw.flattenedPath.split('/').slice(1).join('/'),
    },
}

export const Article = defineDocumentType(() => ({
    name: 'Article',
    filePathPattern: `**/*.mdx`,
    contentType: 'mdx',
    fields: {
        title: {
            type: 'string',
            required: true,
        },
        description: {
            type: 'string',
        },
        published: {
            type: 'boolean',
            default: true,
        },
    },
    computedFields,
}))

export default makeSource({
    contentDirPath: 'articles',
    documentTypes: [Article],
    mdx: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
            rehypeSlug,
            [
                rehypePrettyCode,
                {
                    theme: 'github-dark',
                    onVisitLine(node) {
                        //prevent lines from collapsing in `display:grid` mode, and allow empty
                        //lines to be copy/pasted
                        if (node.children.length === 0) {
                            node.children = [{ type: 'text', value: ' ' }]
                        }
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className.push('line--highlighted')
                    },
                    onVisitHighlightedLine(node) {
                        node.properties.className = ['word--highlighted']
                    },
                },
            ],
            [
                rehypeAutoLinkHeadings,
                {
                    properties: {
                        className: ['subheading-anchor'],
                        ariaLabel: 'Link to section',
                    },
                },
            ],
        ],
    },
})