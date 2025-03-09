'use client';

import Button from './Button';

interface ScrollTopButtonProps {
  onClick: () => void;
}

const ScrollTopButton: React.FC<ScrollTopButtonProps> = ({ onClick }) => {
  return (
    <Button
      onClick={onClick}
      variant="primary"
      className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full text-lg sm:text-xl z-50 p-0"
      aria-label="Scroll to top of page"
    >
      <span className="relative -mt-0.5">↑</span>
    </Button>
  );
};

export default ScrollTopButton;
