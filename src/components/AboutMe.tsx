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
          Full-stack engineer at iValu8 building VivaSpot — a SaaS platform for local commerce and merchant engagement. I work across the full stack with Vue 3, Node/Express, and AWS, and integrate AI tooling to automate workflows and build smarter user experiences. Outside of work I pursue mixed martial arts and photography. Check out my projects on <a href="https://github.com/cookieninja799" className="font-medium text-blue-600 underline underline-offset-4">GitHub</a>.
        </CardDescription>
        <Tabs defaultValue="skills" className="w-full">
          <TabsList className="flex border-b">
            <TabsTrigger value="skills" className="px-4 py-2 font-semibold">Skills</TabsTrigger>
            <TabsTrigger value="education" className="px-4 py-2 font-semibold">Education</TabsTrigger>
            <TabsTrigger value="experience" className="px-4 py-2 font-semibold">Experience</TabsTrigger>
          </TabsList>

          <TabsContent value="skills" className="pt-6 pb-4 px-4">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Frontend</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Vue 3 / React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                  <li>React Native</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Backend</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>Node.js / Express</li>
                  <li>PostgreSQL / Drizzle ORM</li>
                  <li>REST APIs</li>
                  <li>Python</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cloud &amp; Infra</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>AWS (RDS, S3, Cognito)</li>
                  <li>Vercel / Serverless</li>
                  <li>Docker</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">AI &amp; Automation</h3>
                <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                  <li>LangChain / OpenAI</li>
                  <li>n8n workflow automation</li>
                  <li>MCP protocols</li>
                </ul>
              </div>
            </div>
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
            <h2 className="text-2xl font-semibold mb-4">Experience</h2>
            <div className="mb-2">
              <p className="font-semibold">Full-Stack Engineer — iValu8</p>
              <p className="text-sm text-muted-foreground mb-3">July 2023 – Present · Chapel Hill, NC</p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
                <li>Built and maintained VivaSpot, a multi-tenant SaaS platform for local merchant engagement including a coupon book and events system</li>
                <li>Architected full-stack features with Vue 3 on the frontend and Node/Express + PostgreSQL on the backend</li>
                <li>Integrated AWS Cognito for auth, S3 for asset storage, and RDS for the production database</li>
                <li>Automated internal workflows using self-hosted n8n and integrated LangChain + OpenAI for AI-powered features</li>
                <li>Drove a 30% increase in app downloads through UX improvements and new feature launches</li>
              </ul>
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
};

export default AboutMe;
