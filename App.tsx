
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import TargetBusinesses from './components/TargetBusinesses';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import ProductScreens from './components/ProductScreens';
import Benefits from './components/Benefits';
import Pricing from './components/Pricing';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import Login from './components/Login';
import AdminAddPrice from './components/AdminAddPrice';

export type ViewType = 'login' | 'home' | 'features' | 'pricing' | 'contact' | 'addPrice';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ViewType>('login');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  
  // Dynamic pricing state
  const [prices, setPrices] = useState({
    basic: '499',
    standard: '999',
    premium: '1,999'
  });

  const handleLogin = (adminStatus: boolean) => {
    setIsLoggedIn(true);
    setIsAdmin(adminStatus);
    setActiveTab('home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setActiveTab('login');
  };

  const ViewWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500 ease-out min-h-[70vh]">
      {children}
    </div>
  );

  const renderContent = () => {
    if (!isLoggedIn) {
      return (
        <ViewWrapper>
          <Login onLogin={handleLogin} />
        </ViewWrapper>
      );
    }

    switch (activeTab) {
      case 'home':
        return (
          <ViewWrapper>
            <Hero onAction={() => setActiveTab('contact')} />
            <TrustSection />
            <ProductScreens />
            <CTASection onAction={() => setActiveTab('contact')} />
          </ViewWrapper>
        );
      case 'features':
        return (
          <ViewWrapper>
            <TargetBusinesses />
            <Features />
            <HowItWorks />
            <Benefits />
            <CTASection onAction={() => setActiveTab('contact')} />
          </ViewWrapper>
        );
      case 'pricing':
        return (
          <ViewWrapper>
            <Pricing customPrices={prices} />
            <WhyChooseUs />
            <CTASection onAction={() => setActiveTab('contact')} />
          </ViewWrapper>
        );
      case 'contact':
        return (
          <ViewWrapper>
            <div className="bg-white py-24">
              <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                  <div>
                    <Testimonials />
                    <div className="mt-12">
                      <FAQ />
                    </div>
                  </div>
                  <div className="sticky top-32">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </ViewWrapper>
        );
      case 'addPrice':
        return isAdmin ? (
          <ViewWrapper>
            <AdminAddPrice currentPrices={prices} onUpdate={setPrices} />
          </ViewWrapper>
        ) : (
          <div className="flex items-center justify-center h-96 text-red-500 font-bold">Unauthorized</div>
        );
      default:
        return <Hero onAction={() => setActiveTab('contact')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        isLoggedIn={isLoggedIn} 
        isAdmin={isAdmin} 
        onLogout={handleLogout}
      />
      <main className="flex-grow pt-20">
        {renderContent()}
      </main>
      {isLoggedIn && <Footer onTabChange={setActiveTab} />}
    </div>
  );
};

export default App;
