# Dingeman Concrete Inc. Website

A professional website for Dingeman Concrete Inc., built with React, TypeScript, and Tailwind CSS.

## Features

- **Home Page**: Hero section with company introduction and service overview
- **Category Pages**: Separate pages for Commercial, Residential, and Decorative services
- **Quote Request Modal**: Interactive form for customers to request quotes
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Professional Styling**: Clean, modern design using Tailwind CSS

## Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **CSS Processing**: PostCSS & Autoprefixer

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with logo placeholder
│   └── QuoteModal.tsx      # Quote request modal form
├── pages/
│   ├── Home.tsx            # Home page with hero section
│   ├── Commercial.tsx      # Commercial services page
│   ├── Residential.tsx     # Residential services page
│   └── Decorative.tsx      # Decorative concrete page
├── App.tsx                 # Main app component with routing
├── main.tsx                # React entry point
└── index.css               # Global styles with Tailwind directives
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd "DC"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Building

Create a production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

## Customization

### Logo
The header contains a placeholder for the company logo. To add your actual logo:
1. Place your logo file in the `src/assets` folder
2. Update [src/components/Header.tsx](src/components/Header.tsx) to import and display your logo

### Colors & Branding
Tailwind CSS colors can be customized in [tailwind.config.ts](tailwind.config.ts). Update the theme section to match your brand colors.

### EmailJS Integration
The quote modal is ready for EmailJS integration. To connect it:
1. Install EmailJS: `npm install @emailjs/browser`
2. Update the `handleSubmit` function in [src/components/QuoteModal.tsx](src/components/QuoteModal.tsx) with your EmailJS credentials and service configuration

Example implementation:
```typescript
import emailjs from '@emailjs/browser';

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    await emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      formData,
      'YOUR_PUBLIC_KEY'
    );
    alert('Quote request sent successfully!');
    // Reset form...
  } catch (error) {
    console.error('Failed to send quote request:', error);
  }
};
```

## Contact Information

To customize contact information or add additional sections, update the relevant page files in the `src/pages` directory.

## License

All rights reserved © Dingeman Concrete Inc.
