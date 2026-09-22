import React, { useState, useRef } from 'react';
import { X, Upload, Link as LinkIcon, RefreshCw, Check, Image as ImageIcon, Sparkles, ShieldCheck } from 'lucide-react';
import { usePhotos } from '../context/PhotoContext';
import { PERSONAL_INFO } from '../data/portfolioData';

export const OwnerPhotoModal: React.FC = () => {
  const {
    heroPhoto,
    aboutPhoto,
    isOwnerModalOpen,
    closeOwnerModal,
    updateHeroPhoto,
    updateAboutPhoto,
    resetHeroPhoto,
    resetAboutPhoto,
    resetAllPhotos,
  } = usePhotos();

  const [activeTab, setActiveTab] = useState<'hero' | 'about'>('hero');
  const [inputUrl, setInputUrl] = useState('');
  const [dragActive, setDragActive] = useState(false);
  const [previewError, setPreviewError] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOwnerModalOpen) return null;

  const currentPhoto = activeTab === 'hero' ? heroPhoto : aboutPhoto;

  const showNotification = (msg: string) => {
    setSuccessMessage(msg);
    setTimeout(() => setSuccessMessage(null), 3000);
  };

  const handleFileUpload = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (PNG, JPG, WebP, etc.).');
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const dataUrl = e.target?.result as string;
      if (dataUrl) {
        if (activeTab === 'hero') {
          updateHeroPhoto(dataUrl);
          showNotification('Hero circular avatar updated successfully!');
        } else {
          updateAboutPhoto(dataUrl);
          showNotification('About section 4:5 portrait updated successfully!');
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleApplyUrl = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = inputUrl.trim();
    if (!cleanUrl) return;

    if (activeTab === 'hero') {
      updateHeroPhoto(cleanUrl);
      showNotification('Hero photo URL updated!');
    } else {
      updateAboutPhoto(cleanUrl);
      showNotification('About photo URL updated!');
    }
    setInputUrl('');
  };

  const handleResetCurrent = () => {
    if (activeTab === 'hero') {
      resetHeroPhoto();
      showNotification('Hero photo reset to default GitHub headshot.');
    } else {
      resetAboutPhoto();
      showNotification('About photo reset to default.');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
      onClick={closeOwnerModal}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#12121a] border border-[#2a2a3d] p-6 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2a2a3d]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#7c6ef7]/20 border border-[#7c6ef7]/40 flex items-center justify-center text-[#a89cf7]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h2 className="text-base font-bold text-[#e8e8f0]">Owner Photo Manager</h2>
              <p className="text-xs text-[#888899]">Private controls · Hidden from public visitors</p>
            </div>
          </div>

          <button
            onClick={closeOwnerModal}
            id="close-owner-modal-btn"
            className="p-1.5 rounded-lg text-[#888899] hover:text-white hover:bg-[#1a1a26] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Notice */}
        <div className="my-4 p-3 rounded-lg bg-[#1a1a26]/70 border border-[#7c6ef7]/20 text-xs text-[#888899] flex items-start gap-2.5">
          <Sparkles className="w-4 h-4 text-[#7c6ef7] shrink-0 mt-0.5" />
          <span>
            Changes made here are saved to your browser and immediately active. Public viewers will see your photos cleanly without any upload buttons or menus.
          </span>
        </div>

        {/* Section Selector Tabs */}
        <div className="flex rounded-lg bg-[#0a0a0f] p-1 border border-[#2a2a3d] mb-5">
          <button
            type="button"
            onClick={() => {
              setActiveTab('hero');
              setPreviewError(false);
            }}
            id="tab-hero-photo"
            className={`flex-1 py-2 text-xs font-mono font-medium rounded-md transition-all flex items-center justify-center gap-2 ${
              activeTab === 'hero'
                ? 'bg-[#7c6ef7] text-white shadow-md'
                : 'text-[#888899] hover:text-[#e8e8f0]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span>1. Hero Headshot (Round)</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('about');
              setPreviewError(false);
            }}
            id="tab-about-photo"
            className={`flex-1 py-2 text-xs font-mono font-medium rounded-md transition-all flex items-center justify-center gap-2 ${
              activeTab === 'about'
                ? 'bg-[#7c6ef7] text-white shadow-md'
                : 'text-[#888899] hover:text-[#e8e8f0]'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-white/60" />
            <span>2. About Portrait (4:5)</span>
          </button>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="mb-4 p-2.5 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-400" />
            <span>{successMessage}</span>
          </div>
        )}

        {/* Live Preview Card */}
        <div className="flex items-center gap-4 p-4 rounded-xl bg-[#0a0a0f] border border-[#2a2a3d] mb-5">
          <div className="shrink-0 flex items-center justify-center">
            {activeTab === 'hero' ? (
              <div className="w-20 h-20 rounded-full p-1 bg-gradient-to-tr from-[#7c6ef7] to-[#a89cf7] shadow-lg">
                <img
                  src={currentPhoto}
                  alt="Hero Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full rounded-full object-cover object-top bg-[#12121a]"
                  onError={() => setPreviewError(true)}
                />
              </div>
            ) : (
              <div className="w-16 h-20 rounded-lg overflow-hidden border border-[#7c6ef7]/50 shadow-lg bg-[#12121a]">
                <img
                  src={currentPhoto}
                  alt="About Preview"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top"
                  onError={() => setPreviewError(true)}
                />
              </div>
            )}
          </div>

          <div className="flex-1 min-w-0">
            <span className="text-[11px] font-mono text-[#a89cf7] uppercase tracking-wider block mb-0.5">
              Current Active Photo
            </span>
            <p className="text-xs text-[#888899] truncate mb-2">
              {activeTab === 'hero' ? 'Main hero circular avatar' : 'About section professional portrait'}
            </p>
            <button
              type="button"
              onClick={handleResetCurrent}
              id="reset-current-photo-btn"
              className="inline-flex items-center gap-1.5 text-xs text-[#888899] hover:text-[#a89cf7] transition-colors"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Reset to default</span>
            </button>
          </div>
        </div>

        {/* Quick Presets for Uploaded Photos */}
        <div className="mb-4 p-3 rounded-xl bg-[#0a0a0f] border border-[#2a2a3d]">
          <span className="text-[11px] font-mono text-[#a89cf7] uppercase tracking-wider block mb-2">
            Uploaded Photos Quick Presets
          </span>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => {
                if (activeTab === 'hero') {
                  updateHeroPhoto('/imggg.jpeg');
                  showNotification('Applied imggg.jpeg (Smiling Portrait) to Hero!');
                } else {
                  updateAboutPhoto('/imggg.jpeg');
                  showNotification('Applied imggg.jpeg (Smiling Portrait) to About!');
                }
              }}
              id="preset-smiling-photo"
              className="p-2 rounded-lg bg-[#161622] hover:bg-[#1f1f30] border border-[#2a2a3d] hover:border-[#7c6ef7]/60 text-left transition-all group"
            >
              <span className="text-xs font-medium text-[#e8e8f0] block group-hover:text-[#a89cf7]">
                😊 Smiling Portrait
              </span>
              <span className="text-[10px] font-mono text-[#888899]">
                imggg.jpeg (White Shirt)
              </span>
            </button>

            <button
              type="button"
              onClick={() => {
                if (activeTab === 'hero') {
                  updateHeroPhoto('/passport_size_pic(01).jpeg');
                  showNotification('Applied passport_size_pic(01).jpeg (Suit) to Hero!');
                } else {
                  updateAboutPhoto('/passport_size_pic(01).jpeg');
                  showNotification('Applied passport_size_pic(01).jpeg (Suit) to About!');
                }
              }}
              id="preset-suit-photo"
              className="p-2 rounded-lg bg-[#161622] hover:bg-[#1f1f30] border border-[#2a2a3d] hover:border-[#7c6ef7]/60 text-left transition-all group"
            >
              <span className="text-xs font-medium text-[#e8e8f0] block group-hover:text-[#a89cf7]">
                👔 Formal Suit
              </span>
              <span className="text-[10px] font-mono text-[#888899]">
                passport_size_pic(01).jpeg
              </span>
            </button>
          </div>
        </div>

        {/* Drag & Drop File Upload Area */}
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          id="photo-upload-dropzone"
          className={`relative border-2 border-dashed rounded-xl p-5 text-center cursor-pointer transition-all mb-4 ${
            dragActive
              ? 'border-[#7c6ef7] bg-[#7c6ef7]/10 scale-[0.99]'
              : 'border-[#2a2a3d] hover:border-[#7c6ef7]/50 bg-[#0a0a0f]/40 hover:bg-[#1a1a26]/40'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            className="hidden"
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handleFileUpload(e.target.files[0]);
              }
            }}
          />
          <Upload className="w-6 h-6 text-[#7c6ef7] mx-auto mb-2" />
          <p className="text-xs font-medium text-[#e8e8f0] mb-0.5">
            Click to choose a photo or drag & drop here
          </p>
          <p className="text-[11px] text-[#888899]">
            Supports JPG, PNG, WebP (will apply to {activeTab === 'hero' ? 'Hero' : 'About'})
          </p>
        </div>

        {/* Or Paste Image URL */}
        <form onSubmit={handleApplyUrl} className="mb-4">
          <label className="block text-xs font-mono text-[#888899] mb-1.5">
            Or use direct image URL:
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <LinkIcon className="w-3.5 h-3.5 text-[#888899] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="url"
                value={inputUrl}
                onChange={(e) => setInputUrl(e.target.value)}
                placeholder="https://example.com/my-photo.jpg"
                className="w-full pl-8 pr-3 py-2 text-xs rounded-lg bg-[#0a0a0f] border border-[#2a2a3d] focus:border-[#7c6ef7] focus:outline-none text-[#e8e8f0] placeholder-[#555566]"
              />
            </div>
            <button
              type="submit"
              disabled={!inputUrl.trim()}
              id="apply-photo-url-btn"
              className="px-3.5 py-2 text-xs font-mono font-medium rounded-lg bg-[#7c6ef7] text-white hover:bg-[#6b5ce7] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Apply
            </button>
          </div>
        </form>

        {/* Modal Footer / Close */}
        <div className="pt-3 border-t border-[#2a2a3d] flex items-center justify-between text-xs font-mono text-[#888899]">
          <span className="text-[11px]">Shortcut: Alt + P</span>
          <button
            type="button"
            onClick={closeOwnerModal}
            id="done-owner-modal-btn"
            className="px-4 py-2 rounded-lg bg-[#1e1e2e] hover:bg-[#2a2a3d] text-[#e8e8f0] transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
