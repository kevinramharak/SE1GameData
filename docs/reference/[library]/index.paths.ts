import { defineRoutes } from 'vitepress';
import { helper } from '../../../.vitepress/DataHelper.ts';

export default defineRoutes({
  watch: ['../../../data/*.json'],
  async paths() {
    return [
      { params: { library: 'root' } },
      ...helper.data.libraries.map((library) => {
        return {
          params: {
            library: library.name,
            id: library.id.toString(),
          },
        };
      }),
    ];
  },
});
