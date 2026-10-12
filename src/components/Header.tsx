import React, { useState } from 'react';
import { ASSETS } from '../data/mockData';

interface HeaderProps {
  activeScreen: string;
  setActiveScreen: (screen: string) => void;
  onOpenPlanModal: () => void;
  onOpenClientDesk: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeScreen,
  setActiveScreen,
  onOpenPlanModal,
  onOpenClientDesk
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'overview', label: 'Home' },
    { id: 'corporate-offsites', label: 'Corporate Offsites' },
    { id: 'custom-holidays', label: 'Custom Holidays' },
    { id: 'about-us', label: 'About Us' },
    { id: 'client-stories', label: 'Client Stories' }
  ];

  const handleNavClick = (id: string) => {
    setActiveScreen(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#FAFAF9]/90 backdrop-blur-md border-b border-[#E5E7EB]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-6">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('overview')}
          className="flex items-center gap-4 text-left group cursor-pointer focus:outline-none"
        >
          <img
            src="/arounddworld-logo.jpg"
            alt="Around D World"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col justify-center">
            <span className="text-[0.875rem] font-semibold tracking-widest uppercase text-[#0F283D] leading-tight">
              Around D World
            </span>
            <span className="text-[0.6875rem] text-[#43474c] font-normal tracking-wide">
              Travel &amp; Corporate Events
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.slice(1).map((link) => {
            const isActive = activeScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-[0.75rem] font-semibold uppercase tracking-wider transition-all py-1 relative cursor-pointer ${
                  isActive ? 'text-[#0F283D]' : 'text-[#43474c] hover:text-[#0F283D]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D97706]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* WhatsApp Direct Action */}
          <a
            className="flex items-center gap-1.5 px-3 py-2 rounded-full border border-[#E5E7EB] bg-[#F4F1EA] text-[#0F283D] hover:border-[#0F283D] transition-colors shadow-2xs"
            href="https://wa.me/919820048200?text=Hello%20Around%20D%20World%2C%20I%20would%20like%20to%20consult%20with%20your%20senior%20travel%20desk."
            rel="noopener noreferrer"
            target="_blank"
            title="WhatsApp Concierge Desk"
          >
            <span className="material-symbols-outlined text-[18px] text-[#0F283D]">chat</span>
            <span className="hidden sm:inline text-[0.6875rem] font-semibold uppercase tracking-wider text-[#0F283D]">
              WhatsApp
            </span>
          </a>

          {/* Plan Your Trip CTA */}
          <button
            onClick={onOpenPlanModal}
            className="px-5 py-2.5 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest hover:bg-[#001323] transition-all relative group overflow-hidden shadow-[0_12px_32px_-4px_rgba(15,40,61,0.08)] cursor-pointer"
          >
            <span className="relative z-10">Plan Your Trip</span>
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D97706] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
          </button>

          {/* Client Portal / Executive Desk Trigger */}
          <button
            onClick={onOpenClientDesk}
            title="Executive Client Desk & Saved Inquiries"
            className="w-8 h-8 rounded-full bg-[#001323] hover:bg-[#0F283D] text-white flex items-center justify-center shrink-0 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">person</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-1.5 text-[#0F283D] focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#FAFAF9] border-b border-[#E5E7EB] px-6 py-6 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`text-left text-[0.875rem] font-semibold uppercase tracking-wider py-2 flex items-center justify-between ${
                activeScreen === link.id ? 'text-[#D97706] pl-2 border-l-2 border-[#D97706]' : 'text-[#0F283D]'
              }`}
            >
              <span>{link.label}</span>
              <span className="material-symbols-outlined text-[18px]">chevron_right</span>
            </button>
          ))}
          <div className="pt-4 border-t border-[#E5E7EB] flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPlanModal();
              }}
              className="w-full py-3 rounded-full bg-[#0F283D] text-white text-[0.75rem] font-semibold uppercase tracking-widest text-center"
            >
              Plan Your Trip
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenClientDesk();
              }}
              className="w-full py-2.5 rounded-full border border-[#0F283D] text-[#0F283D] text-[0.75rem] font-semibold uppercase tracking-widest text-center"
            >
              Executive Desk &amp; Inquiries
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
