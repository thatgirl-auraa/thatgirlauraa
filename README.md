# That Girl Aura

A modern lifestyle brand website built with Next.js 14, TypeScript, Tailwind CSS, and MDX.

## Features

- 🎨 Modern, aesthetic design with custom color palette
- 📱 Fully responsive and mobile-friendly
- 📝 MDX support for content management
- 🎯 Netlify CMS integration for visual content editing
- 🔍 SEO optimized
- 🚀 Fast performance with Next.js 14
- 🎭 Custom typography with Google Fonts

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- MDX
- Netlify CMS
- Google Fonts (Playfair Display, Poppins, Libre Baskerville)

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/thatgirlauraa.git
   cd thatgirlauraa
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Content Management

The site uses Netlify CMS for content management. To access the CMS:

1. Deploy the site to Netlify
2. Navigate to `/admin` on your deployed site
3. Log in with your Netlify credentials
4. Start creating and managing content

## Project Structure

```
src/
├── app/                    # Next.js 14 app directory
│   ├── admin/             # Netlify CMS admin page
│   ├── journal/           # Blog section
│   ├── picks/             # Affiliate picks section
│   └── page.tsx           # Home page
├── components/            # Reusable components
├── content/              # MDX content files
│   ├── journal/         # Blog posts
│   └── picks/           # Affiliate collections
└── styles/              # Global styles
```

## Customization

### Colors

The project uses a custom color palette defined in `tailwind.config.ts`:

- Ivory: `#FFFFF0`
- Blush Pink: `#FFE4E1`
- Sage Green: `#9CAF88`
- Dusty Mauve: `#967969`

### Typography

Custom fonts are configured in `tailwind.config.ts`:

- Headings: Playfair Display
- Body: Poppins
- Quotes: Libre Baskerville (Italic)

## Deployment

The site is configured for deployment on Vercel:

1. Push your changes to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy your site

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. 