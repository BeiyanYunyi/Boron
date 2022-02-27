import MarkdownIt from 'markdown-it';
import PanguPlugin from 'markdown-it-pangu';
import matter from 'gray-matter';
import IMdMeta from '../../types/IMdMeta';

const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: true,
  langPrefix: '',
});

md.use(PanguPlugin);

export const getData = (mdStr: string) => {
  const { content, data } = matter(mdStr) as unknown as { content: string; data: IMdMeta };
  return {
    ...data,
    description: data.description || `${content.replaceAll('<!--more-->', '').substring(0, 100)}……`,
  };
};

const renderMd = (mdStr: string) => {
  const result = matter(mdStr);
  const htmlStr = md.render(result.content);
  return {
    htmlStr,
    data: result.data as IMdMeta,
  };
};

export default renderMd;
