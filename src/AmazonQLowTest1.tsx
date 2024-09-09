import React from 'react';

// Header component
const Header = ({ title }: { title: string }) => {
  return <header><h1>{title}</h1></header>;
};

// Footer component
const Footer = () => {
  return <footer>&copy; 2023 My Website</footer>;
};

// Main content component
const Content = () => {
  return (
    <main>
      <h2>Welcome to my website!</h2>
      <p>This is the main content area.</p>
    </main>
  );
};

// Page layout component
const AmazonQLowTest1 = ({ title }: { title: string }) => {
  return (
    <div>
      <Header title={title} />
      <Content />
      <Footer />
    </div>
  );
};

export default AmazonQLowTest1;
