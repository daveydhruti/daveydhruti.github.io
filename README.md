# daveydhruti.gitlab.io

A minimal academic portfolio built with [Eleventy](https://www.11ty.dev/) (11ty).

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v14 or higher)
- npm or pnpm

### Installation

1. Clone the repo
   ```sh
   git clone https://gitlab.com/daveydhruti/daveydhruti.gitlab.io.git
   ```
2. Install dependencies
   ```sh
   npm install
   # or
   pnpm install
   ```

### Usage

To run the site locally with hot reloading:
```sh
npm start
# or
pnpm start
```

To build the site for production:
```sh
npm run build
# or
pnpm run build
```

The site will be available at `http://localhost:8080` when running in development mode.

## Project Structure

```
.
├── src/
│   ├── _includes/      # Includes/layouts for Nunjucks templates
│   ├── _notes/         # Personal notes section
│   ├── about/          # About page
│   ├── contact/        # Contact page
│   ├── css/            # Stylesheets
│   ├── documents/      # CV and other documents
│   ├── index.11tydata.js # Homepage data
│   ├── index.md        # Homepage content
│   ├── notes/          # Additional notes
│   └── projects/       # Projects showcase
├── public/             # Static assets (copied to dist)
├── .eleventy.js        # Eleventy configuration
└── package.json        # Project dependencies and scripts
```

## Customization

### Site Metadata

Edit `src/index.11tydata.js` to change site-wide information like title, description, and author.

### Content

- Pages are located in the `src/` directory as Markdown files
- Use frontmatter to specify layout and other page-specific data
- Modify existing pages or add new ones as needed

### Styling

CSS files are in `src/css/`. The site uses a simple, clean design that's easy to modify.

## Deployment

This site is configured to deploy automatically to GitLab Pages when pushed to the `main` branch.

To deploy manually:
1. Build the site: `npm run build`
2. The output will be in the `_site` directory
3. Upload the contents of `_site` to your web server

## Built With

- [Eleventy (11ty)](https://www.11ty.dev/) - Static site generator
- [npm](https://www.npmjs.com/) - Package manager

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Thanks to the Eleventy community for excellent documentation and examples
- Inspired by various academic portfolio sites