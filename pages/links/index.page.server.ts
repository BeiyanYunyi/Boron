import { PageContext } from '../../renderer/types';

export const onBeforeRender = async (pageContext: PageContext) => {
  return {
    pageContext: { documentProps: { title: '友链及他人文章收藏 | 黎想的博客' } },
  };
};
