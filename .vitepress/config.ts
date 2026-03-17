import { defineConfig, type DefaultTheme } from 'vitepress';
import vueDevTools from 'vite-plugin-vue-devtools';
import { helper, type DataHelper, type ILibrary } from './DataHelper';

const escape = (part: string) => part.replaceAll('#', '_');

const sidebar = new (class SidebarHelper {
  constructor(public readonly helper: DataHelper) {}

  libraries(): DefaultTheme.SidebarItem[] {
    return this.helper.data.libraries
      .toSorted((a, b) => a.id - b.id)
      .map((library) => {
        const link = `/reference/${escape(library.name)}/`;
        const hasTables = this.helper.hasTables(library);
        return {
          text: library.name,
          link,
          collapsed: true,
          items: [
            hasTables
              ? {
                  text: 'Data Tables',
                  collapsed: true,
                  link: `${link}data-tables/`,
                  items: this.tables(library),
                }
              : void 0,
          ].filter((value) => !!value),
        };
      });
  }

  root(): DefaultTheme.SidebarItem[] {
    return [
      {
        text: 'Data Tables',
        collapsed: true,
        link: `/reference/root/data-tables/`,
        items: this.tables(),
      },
    ];
  }

  tables(library?: ILibrary, rootName = 'root'): DefaultTheme.SidebarItem[] {
    return this.helper.data.tables
      .filter((table) => (library ? library.id == table.libraryId : typeof table.libraryId === 'undefined'))
      .toSorted((a, b) => a.id - b.id)
      .map((table) => {
        const link = `/reference/${escape(library?.name ?? rootName)}/data-tables/${escape(table.name)}`;
        return {
          text: table.name,
          link,
        };
      });
  }
})(helper);

export default defineConfig({
  srcDir: 'docs',
  title: 'SE1 Game Data',
  description: 'Shadow Empire - Game Data Explorer',
  cleanUrls: true,
  lastUpdated: true,
  rewrites: {
    'reference/:library/:table': 'reference/:library/data-tables/:table',
  },
  router: {
    // TODO: ?
    prefetchLinks: false,
  },
  vite: {
    plugins: [vueDevTools()],
  },
  themeConfig: {
    nav: [
      // TODO: add dropdown menus
      { text: 'Guide', link: '/guide/shadow-empire' },
      { text: 'Reference', link: '/reference/' },
      { text: 'Catalog', link: '/catalog/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Shadow Empire', link: '/guide/shadow-empire' },
            { text: 'Modding', link: '/guide/modding' },
            { text: 'SE1 Game Data', link: '/guide/what-is-se1-game-data' },
          ],
        },
        {
          text: 'Deep Dive',
          items: [{ text: 'SE1 File Format', link: '/guide/se1-file-format' }],
        },
      ],
      '/reference/': [
        {
          text: 'Root',
          link: '/reference/root',
          collapsed: false,
          items: sidebar.root(),
        },
        {
          text: 'Libraries',
          link: '/reference/libraries',
          items: sidebar.libraries(),
        },
      ],
      '/catalog/': [
        {
          text: 'Catalog',
          link: '/catalog/',
          items: [
            { text: 'Libraries', link: '/catalog/libraries' },
            { text: 'Data Tables', link: '/catalog/data-tables' },
          ],
        },
      ],
    },
    search: {
      provider: 'local',
      options: {
        detailedView: true,
      },
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/kevinramharak/SE1GameData' }],
  },
});
