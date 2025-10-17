// app/about/page.tsx
'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import OurJourney from "@/components/OurJourney"

type TeamMember = {
  name: string;
  imageUrl: string;
  alt: string;
};

type Position = 'left2' | 'left1' | 'middle' | 'right1' | 'right2';

type VisibleTeamMember = TeamMember & {
  index: number;
  position: Position;
};

type Feature = {
  title: string;
  description: string;
  icon: string;
};

export default function AboutPage() {
  // Team data with the Pexels image - now with 5 team members
  const initialTeamMembers: TeamMember[] = [
    {
      name: 'Team Member One',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Team Member One',
    },
    {
      name: 'John Carvan',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'John Carvan',
    },
    {
      name: 'Miss Smith Ellen',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Miss Smith Ellen',
    },
    {
      name: 'Team Member Name',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Team Member',
    },
    {
      name: 'Team Member Five',
      imageUrl: 'https://images.pexels.com/photos/3771074/pexels-photo-3771074.jpeg?cs=srgb&dl=pexels-olly-3771074.jpg&fm=jpg',
      alt: 'Team Member Five',
    },
  ];

  // Features data
  const features: Feature[] = [
    {
      title: 'Personalized learning',
      description: 'Students learn at their own pace with tailored content that adapts to their needs.',
      icon: '/personalized-icon.svg', // Replace with actual icon paths
    },
    {
      title: 'Trusted content',
      description: 'High-quality, standards-aligned content created by education experts.',
      icon: '/content-icon.svg', // Replace with actual icon paths
    },
    {
      title: 'Tools to empower our team',
      description: 'Resources and analytics to help our team save time and support students.',
      icon: '/tools-icon.svg', // Replace with actual icon paths
    },
  ];

  // State for image errors
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  
  // State for current middle team member index
  const [currentIndex, setCurrentIndex] = useState(2); // Start with Miss Smith Ellen in the middle

  const handleImageError = (key: string) => {
    setImageErrors(prev => ({
      ...prev,
      [key]: true
    }));
  };

  // Handle navigation to previous team member
  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? initialTeamMembers.length - 1 : prevIndex - 1));
  };

  // Handle navigation to next team member
  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex === initialTeamMembers.length - 1 ? 0 : prevIndex + 1));
  };

  // Handle team member click to make it the middle one
  const handleTeamMemberClick = (index: number) => {
    setCurrentIndex(index);
  };

  // Calculate the indices for the visible team members (now 5 team members)
  const getVisibleTeamMembers = (): VisibleTeamMember[] => {
    const total = initialTeamMembers.length;
    const visibleTeamMembers: VisibleTeamMember[] = [];
    
    // Get 5 team members: two on the left, middle, and two on the right
    for (let i = -2; i <= 2; i++) {
      const index = (currentIndex + i + total) % total;
      const position: Position = 
        i === 0 ? 'middle' : 
        i === -2 ? 'left2' : 
        i === -1 ? 'left1' : 
        i === 1 ? 'right1' : 'right2';
      
      visibleTeamMembers.push({
        ...initialTeamMembers[index],
        index,
        position
      });
    }
    
    return visibleTeamMembers;
  };

  const visibleTeamMembers = getVisibleTeamMembers();

  // Fallback component for images
  const ImageFallback = ({ width = 150, height = 150, text = 'Image' }: { width?: number; height?: number; text?: string }) => (
    <div 
      className="flex items-center justify-center bg-gray-200 border-2 border-dashed border-gray-300 rounded-full"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className="text-gray-500 text-sm">{text}</span>
    </div>
  );

  // Fallback component for icons
  const IconFallback = () => (
    <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
      </svg>
    </div>
  );

  // Small navigation button component (for bottom)
  const SmallNavButton = ({ direction, onClick }: { direction: 'left' | 'right'; onClick: () => void }) => (
    <button 
      onClick={onClick}
      className="flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-sm hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all duration-300"
      aria-label={`Scroll ${direction}`}
    >
      {direction === 'left' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      )}
    </button>
  );

  // Team member card component
  const TeamMemberCard = ({ teamMember, position, index, onClick }: { 
    teamMember: TeamMember; 
    position: Position;
    index: number;
    onClick: () => void;
  }) => {
    // Determine size and styling based on position
    const getCardStyle = () => {
      switch(position) {
        case 'middle':
          return {
            size: 'w-56 h-56 md:w-64 md:h-64',
            border: 'border-4 border-white',
            scale: 'transform scale-110',
            opacity: 'opacity-100',
            zIndex: 'z-20',
            order: 2,
            textSize: 'text-xl md:text-2xl text-gray-900'
          };
        case 'left1':
        case 'right1':
          return {
            size: 'w-48 h-48 md:w-56 md:h-56',
            border: 'border-2 border-white',
            scale: 'transform scale-100',
            opacity: 'opacity-95',
            zIndex: 'z-10',
            order: position === 'left1' ? 1 : 3,
            textSize: 'text-lg text-gray-800'
          };
        case 'left2':
        case 'right2':
          return {
            size: 'w-40 h-40 md:w-48 md:h-48',
            border: 'border-2 border-white',
            scale: 'transform scale-90',
            opacity: 'opacity-80',
            zIndex: 'z-0',
            order: position === 'left2' ? 0 : 4,
            textSize: 'text-base text-gray-700'
          };
        default:
          const exhaustiveCheck: never = position;
          return exhaustiveCheck;
      }
    };
    
    const style = getCardStyle();
    
    return (
      <div 
        className={`flex flex-col items-center transition-all duration-700 ease-in-out cursor-pointer ${style.scale} ${style.opacity} ${style.zIndex}`}
        style={{ order: style.order }}
        onClick={onClick}
      >
        <div 
          className={`relative rounded-full overflow-hidden shadow-lg mb-4 transition-all duration-700 ease-in-out ${style.size} ${style.border}`}
        >
          {imageErrors[`teamMember-${index}`] ? (
            <ImageFallback 
              width={position === 'middle' ? 256 : 208} 
              height={position === 'middle' ? 256 : 208} 
              text={teamMember.name} 
            />
          ) : (
            <img
              src={teamMember.imageUrl}
              alt={teamMember.alt}
              className="w-full h-full object-cover"
              onError={() => handleImageError(`teamMember-${index}`)}
            />
          )}
        </div>
        <h3 className={`font-semibold transition-all duration-700 ease-in-out ${style.textSize}`}>
          {teamMember.name}
        </h3>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Our Team</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of educators who are committed to providing the best learning experience for every student.
          </p>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">Our Team</h2>
          <div className="flex justify-center items-center relative h-80">
            {/* Background decoration */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-64 h-64 bg-blue-100 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            {/* Removed the side navigation buttons */}
            
            <div className="flex items-end justify-center gap-2 md:gap-4 relative z-10 w-full max-w-5xl">
              {visibleTeamMembers.map((teamMember) => (
                <TeamMemberCard 
                  key={teamMember.index}
                  teamMember={teamMember} 
                  position={teamMember.position} 
                  index={teamMember.index} 
                  onClick={() => handleTeamMemberClick(teamMember.index)} 
                />
              ))}
            </div>
          </div>
          
          {/* Small Navigation Buttons at Bottom - only navigation buttons */}
          <div className="flex justify-center items-center mt-12 space-x-6">
            <SmallNavButton direction="left" onClick={handlePrevClick} />
            <SmallNavButton direction="right" onClick={handleNextClick} />
          </div>
        </div>
        <OurJourney/>
        {/* Why It Works Section */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-10">Why it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-100 rounded-full">
                    {imageErrors[`icon-${index}`] ? (
                      <IconFallback />
                    ) : (
                      <Image
                        src={feature.icon}
                        alt={`${feature.title} icon`}
                        width={32}
                        height={32}
                        onError={() => handleImageError(`icon-${index}`)}
                      />
                    )}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-center mb-2 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Content */}
        <div className="mt-16 bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Our Commitment to Education</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto">
            We believe that every student deserves access to high-quality education. Our team of experienced educators works tirelessly to create engaging, effective learning materials that help students achieve their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}