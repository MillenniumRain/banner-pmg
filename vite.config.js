import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';
import packageJson from './package.json';
import path from 'path';

export default defineConfig({
	server: {
		port: 8085,
		// cors: true,
		// https: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
	plugins: [
		viteSingleFile({ removeViteModuleLoader: true }),
		{
			name: 'add-version-banner',
			transformIndexHtml(html) {
				const versionString = `<!--\n * ${packageJson.name} v${packageJson.version}\n-->\n`;
				return versionString + html;
			},
		},
	],
});
