import { defineRoutes } from 'vitepress';
import { helper } from '../../../../.vitepress/DataHelper.ts';

export default defineRoutes({
  watch: ['../../../../data/*.json'],
  async paths() {
    return helper.data.tables.map((table) => {
      return {
        params: {
          library: table.libraryName ?? 'root',
          table: table.name,
        },
      };
    });
  },
});
