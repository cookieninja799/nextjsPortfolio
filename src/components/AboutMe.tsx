import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


const AboutMe: React.FC = () => {
  return (
    <div>
      <Card className='p-4'>
        <CardTitle className="scroll-m-20 mb-4 text-3xl sm:text-4xl lg:text-7xl lg:leading-normal font-extrabold">
          About Me
        </CardTitle>
        <CardDescription className='m-4'>Your brief introduction goes here...</CardDescription>
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="flex">
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <h2>Skills</h2>
            <p>Detail your professional skills here...</p>
            {/* You can include lists or even progress bars to visually represent your skills */}
          </TabsContent>

          <TabsContent value="education">
            <h2>Education</h2>
            <p>List your educational background here...</p>
            {/* Consider using a timeline or list format to display your educational achievements */}
          </TabsContent>

          <TabsContent value="experience">
            <h2>Experience</h2>
            <p>Outline your professional experience here...</p>
            {/* A timeline or detailed list can be effective in showcasing your roles and accomplishments */}
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AboutMe;
