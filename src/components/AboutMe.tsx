import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"

const AboutMe: React.FC = () => {
  return (
    <div>
      <Card className='p-4'>
        <CardTitle className="scroll-m-20 mb-6 text-4xl lg:text-5xl font-extrabold tracking-tight">
          About Me
        </CardTitle>
        <CardDescription className='mb-6 text-sm text-muted-foreground'>
          I&apos;m a software developer in Chapel Hill, NC, at iValu8, crafting Wi-Fi marketing solutions that enhance client engagement. Beyond code, I pursue mixed martial arts and photography. Discover my projects on <a href="https://github.com/cookieninja799" className="font-medium text-blue-600 underline underline-offset-4">GitHub</a>.
        </CardDescription>
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="flex border-b">
            <TabsTrigger value="skills" className="px-4 py-2 font-semibold">Skills</TabsTrigger>
            <TabsTrigger value="education" className="px-4 py-2 font-semibold">Education</TabsTrigger>
            <TabsTrigger value="experience" className="px-4 py-2 font-semibold">Experience</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="pt-6 pb-4 px-4">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <p className="leading-7 mb-6">Expertise in React, Node.js, Python, and more, enabling high-performance applications.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>React - Building dynamic user interfaces</li>
              <li>Node.js - Server-side management</li>
              <li>Python - Data scripting and automation</li>
            </ul>
          </TabsContent>

          <TabsContent value="education" className="pt-6 pb-4 px-4">
            <h2 className="text-2xl font-semibold mb-2">Education</h2>
            <p className="leading-7 mb-4">Bachelor of Science in Computer Science from Appalachian State University, 2022. Key coursework:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Database Systems</li>
              <li>Data Structures</li>
              <li>Statistical Analysis</li>
            </ul>
          </TabsContent>

          <TabsContent value="experience" className="pt-6 pb-4 px-4">
            <h2 className="text-2xl font-semibold mb-2">Experience</h2>
            <p className="leading-7 mb-6">Since July 2023, leading development at iValu8, achieving a 30% increase in app downloads.</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Enhanced user interfaces and system architectures</li>
              <li>Implemented efficient data handling with GraphQL</li>
              <li>Optimized ETL processes</li>
            </ul>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AboutMe;
