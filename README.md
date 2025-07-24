# Finzy Landing Page

A modern, responsive landing page for Finzy - a financial management platform. Built with Next.js 15, React 19, and Tailwind CSS 4.

![Finzy Landing Page](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=for-the-badge&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🚀 Features

### Design & UI

- **Modern Design**: Clean, professional financial app landing page
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Mobile-First Approach**: Progressive enhancement for all screen sizes

### Components

- **Hero Section**: Eye-catching hero with mobile app mockups, responsive navigation, and call-to-action buttons
- **Stats Section**: Key metrics display with animated icons and responsive borders
- **Features Section**: Showcase of app features with side-by-side layouts and interactive elements
- **Services Section**: Service offerings with icons and descriptions
- **Testimonials Section**: Interactive testimonial cards with hover effects and mobile carousel
- **App Download Section**: App store download links and promotional content
- **Footer**: Complete footer with links, social media, and company information

### Technical Features

- **Next.js 15**: Latest version with App Router and Turbopack
- **React 19**: Latest React features and optimizations
- **Tailwind CSS 4**: Modern utility-first CSS framework
- **React Icons**: Comprehensive icon library for consistent design
- **Image Optimization**: Next.js Image component for optimal performance
- **Interactive States**: Hover effects, animations, and state management

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.17 or higher)
- **npm** (comes with Node.js) or **yarn**

## 🛠️ Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/hamadbakeel/Finzy-landing-page.git
   cd finzy-landing-page
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
finzy-landing-page/
├── public/
│   ├── images/           # Static images and assets
│   ├── finzy-logo.svg    # Company logo
│   └── ...               # Other static assets
├── src/
│   ├── app/
│   │   ├── globals.css   # Global styles
│   │   ├── layout.js     # Root layout component
│   │   └── page.js       # Main page component
│   └── components/
│       ├── Hero.js       # Hero section with navigation
│       ├── StatsSection.js # Statistics and metrics
│       ├── Features.js   # App features showcase
│       ├── ServicesSection.js # Services and offerings
│       ├── TestimonialsSection.js # Customer testimonials
│       ├── AppDownloadSection.js # App download section
│       └── Footer.js     # Footer with links and info
├── package.json          # Dependencies and scripts
├── next.config.mjs       # Next.js configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── README.md            # This file
```

## 🎨 Customization

### Colors

The project uses a custom color palette defined in Tailwind CSS. Main colors include:

- Primary: `#6366b9` (Indigo)
- Background: White and light grays
- Text: Black and gray variations

### Images

Replace images in the `public/images/` directory:

- `hero phone 1.png` & `hero phone 2.png` - Hero section mockups
- `person 1.jpg`, `person 2.jpg`, `person 3.jpg` - Testimonial photos
- `section 3 cards.png`, `section 3 map.png`, `section 3 graph.png` - Feature images

### Content

Update text content in the respective component files:

- `src/components/Hero.js` - Hero section content and navigation
- `src/components/StatsSection.js` - Statistics and metrics
- `src/components/Features.js` - Feature descriptions and layouts
- `src/components/ServicesSection.js` - Service offerings and descriptions
- `src/components/TestimonialsSection.js` - Customer testimonials and reviews
- `src/components/AppDownloadSection.js` - App download links and promotional text
- `src/components/Footer.js` - Footer links, social media, and company information

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://finzy-landing-page.vercel.app/)
3. Deploy automatically on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build preset
- **AWS Amplify**: Connect your repository
- **Railway**: Deploy with one click
- **Self-hosted**: Build with `npm run build` and serve with `npm start`

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features

- Collapsible navigation menu
- Touch-friendly carousel for testimonials
- Optimized typography and spacing
- Swipe gestures for interactive elements

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Code Style

- Follow React best practices
- Use functional components with hooks
- Implement proper accessibility features
- Maintain consistent naming conventions

## 🎯 Performance

The project is optimized for performance:

- **Image Optimization**: Next.js Image component with proper sizing
- **Code Splitting**: Automatic code splitting by Next.js
- **Lazy Loading**: Images and components load on demand
- **Minification**: Production builds are minified
- **Caching**: Static assets are cached appropriately

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **React Icons** for the comprehensive icon library
- **Design inspiration** from modern financial app landing pages

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Contact the development team
- Check the documentation

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**
