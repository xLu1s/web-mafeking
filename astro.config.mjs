import { defineConfig } from 'astro/config';

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '').split('/');
const isUserSite = repo?.toLowerCase().endsWith('.github.io');

const site = owner ? `https://${owner}.github.io` : 'https://mafeking265.org';
const base = repo && !isUserSite ? `/${repo}` : '/';

export default defineConfig({
  site,
  base,
});
