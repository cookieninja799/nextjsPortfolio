"use client"
import React from 'react';
import { PinTopIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"

interface TopPageBtn {
  // You can extend this interface to include more props, such as styles or classNames
}

const TopPageBtn: React.FC<TopPageBtn> = (props) => {
  // Function to scroll back to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // For a smooth scrolling effect
    });
  };

  return (
    <Button variant="outline" size="icon" onClick={scrollToTop}>
      <PinTopIcon className="h-4 w-4" />
    </Button>
  );
};

export default TopPageBtn;