# Vercel Deployment Script
# This script automates the deployment process

Write-Host "🚀 Starting Vercel Deployment..." -ForegroundColor Green
Write-Host ""

# Step 1: Verify build works
Write-Host "📦 Step 1: Building the project..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Please fix errors before deploying." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Step 2: Check git status
Write-Host "📝 Step 2: Checking git status..." -ForegroundColor Yellow
git status
Write-Host ""

# Step 3: Deploy to Vercel
Write-Host "🚀 Step 3: Deploying to Vercel..." -ForegroundColor Yellow
Write-Host "If you're not logged in, you'll be prompted to authenticate." -ForegroundColor Cyan
Write-Host ""

vercel --prod --yes

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "✅ Deployment successful!" -ForegroundColor Green
    Write-Host "Your site is now live on Vercel!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "⚠️  Deployment may need authentication." -ForegroundColor Yellow
    Write-Host "Run: vercel login" -ForegroundColor Cyan
    Write-Host "Then run: vercel --prod" -ForegroundColor Cyan
}

