import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  site: 'https://softroboter.docs.bennetr.me',
	integrations: [
		starlight({
			title: 'Softroboter',
      description: 'Documentation for the InLab Softroboter project',
      logo: {
        src: './public/favicon.svg'
      },
      favicon: 'favicon.svg',
			social: {
				github: 'https://github.com/bennetrr/softroboter-docs',
			}
		})
	]
});
