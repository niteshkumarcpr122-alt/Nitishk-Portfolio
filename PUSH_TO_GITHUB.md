# Push to GitHub - Quick Instructions

## Step 1: Create a GitHub Repository
1. Go to https://github.com/new
2. Name your repository (e.g., `portfolio`, `nextjs-portfolio`)
3. Choose Public or Private
4. **DO NOT** initialize with README, .gitignore, or license
5. Click "Create repository"

## Step 2: Add GitHub Remote and Push

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**OR if you prefer SSH:**
```bash
git remote add origin git@github.com:YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name.

## Already have a repository?
Just share the repository URL and I can add it and push for you!

