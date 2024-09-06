import React from 'react';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer>
      <p>Footer content</p>
    </footer>
  );
};

const MainContent: React.FC = () => {
  return (
    <main>
      <p>Main content goes here</p>
    </main>
  );
};

const CopilotLowTest1: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <Header title={title} />
      <MainContent />
      <Footer />
    </div>
  );
};

export default CopilotLowTest1;
