import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faPinterest, faTiktok} from '@fortawesome/free-brands-svg-icons';
import { Button } from "@/components/ui/button";

export function ContactButtons() {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h3 className='scroll-m-20 mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold'>Contact</h3>
      <div className="flex space-x-4 mt-4">
        {/* GitHub Button */}
        <Button asChild variant="outline" size="icon">
          <a href="https://github.com/cookieninja799" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
            <FontAwesomeIcon icon={faGithub} className="h-5 w-5 text-muted-foreground" />
          </a>
        </Button>
        
        {/* LinkedIn Button */}
        <Button asChild variant="outline" size="icon">
          <a href="https://linkedin.com/in/thommy-naleudy-b265442b3" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 text-muted-foreground" />
          </a>
        </Button>
        
        {/* Pinterest Button */}
        <Button asChild variant="outline" size="icon">
          <a href="https://pinterest.com/naleudy/" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
            <FontAwesomeIcon icon={faPinterest} className="h-5 w-5 text-muted-foreground" />
          </a>
        </Button>

        {/* TikTok Button */}
        <Button asChild variant="outline" size="icon">
          <a href="https://www.tiktok.com/@thommynaleudy?_t=8ldQeFU8FLP&_r=1" target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
            <FontAwesomeIcon icon={faTiktok} className="h-5 w-5 text-muted-foreground" />
          </a>
        </Button>
      </div>
    </div>
  );
}

export default ContactButtons;
