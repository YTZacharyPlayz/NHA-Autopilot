// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// <https://astro.build/config>
export default defineConfig({
<<<<<<< HEAD
	site: 'https://ytzacharyplayz.github.io/NHA-Autopilot',
	base: 'NHA-Autopilot',
    integrations: [
        starlight({
            title: 'My Docs',
            social: {
                github: '<https://github.com/YTZacharyPlayz/NHA-Autopilot',>
            },
            sidebar: [
                {
                    label: 'Guides',
                    items: [
                        // Each item here is one entry in the navigation menu.
                        { label: 'Example Guide', slug: 'guides/example' },
                    ],
                },
                {
                    label: 'Reference',
                    autogenerate: { directory: 'reference' },
                },
            ],
        }),
    ],
=======
	site: 'https://ytzacharyplayz.github.io/NHA-Autopilot',
	base: 'NHA-Autopilot',
	integrations: [
		starlight({
			title: 'My Docs',
			social: {
				github: 'https://github.com/YTZacharyPlayz/NHA-Autopilot',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
>>>>>>> parent of 0a85a17 (Update astro.config.mjs)
});
