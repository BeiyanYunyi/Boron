import { PageContext } from '../../renderer/types';

export default (pageContext: PageContext) => {
  if (pageContext.url.startsWith('/posts'))
    return {
      routeParams: { postName: decodeURIComponent(pageContext.url.replace('/posts/', '')) },
    };
  return false;
};
