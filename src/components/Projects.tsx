import React from 'react';
import { CarouselItem, CarouselContent, CarouselPrevious, CarouselNext, Carousel } from "@/components/ui/carousel"
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
                <p className="text-gray-500 dark:text-gray-400">
                  A collection of my work across different technologies and domains.
                </p>
              </div>
            </div>
            <div className="w-full max-w-sm">
              <Carousel>
                <CarouselContent className="aspect-video overflow-hidden rounded-xl">
                  <CarouselItem className="aspect-video">
                    <div className="aspect-video">
                      <Image
                        alt=''
                        className="object-cover"
                        height="225"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "400/225",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="aspect-video">
                    <div className="aspect-video">
                      <Image
                        alt=''
                        className="object-cover"
                        height="225"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "400/225",
                          objectFit: "cover",
                        }}
                        width="400"
                      />
                    </div>
                  </CarouselItem>
                  <CarouselItem className="aspect-video">
                    <div className="aspect-video">
                      <Image
                        alt=''
                        className="object-cover"
                        height="225"
                        src="/placeholder.svg"
                        style={{
                          aspectRatio: "400/225",
                          objectFit: "cover",
                        }}
                        width="400"
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