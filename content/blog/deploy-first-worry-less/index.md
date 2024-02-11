# Deploy First, Worry Less: The Early Bird's Guide to Smooth Software Delivery

Starting with deployment and CI setup early on, even for personal side-projects (like my passion project: [EweserDB](https://github.com/eweser/eweser-db)), is a smart move. It simplifies the development process and uncovers potential issues early, ensuring your project is on solid footing right from the start.

## Continuous Integration: Setting Up from Day One

For my current rewrite of EweserDB, I'm adding an authentication server. The very first thing I did was to initiate the project with the Next.js builder and get it building on vercel on each commit. This early setup of continuous integration (CI) with GitHub Actions and Vercel ensured that the project was always in a deployable state, even in its early stages.

## Pain and Pitfalls of Late Deployment

In some of my previous projects, delaying deployment led to complex integration issues and time-consuming debugging. Oftentimes my project built on local but not in production. Because by that time the project was large and with many tests. Because the CI runs were slow, the debugging process took ages. Software development is all about getting quick feedback cycles to iterate on. Thats why debugging CI processes can be such a nightmare.

## Early Feedback on Performance

Deploying early on helps me catch and optimize performance bottlenecks that aren't apparent during local development. Conversely, sometimes a process is slow in development but fast in production.

## Navigating the Dev vs. Prod Environment Discrepancy

By deploying EweserDB early, I quickly identified environment-specific issues, such as configuration differences and the dreaded CORS errors, that only surfaced in production.

## Conclusion

Setting up CI and deployment early on in a project is a smart move. It ensures that the project is always in a deployable state, catches performance bottlenecks early, and helps identify environment-specific issues. This approach has saved me countless hours of debugging and has made the development process much smoother.

## Bonus Tip: Leveraging Free Deploys on Vercel with GitHub Actions

For projects under a GitHub organization, like EweserDB, you can still enjoy Vercel's free deploys by forking the project to your personal GitHub account. To keep the fork in sync with the main repository, set up a GitHub Action like the one found at [JacobCoro's eweser-db-deploy](https://github.com/jacobcoro/eweser-db-deploy/actions/workflows/sync-fork.yml) with a `sync-fork.yml` workflow. This ensures the forked version remains updated, allowing for continuous deployment via Vercel's free tier without extra costs for organization accounts.
