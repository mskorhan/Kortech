# Security & Branch Protection

## main branch protection

`main` is protected by a GitHub repository ruleset (`protect-main`):

- Changes must land via pull request (0 required approvals — solo owner).
- The `build` check (`.github/workflows/pr-checks.yml`: type-check, lint, build) must pass before merge.
- Force-push and branch deletion are blocked.
- Repo admins (the account owner) can bypass in an emergency; GitHub logs bypassed actions explicitly.

Normal workflow: branch → PR → `build` check → merge → `deploy.yml` deploys `main` to production (Bluehost).

`update-reviews.yml` (monthly Google reviews refresh) pushes to `automation/update-reviews` and opens a PR into `main` — it does not push to `main` directly and holds no bypass capability.

## Future hardening: Claude/GitHub privilege separation

Today, Claude Code operates through the repo owner's personal GitHub credentials. Since the ruleset's bypass actor is the repo-admin role, this means Claude technically has the same bypass capability as the owner, even though it's expected to rely on branch → PR → merge like anything else, with local `permissions.ask` prompts gating any deliberate use of the bypass.

If stronger, structural separation is wanted later: authenticate Claude through a dedicated, least-privileged GitHub App or service account/token that can create branches, commits, and pull requests, but is **not** a repo admin and is **not** on the ruleset's bypass list. The owner's personal account would remain the only actor able to bypass `protect-main`, making the separation a technical guarantee rather than a procedural one.

Not implemented — revisit only if this becomes necessary (e.g. broader collaborator access, more autonomous automation, or a desire to remove admin-level trust from day-to-day Claude usage).
