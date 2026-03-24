"use client"
import React from 'react';
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { Button } from './ui/button';
import Image from 'next/image';

interface ProjectProps {
  // Define your prop types here
}

const Project: React.FC<ProjectProps> = (props) => {
  // Function to handle navigation
  const redirectToGithub = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <div>
      <section className="w-full py-12">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex flex-col items-center space-y-2 text-center">
              <div className="space-y-1">
                <h2 className="scroll-m-20 mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">My Projects</h2>
                <p className="text-sm text-muted-foreground">
                  A collection of my work across different technologies and domains.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm">
              <Carousel>
                <CarouselContent>
                  <CarouselItem>
                    <div className="rounded-xl overflow-hidden border">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          alt='neoApp'
                          className="object-cover"
                          width='400'
                          height='300'
                          src="/Screenshot_4.jpg"
                        />
                        <Button onClick={() => redirectToGithub('https://github.com/cookieninja799/neoApp')} variant="outline" className="absolute inset-0 h-full w-full overflow-hidden bg-gradient opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70">
                          View on GitHub
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-base mb-1">NEO App</h3>
                        <p className="text-sm text-muted-foreground mb-3">A React Native mobile app for tracking and discovering deals on running shoes, powered by automated scrapers.</p>
                        <div className="flex flex-wrap gap-1">
                          {['React Native', 'Node.js', 'PostgreSQL'].map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full border">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-xl overflow-hidden border">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          alt='aiWorkoutLogger'
                          className="object-cover"
                          width='400'
                          height='300'
                          src="/Screenshot_5.jpg"
                        />
                        <Button onClick={() => redirectToGithub('https://github.com/cookieninja799')} variant="outline" className="absolute inset-0 h-full w-full overflow-hidden bg-gradient opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70">
                          View on GitHub
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-base mb-1">AI Workout Logger</h3>
                        <p className="text-sm text-muted-foreground mb-3">A mobile app for AI-powered workout logging with a Next.js MVP demo. Log lifts via natural language.</p>
                        <div className="flex flex-wrap gap-1">
                          {['React Native', 'Next.js', 'Supabase', 'OpenAI'].map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full border">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="rounded-xl overflow-hidden border">
                      <div className="relative aspect-video overflow-hidden">
                        <Image
                          alt='portfolio'
                          className="object-cover"
                          width='400'
                          height='300'
                          src="/Screenshot_6.jpg"
                        />
                        <Button onClick={() => redirectToGithub('https://github.com/cookieninja799/nextjsPortfolio')} variant="outline" className="absolute inset-0 h-full w-full overflow-hidden bg-gradient opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-70">
                          View on GitHub
                        </Button>
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-base mb-1">Portfolio</h3>
                        <p className="text-sm text-muted-foreground mb-3">This site — a personal portfolio built with Next.js 14, Tailwind CSS, and Framer Motion with dark mode support.</p>
                        <div className="flex flex-wrap gap-1">
                          {['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'].map(tag => (
                            <span key={tag} className="text-xs px-2 py-0.5 rounded-full border">{tag}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;
