import { PageContext } from '../../renderer/types';
import listMd from '../../renderer/utils/listMd';

export const onBeforeRender = async (pageContext: PageContext) => {
  const mdList = await listMd();
  const pageProps = { mdList };
  return { pageContext: { pageProps, documentProps: { title: '黎想的博客' } } };
};
