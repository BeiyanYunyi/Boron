import { defineComponent, h } from 'vue';
import { NH1, NH2, NH3, NH4, NH5, NH6, NBlockquote, NP, NText, NScrollbar, NA } from 'naive-ui';
import TextSlot from '../components/TextSlot.vue';

const render: (nodeList: Node) => any = (nodeList) => {
  //@ts-ignore
  if (nodeList.nodeName === '#text') return h(TextSlot, null, () => nodeList.nodeValue);
  const childs = () => Array.from(nodeList.childNodes).map((node) => render(node));
  switch (nodeList.nodeName) {
    case 'H1':
      return h(NH1, null, childs);
    case 'H2':
      return h(NH2, null, childs);
    case 'H3':
      return h(NH3, null, childs);
    case 'H4':
      return h(NH4, null, childs);
    case 'H5':
      return h(NH5, null, childs);
    case 'H6':
      return h(NH6, null, childs);
    case 'P':
      return h(NP, null, childs);
    case 'BLOCKQUOTE':
      return h(NBlockquote, null, childs);
    case 'PRE':
      return h(NScrollbar, { xScrollable: true, style: { maxWidth: '90vw' } }, () =>
        h('pre', {
          innerHTML: (nodeList as HTMLPreElement).innerHTML,
        }),
      );
    case 'A':
      return h(
        NA,
        { href: (nodeList as HTMLAnchorElement).href },
        () => (nodeList as HTMLAnchorElement).innerText,
      );
    case 'OL':
      return h('ol', { innerHTML: (nodeList as Element).innerHTML }, childs);
    case 'UL':
      return h('ul', { innerHTML: (nodeList as Element).innerHTML }, childs);
    case 'BR':
      return h('br', null, childs);
    case 'CODE':
      return h('code', null, (nodeList as any).innerText);
    default:
      console.log(nodeList);
      return Array.from(nodeList.childNodes).map((node) => render(node));
  }
};

const parseHtml = (htmlStr: string) => {
  if (!htmlStr) return null;
  const parser = new DOMParser();
  const dom = parser.parseFromString(htmlStr, 'text/html');
  const renderedChilds = Array.from(dom.childNodes).map((node) => render(node));
  const ret = h(
    'div',
    {
      style: {
        marginLeft: '0.5rem',
        marginRight: '0.5rem',
      },
    },
    renderedChilds,
  );
  console.log(ret);
  return ret;
};

const PPPPPP = defineComponent({
  props: { htmlStr: String },
  setup() {},
  render() {
    return parseHtml(this.$props.htmlStr!) || h('div');
  },
});

export default PPPPPP;
