import MarkdownIt from 'markdown-it';
import PanguPlugin from 'markdown-it-pangu';
import matter from 'gray-matter';
import hljs from 'highlight.js';
import IMdMeta from '../../types/IMdMeta';

const md = new MarkdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (e) {
        return '';
      }
    }
    return '';
  },
  html: true,
  linkify: true,
});

md.use(PanguPlugin);

export const getData = (mdStr: string) => matter(mdStr).data as IMdMeta;

const renderMd = (mdStr: string) => {
  const result = matter(mdStr);
  const htmlStr = md.render(result.content);
  return {
    htmlStr,
    data: result.data as IMdMeta,
  };
};

export default renderMd;
