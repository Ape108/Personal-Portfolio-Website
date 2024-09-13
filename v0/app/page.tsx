import React from 'react';
import Image from 'next/image';
import { Github, Linkedin, Twitter } from 'lucide-react';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of Project 1' },
  { id: 2, title: 'Project 2', description: 'Description of Project 2' },
  { id: 3, title: 'Project 3', description: 'Description of Project 3' },
];

const social = [
  { id: 'github', Icon: Github, link: 'https://github.com/yourusername' },
  { id: 'linkedin', Icon: Linkedin, link: 'https://linkedin.com/in/yourusername' },
  { id: 'twitter', Icon: Twitter, link: 'https://twitter.com/yourusername' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white shadow-xl rounded-lg overflow-hidden">
          {/* Header with picture and description */}
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src="/api/placeholder/400/400"
                alt="Your Name"
                width={400}
                height={400}
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Your Name</div>
              <p className="mt-2 text-gray-500">
                This is where you can write a description about yourself. Talk about your skills, experience, and what you're passionate about.
              </p>
            </div>
          </div>
          
          {/* Project showcase */}
          <div className="px-8 py-6">
            <h2 className="text-2xl font-bold mb-4">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {projects.map((project) => (
                <div key={project.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social links */}
          <div className="bg-gray-50 px-8 py-4">
            <div className="flex justify-center space-x-6">
              {social.map(({ id, Icon, link }) => (
                <a key={id} href={link} className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{id}</span>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}