import { defineConfig, type DefaultTheme } from 'vitepress';
import vueDevTools from 'vite-plugin-vue-devtools';

import _manifest from '../docs/paths.json' with { type: 'json' };

const manifest = _manifest as Manifest;

interface Manifest {
  Reference: ManifestEntry[];
  Catalog: ManifestEntry[];
}

interface ManifestEntry {
  Text: string;
  Link: string | null;
  Collapsed: boolean;
  Kind: string;
  IdentifierLabel: string | null;
  IdentifierValue: string | null;
  Items: ManifestEntry[];
}

function entryToSidebarItem(entry: ManifestEntry): DefaultTheme.SidebarItem {
  return {
    text: entry.Text + (entry.IdentifierValue ? ` (${entry.IdentifierValue})` : ''),
    link: entry.Link ?? undefined,
    collapsed: entry.Collapsed,
    items: entry.Items.map(entryToSidebarItem),
  };
}

export default defineConfig({
  srcDir: 'docs',
  title: 'SE1 Game Data',
  description: 'Shadow Empire - Game Data Explorer',
  base: '/SE1GameData/',
  cleanUrls: true,
  lastUpdated: true,
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
      { text: 'Reference', link: '/reference/root/' },
      { text: 'Catalog', link: '/catalog/libraries/' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: 'Introduction',
          items: [
            { text: 'SE1 Game Data', link: '/guide/what-is-se1-game-data' },
            { text: 'Shadow Empire', link: '/guide/shadow-empire' },
            { text: 'Modding', link: '/guide/modding' },
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
          items: manifest.Reference.find((entry) => entry.Text === 'Root')?.Items.map(entryToSidebarItem) ?? [],
        },
        {
          text: 'Libraries',
          link: '/reference/libraries',
          items: manifest.Reference.find((entry) => entry.Text === 'Libraries')?.Items.map(entryToSidebarItem) ?? [],
        },
      ],
      '/catalog/': [
        {
          text: 'Catalog',
          link: '/catalog/libraries/',
          items: manifest.Catalog.map((entry) => entryToSidebarItem(entry)),
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
