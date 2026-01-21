# Portfolio Website
A portfolio website built with [11ty](https://www.11ty.dev/). Still under development.

## Features
<!-- - Responsive two-column layout (sidebar + main content) -->
<!-- - Tabbed interface for Resume and Blog sections -->
- Responsive sidebar with bioo and socials
- Mobile-friendly design

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm

### Development
Run the development server with live reload:
```bash
npm start
```

Your site will be available at `http://localhost:8080`

### Build
For production- site:
```bash
npm run build
```

The built site will be in the `_site` directory.

## Project Structure

```
portfolio/
├── src/
│   ├── _includes/
│   │   └── base.njk          # Base layout template
│   ├── css/
│   │   └── style.css         # Styles
│   ├── images/
│   │   └── profile.jpg       # Profile picture
│   ├── index.njk             # Main page
│   └── favicon.ico           # Site favicon
├── .eleventy.js              # 11ty configuration
├── package.json
└── README.md
```

## Customization

### Changing Colors

Edit `src/css/style.css` and modify the color values:
- Primary link color: `#0066cc`
- Text color: `#333`
- Secondary text: `#666`
- Background: `#f5f5f5`

### Adding More Tabs

In `src/index.njk`, add a new tab button and corresponding panel following the existing pattern.

### Adjusting Sidebar Width

In `src/css/style.css`, change the `.sidebar` width (default is `280px`).

## Deployment

This site can be deployed to:
- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- Any static hosting service

For GitHub Pages, you may need to adjust the build command in your deployment settings to `npx @11ty/eleventy`.

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

Built with [11ty](https://www.11ty.dev/), a simpler static site generator.