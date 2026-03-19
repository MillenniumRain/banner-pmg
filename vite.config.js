import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import packageJson from './package.json';

export default defineConfig({
	plugins: [
		viteSingleFile({ removeViteModuleLoader: true }),
		{
			name: 'add-version-banner',
			transformIndexHtml(html) {
				return `<!--\n * ${packageJson.name} v${packageJson.version}\n-->\n` + html;
			},
		},
	],
});
