// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import remarkGfm from 'remark-gfm';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [
      remarkGfm,           // GitHub Flavored Markdown対応
      [remarkToc, { 
        heading: '目次',
        tight: true 
      }],
    ],
    rehypePlugins: [
      rehypeSlug,          // 見出しにIDを付与
      [rehypeAutolinkHeadings, {
        behavior: 'append',
        content: {
          type: 'text',
          value: ' 🔗'
        }
      }],
    ],
  },
});
