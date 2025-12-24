import React from 'react';

interface PlaceholderImageProps {
  label: string;
  height?: string;
  seed?: number; // To generate different random images
}

export const PlaceholderImage: React.FC<PlaceholderImageProps> = ({ label, height = "h-64 md:h-96", seed = 1 }) => {
  // Using picsum for aesthetically pleasing grayscale placeholders
  const imageUrl = `https://picsum.photos/seed/${seed}/800/600?grayscale`;

  return (
    <div className={`w-full ${height} bg-gray-100 relative overflow-hidden rounded-sm shadow-sm group my-8`}>
      <img 
        src={imageUrl} 
        alt={label}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700 ease-in-out"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-transparent transition-colors duration-500">
        <span className="bg-white/80 backdrop-blur-sm px-4 py-2 text-xs font-mono uppercase tracking-widest text-black border border-gray-200">
          {label}
        </span>
      </div>
    </div>
  );
};