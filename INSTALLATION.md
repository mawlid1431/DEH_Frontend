# Digital Empowerment Hub - Complete Installation Guide

A comprehensive A-Z guide for setting up the Digital Empowerment Hub project locally on your PC.

## Table of Contents
- [Prerequisites](#prerequisites)
- [System Requirements](#system-requirements)
- [Installation Steps](#installation-steps)
- [Project Structure](#project-structure)
- [Development Setup](#development-setup)
- [Environment Configuration](#environment-configuration)
- [Running the Application](#running-the-application)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Additional Features Setup](#additional-features-setup)
- [Contributing](#contributing)

---

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### 1. Node.js
- **Version Required**: Node.js 18.x or higher
- **Download**: [https://nodejs.org/](https://nodejs.org/)
- **Verification**: Run `node --version` in your terminal

### 2. Package Manager
Choose one of the following:
- **npm** (comes with Node.js) - Recommended
- **yarn** - Alternative package manager
- **pnpm** - Fast, disk space efficient package manager

### 3. Git
- **Download**: [https://git-scm.com/](https://git-scm.com/)
- **Verification**: Run `git --version` in your terminal

### 4. Code Editor (Recommended)
- **Visual Studio Code**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **Recommended Extensions**:
  - ES7+ React/Redux/React-Native snippets
  - Tailwind CSS IntelliSense
  - TypeScript and JavaScript Language Features
  - Prettier - Code formatter
  - Auto Rename Tag

---

## System Requirements

### Minimum Requirements
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 2GB free space
- **OS**: Windows 10/11, macOS 10.15+, or Linux (Ubuntu 18.04+)
- **Browser**: Chrome 90+, Firefox 88+, Safari 14+, or Edge 90+

### Recommended Specifications
- **RAM**: 16GB for optimal performance
- **Storage**: SSD with 5GB+ free space
- **CPU**: Multi-core processor (Intel i5/AMD Ryzen 5 or better)

---

## Installation Steps

### Step 1: Clone the Repository

```bash
# Clone the repository
git clone https://github.com/your-username/digital-empowerment-hub.git

# Navigate to the project directory
cd digital-empowerment-hub
```

### Step 2: Install Dependencies

Choose your preferred package manager:

#### Using npm (Recommended)
```bash
npm install
```

#### Using yarn
```bash
yarn install
```

#### Using pnpm
```bash
pnpm install
```

### Step 3: Verify Installation

Check if all dependencies are installed correctly:

```bash
# Check if node_modules folder exists
ls node_modules

# Verify package.json dependencies
npm list --depth=0
```

---

## Project Structure

Understanding the project structure will help you navigate and contribute effectively:

```
digital-empowerment-hub/
├── App.tsx                 # Main application component
├── package.json            # Project dependencies and scripts
├── package-lock.json       # Dependency lock file
├── INSTALLATION.md         # This file
├── Attributions.md         # Third-party attributions
├── components/             # React components
│   ├── About.tsx          # About section component
│   ├── Contact.tsx        # Contact form component
│   ├── Footer.tsx         # Footer component
│   ├── Header.tsx         # Navigation header
│   ├── Hero.tsx           # Hero section
│   ├── Impact.tsx         # Impact metrics component
│   ├── Innovation.tsx     # Innovation timeline
│   ├── LanguageToggle.tsx # Multi-language support
│   ├── PaymentIntegration.tsx # Payment processing
│   ├── Reviews.tsx        # User reviews section
│   ├── Roadmap.tsx       # Project roadmap
│   ├── SEOHead.tsx       # SEO meta tags
│   ├── Solutions.tsx     # Solutions showcase
│   ├── ThemeProvider.tsx # Dark/light mode provider
│   ├── figma/            # Figma-related components
│   │   └── ImageWithFallback.tsx
│   └── ui/               # Reusable UI components (shadcn/ui)
│       ├── button.tsx    # Button component
│       ├── card.tsx      # Card component
│       ├── input.tsx     # Input component
│       ├── [45+ other UI components]
│       └── utils.ts      # Utility functions
├── guidelines/            # Project guidelines
│   └── Guidelines.md     # Development guidelines
├── lib/                  # Utility libraries
│   ├── content.ts        # Content management
│   └── useTheme.ts       # Theme management hook
└── styles/               # Styling files
    └── globals.css       # Global CSS with Tailwind v4
```

---

## Development Setup

### Step 1: Environment Configuration

Create environment files for different stages:

```bash
# Create development environment file
touch .env.local

# Create production environment file (optional)
touch .env.production
```

### Step 2: Configure Environment Variables

Add the following variables to your `.env.local` file:

```env
# Application Settings
NEXT_PUBLIC_APP_NAME="Digital Empowerment Hub"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# API Configuration (if using external APIs)
NEXT_PUBLIC_API_URL="https://api.example.com"

# Analytics (optional)
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID="GA_MEASUREMENT_ID"

# Payment Integration (for donations)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_your_stripe_key"
STRIPE_SECRET_KEY="sk_test_your_stripe_secret_key"

# Supabase Configuration (if using)
NEXT_PUBLIC_SUPABASE_URL="your_supabase_url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your_supabase_anon_key"

# Email Configuration (for contact forms)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your_email@gmail.com"
SMTP_PASS="your_app_password"
```

### Step 3: Configure TypeScript (if needed)

Create or update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "es6"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"],
      "@/styles/*": ["./styles/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

---

## Running the Application

### Development Mode

Start the development server:

```bash
# Using npm
npm run dev

# Using yarn
yarn dev

# Using pnpm
pnpm dev
```

The application will be available at:
- **Local**: http://localhost:3000
- **Network**: http://your-ip:3000

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Run type checking
npm run type-check

# Format code with Prettier
npm run format
```

---

## Building for Production

### Step 1: Build the Application

```bash
npm run build
```

### Step 2: Test Production Build Locally

```bash
npm start
```

### Step 3: Optimize Build (Optional)

Add these optimization scripts to your `package.json`:

```json
{
  "scripts": {
    "analyze": "npm run build && npx @next/bundle-analyzer",
    "build:analyze": "ANALYZE=true npm run build"
  }
}
```

---

## Deployment

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**:
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel --prod
   ```

### Option 2: Netlify

1. **Build command**: `npm run build`
2. **Publish directory**: `dist` or `out`
3. **Add environment variables** in Netlify dashboard

### Option 3: Traditional Hosting

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Upload the build folder** to your hosting provider

### Option 4: Docker

Create a `Dockerfile`:

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

Build and run:

```bash
docker build -t deh-app .
docker run -p 3000:3000 deh-app
```

---

## Troubleshooting

### Common Issues and Solutions

#### 1. Node Version Conflicts
```bash
# Check Node version
node --version

# Update Node using nvm (Node Version Manager)
nvm install 18
nvm use 18
```

#### 2. Permission Errors (Windows/Mac)
```bash
# Windows (run as administrator)
npm install --global npm@latest

# Mac/Linux
sudo npm install --global npm@latest
```

#### 3. Port Already in Use
```bash
# Kill process on port 3000
npx kill-port 3000

# Or use a different port
npm run dev -- --port 3001
```

#### 4. Module Not Found Errors
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 5. Tailwind CSS Not Working
```bash
# Ensure Tailwind is properly configured
npm install -D tailwindcss@latest

# Check if globals.css is imported in App.tsx
```

#### 6. TypeScript Errors
```bash
# Run type checking
npm run type-check

# Install missing type definitions
npm install --save-dev @types/react @types/node
```

### Performance Issues

#### 1. Slow Build Times
- Use `npm ci` instead of `npm install` in production
- Enable SWC compiler if using Next.js
- Consider using `pnpm` for faster installations

#### 2. Large Bundle Size
```bash
# Analyze bundle size
npm run analyze

# Optimize images and assets
# Use dynamic imports for large components
```

---

## Additional Features Setup

### 1. Multi-language Support

The project includes `LanguageToggle.tsx` for internationalization:

```bash
# Install i18n libraries (if needed)
npm install react-i18next i18next

# Add translation files to public/locales/
mkdir -p public/locales/en public/locales/tr
```

### 2. Payment Integration

For donation functionality using Stripe:

```bash
# Install Stripe
npm install @stripe/stripe-js stripe

# Configure environment variables (see Environment Configuration)
```

### 3. Analytics Setup

For Google Analytics:

```bash
# Install analytics library
npm install @vercel/analytics

# Add GA_MEASUREMENT_ID to environment variables
```

### 4. Email Configuration

For contact form functionality:

```bash
# Install email libraries
npm install nodemailer @types/nodemailer

# Configure SMTP settings in environment variables
```

### 5. Database Integration (Optional)

If you need persistent data storage:

```bash
# For Supabase
npm install @supabase/supabase-js

# For MongoDB
npm install mongodb mongoose

# For PostgreSQL
npm install pg @types/pg
```

---

## Development Best Practices

### Code Style

1. **Use TypeScript** for type safety
2. **Follow ESLint rules** with Prettier formatting
3. **Component naming**: Use PascalCase for components
4. **File organization**: Group related components in folders

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/new-feature

# Commit with conventional commits
git commit -m "feat: add new payment integration"

# Push and create pull request
git push origin feature/new-feature
```

### Testing (Recommended)

```bash
# Install testing libraries
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

---

## Contributing

### Prerequisites for Contributors

1. **Fork the repository**
2. **Create a feature branch**
3. **Follow the coding standards**
4. **Write tests for new features**
5. **Update documentation**

### Submission Process

1. **Create a pull request**
2. **Ensure all tests pass**
3. **Request code review**
4. **Address feedback**
5. **Merge after approval**

---

## Support and Resources

### Documentation
- **React**: https://react.dev/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **TypeScript**: https://www.typescriptlang.org/docs/
- **shadcn/ui**: https://ui.shadcn.com/

### Community
- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas
- **Discord/Slack**: Join our community channels

### Getting Help

If you encounter issues:

1. **Check this installation guide**
2. **Search existing GitHub issues**
3. **Create a new issue** with:
   - Operating system and version
   - Node.js version
   - Error messages and stack traces
   - Steps to reproduce

---

## License and Attribution

This project is licensed under the MIT License. See the `LICENSE` file for details.

Third-party attributions can be found in `Attributions.md`.

---

## Changelog

### Version 1.0.0
- Initial release
- Complete dark/light theme system
- Multi-language support
- Payment integration
- Responsive design for all devices
- SEO optimization
- Accessibility features

---

**Last Updated**: December 2024
**Project Version**: 1.0.0
**Minimum Node Version**: 18.x
**Recommended Node Version**: 20.x LTS

---

*For additional support, please contact the development team or create an issue on GitHub.*