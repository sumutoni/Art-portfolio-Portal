## Worktree & Branch Convention

Before starting any new feature or fix:
1. Create a worktree: `git worktree add ../{repo-name}-{feature-name} feature/{feature-name}`
2. Do all work inside that worktree
3. Never commit to main directly — wait for explicit approval

## Merging & Cleanup

Only merge to main after the user says something like "looks good", "merge it", or "ship it".
When approved:
1. Switch to main: `git checkout main`
2. Merge the branch: `git merge feature/{feature-name}`
3. Delete the worktree: `git worktree remove ../{repo-name}-{feature-name}`
4. Delete the branch: `git branch -d feature/{feature-name}`