# ============================================
# AUTOMATED VERCEL DEPLOYMENT SCRIPT
# This script does EVERYTHING automatically
# ============================================

Write-Host ""
Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Cyan
Write-Host "║   AUTOMATED VERCEL DEPLOYMENT         ║" -ForegroundColor Cyan
Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Cyan
Write-Host ""

# Step 1: Verify we're in the right directory
Write-Host "[1/5] 📁 Verifying project structure..." -ForegroundColor Yellow
if (-not (Test-Path "package.json")) {
    Write-Host "❌ ERROR: package.json not found!" -ForegroundColor Red
    Write-Host "Please run this script from the project root directory." -ForegroundColor Red
    exit 1
}
if (-not (Test-Path "vercel.json")) {
    Write-Host "❌ ERROR: vercel.json not found!" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Project structure verified" -ForegroundColor Green
Write-Host ""

# Step 2: Build the project
Write-Host "[2/5] 🔨 Building project for production..." -ForegroundColor Yellow
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed! Fix errors and try again." -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build successful!" -ForegroundColor Green
Write-Host ""

# Step 3: Verify build output
Write-Host "[3/5] 📦 Verifying build output..." -ForegroundColor Yellow
if (-not (Test-Path "dist/public/index.html")) {
    Write-Host "❌ ERROR: Build output not found in dist/public/" -ForegroundColor Red
    exit 1
}
Write-Host "✅ Build output verified" -ForegroundColor Green
Write-Host ""

# Step 4: Check git status
Write-Host "[4/5] 📝 Checking git status..." -ForegroundColor Yellow
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "⚠️  Uncommitted changes detected. Committing..." -ForegroundColor Yellow
    git add -A
    git commit -m "Auto-commit before Vercel deployment"
    git push origin main
    Write-Host "✅ Changes committed and pushed" -ForegroundColor Green
} else {
    Write-Host "✅ Git repository is clean" -ForegroundColor Green
}
Write-Host ""

# Step 5: Deploy to Vercel
Write-Host "[5/5] 🚀 Deploying to Vercel..." -ForegroundColor Yellow
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "  If you're not logged in, you'll be prompted" -ForegroundColor Cyan
Write-Host "  to authenticate. Follow the instructions." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Deploy to Vercel
vercel --prod --yes
$deployExitCode = $LASTEXITCODE

if ($deployExitCode -eq 0) {
    Write-Host ""
    Write-Host "╔════════════════════════════════════════╗" -ForegroundColor Green
    Write-Host "║   ✅ DEPLOYMENT SUCCESSFUL!            ║" -ForegroundColor Green
    Write-Host "╚════════════════════════════════════════╝" -ForegroundColor Green
    Write-Host ""
    Write-Host "Your site is now live on Vercel! 🎉" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "⚠️  Deployment needs authentication." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Run this command to login:" -ForegroundColor Cyan
    Write-Host "  vercel login" -ForegroundColor White
    Write-Host ""
    Write-Host "Then run this script again, or:" -ForegroundColor Cyan
    Write-Host "  vercel --prod" -ForegroundColor White
}

Write-Host ""

