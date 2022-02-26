export type PageProps = { htmlStr?: string };
// The `pageContext` that are available in both on the server-side and browser-side
export type PageContext = {
  Page: any;
  url: string;
  urlPathname: string;
  pageProps?: PageProps;
  documentProps?: {
    title?: string;
    description?: string;
  };
  routeParams?: Record<string, string>;
};
