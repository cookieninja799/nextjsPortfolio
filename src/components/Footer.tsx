import React from 'react';

interface ProjectProps {
  // Define your prop types here
}

const Project: React.FC<ProjectProps> = (props) => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      {/* Your component JSX here */}
      <h1 className='text-center text-sm text-muted-foreground'>👾 Made with code, caffeine, and a sprinkle of tears. © Thommy Naleudy {currentYear}</h1>
      {/* More JSX content */}
    </div>
  );
};

export default Project;