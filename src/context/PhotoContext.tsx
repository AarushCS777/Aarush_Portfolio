import React, { createContext, useContext, useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface PhotoContextType {
  heroPhoto: string;
  aboutPhoto: string;
  isOwnerModalOpen: boolean;
  openOwnerModal: () => void;
  closeOwnerModal: () => void;
  updateHeroPhoto: (url: string) => void;
  updateAboutPhoto: (url: string) => void;
  resetHeroPhoto: () => void;
  resetAboutPhoto: () => void;
  resetAllPhotos: () => void;
}

const STORAGE_HERO_KEY = 'aarush_portfolio_hero_photo_v2';
const STORAGE_ABOUT_KEY = 'aarush_portfolio_about_photo_v2';

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [heroPhoto, setHeroPhotoState] = useState<string>(() => {
    return localStorage.getItem(STORAGE_HERO_KEY) || PERSONAL_INFO.heroImage;
  });

  const [aboutPhoto, setAboutPhotoState] = useState<string>(() => {
    return localStorage.getItem(STORAGE_ABOUT_KEY) || PERSONAL_INFO.aboutImage;
  });

  const [isOwnerModalOpen, setIsOwnerModalOpen] = useState(false);

  // Sync state changes with localStorage
  const updateHeroPhoto = (url: string) => {
    setHeroPhotoState(url);
    localStorage.setItem(STORAGE_HERO_KEY, url);
  };

  const updateAboutPhoto = (url: string) => {
    setAboutPhotoState(url);
    localStorage.setItem(STORAGE_ABOUT_KEY, url);
  };

  const resetHeroPhoto = () => {
    setHeroPhotoState(PERSONAL_INFO.heroImage);
    localStorage.removeItem(STORAGE_HERO_KEY);
  };

  const resetAboutPhoto = () => {
    setAboutPhotoState(PERSONAL_INFO.aboutImage);
    localStorage.removeItem(STORAGE_ABOUT_KEY);
  };

  const resetAllPhotos = () => {
    resetHeroPhoto();
    resetAboutPhoto();
  };

  const openOwnerModal = () => setIsOwnerModalOpen(true);
  const closeOwnerModal = () => setIsOwnerModalOpen(false);

  // Global keyboard shortcut (Alt + P or Ctrl + Shift + P) for private owner access
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.altKey && (e.key === 'p' || e.key === 'P')) || 
          (e.ctrlKey && e.shiftKey && (e.key === 'p' || e.key === 'P'))) {
        e.preventDefault();
        setIsOwnerModalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <PhotoContext.Provider
      value={{
        heroPhoto,
        aboutPhoto,
        isOwnerModalOpen,
        openOwnerModal,
        closeOwnerModal,
        updateHeroPhoto,
        updateAboutPhoto,
        resetHeroPhoto,
        resetAboutPhoto,
        resetAllPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
