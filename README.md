# Yasser Belal - Portfolio

A cosmic-themed portfolio website showcasing my skills, experience, and projects.

## Project Info

**URL**: https://lovable.dev/projects/5ece2b66-815a-4b0b-a131-a4a3c4aa5a0a

## Features

- Responsive design for all device sizes
- Galaxy-themed UI with animations and cosmic elements
- Multiple pages: Home, About, Experience, Projects, and Contact
- Interactive elements and smooth transitions
- Ready for GitHub Pages deployment

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- shadcn-ui
- Vite

## Deployment Instructions

### GitHub Pages Deployment

To deploy this portfolio to GitHub Pages:

1. Create a GitHub repository for your portfolio
2. Push this code to your repository
3. Install the GitHub Pages dependency:

```bash
npm install --save-dev gh-pages
```

4. Add the following to your `package.json`:

```json
"homepage": "https://yourusername.github.io/your-repo-name",
"scripts": {
  // ... other scripts
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

5. Deploy to GitHub Pages:

```bash
npm run deploy
```

6. Configure GitHub Pages in your repository settings to use the `gh-pages` branch

## How to Use

### Local Development

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm i

# Start the development server
npm run dev
```

## GitHub Pages Configuration

To ensure proper routing with React Router on GitHub Pages, create a `404.html` file in the `public` folder with the same content as `index.html` to handle client-side routing.

## Customization

- Update your personal information in each page component
- Replace placeholder images with your own
- Modify the color scheme in the `tailwind.config.ts` file
- Add additional projects to the Projects page

## License

This project is open-source and available for personal use.
