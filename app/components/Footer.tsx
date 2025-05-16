'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col items-center justify-center space-y-1">
          <p className="text-sm text-muted-foreground text-white">
            Made with ❤️ by{" "}
            <a
              href="https://porto-io.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline text-white"
            >
              Aakash Sharma
            </a>
          </p>
          <p className="text-xs text-muted-foreground/60 text-white">
            © {new Date().getFullYear()} CloudClipper.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 