import './app/globals.css';

export const metadata = {
  title: 'My Portfolio',
  description: 'Welcome to my professional portfolio website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {/* This "children" prop is where your page.js content will be injected */}
        {children}
      </body>
    </html>
  );
}