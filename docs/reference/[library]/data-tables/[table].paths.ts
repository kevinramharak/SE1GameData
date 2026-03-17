import { defineRoutes } from 'vitepress';
import { helper } from '../../../../.vitepress/DataHelper.ts';

const escape = (part: string) => part.replaceAll('#', '_');

export default defineRoutes({
  watch: ['../../../../data/*.json'],
  async paths() {
    return helper.data.tables.map((table) => {
      return {
        params: {
          library: table.libraryName ?? 'root',
          libraryId: table.libraryId?.toString() ?? '',
          table: escape(table.name),
          id: table.id.toString(),
        },
      };
    });
  },
});
