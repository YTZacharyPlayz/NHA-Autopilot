// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// <https://astro.build/config>
export default defineConfig({
    site: 'https://ytzacharyplayz.github.io',
    base: '/NHA-Autopilot',
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
});
