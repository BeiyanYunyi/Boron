import { createApp as vCreateApp } from 'vue';
import type { PageContextBuiltInClient } from 'vite-plugin-ssr/client';
import { getPage } from 'vite-plugin-ssr/client';
import { createApp } from '../../renderer/app';
import type { PageContext } from '../../renderer/types';
import PPPPPP from '../../renderer/utils/parseHtml';

hydrate();

async function hydrate() {
  // We do Server Routing, but we can also do Client Routing by using `useClientRouter()`
  // instead of `getPage()`, see https://vite-plugin-ssr.com/useClientRouter
  const pageContext = await getPage<PageContextBuiltInClient & PageContext>();
  const app = createApp(pageContext);
  app.mount('#app');
  const preview = vCreateApp(PPPPPP, { htmlStr: pageContext.pageProps?.htmlStr });
  preview.mount('#ssr-md-container');
}
