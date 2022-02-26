import fs from 'fs/promises';
import path from 'path';
import { PageContext } from '../../renderer/types';
import listMd from '../../renderer/utils/listMd';
import pathUtil from '../../renderer/utils/pathUtil';
import renderMd from '../../renderer/utils/renderMd';

export const onBeforeRender = async (pageContext: PageContext) => {
  const buf = await fs.readFile(
    path.resolve(pathUtil.mdPath, `${pageContext.routeParams!.postName}.md`),
  );
  const res = buf.toString();
  const { htmlStr, data } = renderMd(res);
  const pageProps = { htmlStr, data };
  return { pageContext: { pageProps, documentProps: { title: `${data.title} | 黎想的博客` } } };
};

export const prerender = async () => {
  const mds = await listMd();
  return mds.map((md) => `/posts/${encodeURIComponent(md.name)}`);
};
