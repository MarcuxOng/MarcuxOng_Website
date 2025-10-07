# Marcux Ong - Portfolio Website

A modern, responsive portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a multi-page architecture with animated transitions and a functional contact form.

## 🌟 Features

- **Multi-page Architecture**: Home, About, Projects, Experience, Certifications, and Contact pages
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Interactive Elements**: Smooth animations with Framer Motion
- **Functional Contact Form**: Real email sending capability with EmailJS
- **Type-Safe**: Full TypeScript implementation
- **Centralized Data Management**: Single JSON file for all portfolio content
- **Modern UI Components**: Built with shadcn/ui component library

## 🚀 Tech Stack

- **Framework**: Next.js 15.5.4 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **UI Components**: shadcn/ui

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── certifications/    # Certifications page
│   ├── contact/          # Contact form page
│   ├── experience/       # Work experience page
│   ├── projects/         # Projects showcase page
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # Reusable components
│   ├── Navigation.tsx    # Main navigation
│   └── ui/              # shadcn/ui components
├── data/                # Centralized data
│   └── portfolio-data.json  # All portfolio content
├── lib/                 # Utilities and types
│   ├── types.ts         # TypeScript definitions
│   └── utils.ts         # Helper functions
└── public/              # Static assets
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MarcuxOng/MarcuxOng_Website.git
   cd MarcuxOng_Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## ⚙️ Configuration

### Email Contact Form

To enable the contact form email functionality:

1. **Create EmailJS Account**
   - Sign up at [EmailJS](https://www.emailjs.com/)
   - Create a new service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Service ID, Template ID, and Public Key

2. **Set up Environment Variables**
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Follow the detailed setup guide**
   See `EMAILJS_SETUP.md` for complete configuration instructions.

### Customizing Content

All portfolio content is centralized in `data/portfolio-data.json`. Update this file to customize:

- Personal information and contact details
- Work experience and education
- Projects and their descriptions
- Skills and certifications
- Social media links

## 📄 Pages Overview

- **🏠 Home**: Introduction with featured projects and quick navigation
- **👤 About**: Personal bio, skills, languages, and technical expertise
- **💼 Projects**: Showcase of development projects with links and descriptions
- **💻 Experience**: Work history, education, and professional timeline
- **🎓 Certifications**: Professional certifications and achievements
- **📧 Contact**: Contact form with email integration and contact information

## 🎨 Customization

### Styling
- Modify `app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.ts`
- Customize component styles in individual page files

### Adding New Pages
1. Create a new folder in `app/`
2. Add a `page.tsx` file
3. Update navigation in `components/Navigation.tsx`
4. Add relevant data to `portfolio-data.json`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Add your environment variables in Vercel dashboard
4. Deploy automatically with every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📝 Development Notes

- Built with Next.js App Router for better performance and SEO
- Uses TypeScript for type safety and better developer experience
- Implements responsive design patterns with Tailwind CSS
- Follows modern React patterns with hooks and functional components
- Centralized data architecture for easy maintenance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by [Marcus Ong](https://github.com/MarcuxOng)
