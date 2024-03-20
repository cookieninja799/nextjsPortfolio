import React from 'react';
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
import { AspectRatio } from './ui/aspect-ratio';
import Image from 'next/image';
interface ProjectProps {
  // Define your prop types here
}

const Project: React.FC<ProjectProps> = (props) => {
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
                  <CarouselItem className="overflow-hidden rounded-xl">
                    <div className="aspect-video overflow-hidden rounded-xl">
                          <Image
                            alt='neoApp'
                            className="object-cover"
                            width='400'
                            height= '300'
                            src="/Screenshot_4.jpg"
                          />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-video overflow-hidden rounded-xl">
                      <Image
                        alt='portfolio'
                        className="object-cover"
                        width='400'
                        height= '300'
                        src="/Screenshot_5.jpg"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem>
                    <div className="aspect-video overflow-hidden rounded-xl">
                          <Image
                            alt='neoApp'
                            className="object-cover"
                            width='400'
                            height= '300'
                            src="/Screenshot_4.jpg"
                          />
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