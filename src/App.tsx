/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { CorePractices } from './components/CorePractices';
import { CuratedDestinations } from './components/CuratedDestinations';
import { ExecutiveTestimonial } from './components/ExecutiveTestimonial';
import { LeadershipSection } from './components/LeadershipSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CorporateOffsitesView } from './components/CorporateOffsitesView';
import { CustomHolidaysView } from './components/CustomHolidaysView';
import { AboutUsView } from './components/AboutUsView';
import { ClientStoriesView } from './components/ClientStoriesView';
import { DestinationModal } from './components/DestinationModal';
import { PlanTripModal } from './components/PlanTripModal';
import { CorporateDeckModal } from './components/CorporateDeckModal';
import { CountryDirectoryModal } from './components/CountryDirectoryModal';
import { ClientDeskModal } from './components/ClientDeskModal';
import { LegalModal } from './components/LegalModals';
import { Destination, InquiryRecord } from './types';

export default function App() {
  const [activeScreen, setActiveScreen] = useState<string>('overview');
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isPlanModalOpen, setIsPlanModalOpen] = useState<boolean>(false);
  const [isDeckModalOpen, setIsDeckModalOpen] = useState<boolean>(false);
  const [isDirectoryModalOpen, setIsDirectoryModalOpen] = useState<boolean>(false);
  const [isClientDeskOpen, setIsClientDeskOpen] = useState<boolean>(false);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);
  const [selectedCaseStudyId, setSelectedCaseStudyId] = useState<string | null>(null);
  const [prefillPartner, setPrefillPartner] = useState<string>('');

  // Manage Inquiries in localStorage
  const [inquiries, setInquiries] = useState<InquiryRecord[]>(() => {
    try {
      const saved = localStorage.getItem('adw_inquiries');
      if (saved) return JSON.parse(saved);
    } catch {
      // ignore
    }
    return [
      {
        id: 'ADW-849201',
        fullName: 'Sunil Raghavan',
        organization: 'Fullerton India',
        email: 'sunil.r@fullertonindia.com',
        phone: '+91 98200 48200',
        journeyType: 'corporate',
        paxCount: '250 Pax',
        preferredRegion: 'Southeast Asia (Singapore)',
        targetDates: 'Executed Q3',
        scope: 'Annual 250-delegate leadership conclave in Singapore with Capella Sentosa gala.',
        timestamp: '10:45 AM',
        status: 'Dispatched'
      }
    ];
  });

  useEffect(() => {
    try {
      localStorage.setItem('adw_inquiries', JSON.stringify(inquiries));
    } catch {
      // ignore
    }
  }, [inquiries]);

  const handleInquirySubmitted = (record: InquiryRecord) => {
    setInquiries((prev) => [record, ...prev]);
  };

  const handleScrollToInquiry = () => {
    if (activeScreen !== 'overview') {
      setActiveScreen('overview');
      setTimeout(() => {
        const el = document.getElementById('inquiry');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('inquiry');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToDestinations = () => {
    if (activeScreen !== 'overview') {
      setActiveScreen('overview');
      setTimeout(() => {
        const el = document.getElementById('destinations');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('destinations');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDirectDeskClick = (partnerName: string) => {
    setPrefillPartner(partnerName);
    handleScrollToInquiry();
  };

  const handleCaseStudySelect = (caseId: string) => {
    setSelectedCaseStudyId(caseId);
    setActiveScreen('client-stories');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] text-[#1a1c1c] flex flex-col font-sans selection:bg-[#D97706]/20 selection:text-[#0F283D]">
      {/* Fixed Luxury Navigation Header */}
      <Header
        activeScreen={activeScreen}
        setActiveScreen={setActiveScreen}
        onOpenPlanModal={() => setIsPlanModalOpen(true)}
        onOpenClientDesk={() => setIsClientDeskOpen(true)}
      />

      {/* Main Dynamic Viewport */}
      <main className="w-full pt-20 flex-1">
        {activeScreen === 'overview' && (
          <div className="flex flex-col w-full">
            {/* 1. Immersive Hero Section */}
            <Hero
              onCorporateClick={handleScrollToInquiry}
              onExploreClick={handleScrollToDestinations}
              onOpenDirectory={() => setIsDirectoryModalOpen(true)}
            />

            {/* 2. Client Trust Bar */}
            <TrustBar onCaseStudyClick={handleCaseStudySelect} />

            {/* 3. Two Primary Practices (Split Bento Grid) */}
            <CorePractices
              onRequestCorporateDeck={() => setIsDeckModalOpen(true)}
              onExploreDestinations={() => {
                setActiveScreen('custom-holidays');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />

            {/* 4. Curated Destinations Grid */}
            <CuratedDestinations
              onSelectDestination={(dest) => setSelectedDestination(dest)}
              onOpenDirectory={() => setIsDirectoryModalOpen(true)}
              onInquireClick={handleScrollToInquiry}
            />

            {/* 5. Executive Testimonial Highlight */}
            <ExecutiveTestimonial onViewCaseStudy={handleCaseStudySelect} />

            {/* 6. Eighteen Years of Craft / Foundation */}
            <LeadershipSection onDirectDeskClick={handleDirectDeskClick} />

            {/* 7. Friction-Free Consultation & Inquiry Section */}
            <ContactSection
              onInquirySubmitted={handleInquirySubmitted}
              prefillPartner={prefillPartner}
            />
          </div>
        )}

        {activeScreen === 'corporate-offsites' && (
          <CorporateOffsitesView
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
            onRequestDeck={() => setIsDeckModalOpen(true)}
            onViewCaseStudy={handleCaseStudySelect}
          />
        )}

        {activeScreen === 'custom-holidays' && (
          <CustomHolidaysView
            onSelectDestination={(dest) => setSelectedDestination(dest)}
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
            onOpenDirectory={() => setIsDirectoryModalOpen(true)}
          />
        )}

        {activeScreen === 'about-us' && (
          <AboutUsView
            onDirectDeskClick={handleDirectDeskClick}
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
          />
        )}

        {activeScreen === 'client-stories' && (
          <ClientStoriesView
            onOpenPlanModal={() => setIsPlanModalOpen(true)}
            selectedCaseStudyId={selectedCaseStudyId}
          />
        )}
      </main>

      {/* Global Comprehensive Footer */}
      <Footer
        onNavClick={(screen) => {
          setActiveScreen(screen);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* Interactive Modals */}
      <DestinationModal
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
        onInquire={(dest) => {
          setSelectedDestination(null);
          setIsPlanModalOpen(true);
        }}
      />

      <PlanTripModal
        isOpen={isPlanModalOpen}
        onClose={() => setIsPlanModalOpen(false)}
        onInquiryCreated={handleInquirySubmitted}
        initialDestination={selectedDestination?.name}
      />

      <CorporateDeckModal
        isOpen={isDeckModalOpen}
        onClose={() => setIsDeckModalOpen(false)}
        onPlanTrip={() => setIsPlanModalOpen(true)}
      />

      <CountryDirectoryModal
        isOpen={isDirectoryModalOpen}
        onClose={() => setIsDirectoryModalOpen(false)}
        onSelectCountry={(country) => {
          setIsDirectoryModalOpen(false);
          setIsPlanModalOpen(true);
        }}
      />

      <ClientDeskModal
        isOpen={isClientDeskOpen}
        onClose={() => setIsClientDeskOpen(false)}
        inquiries={inquiries}
        onNewBrief={() => setIsPlanModalOpen(true)}
      />

      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
