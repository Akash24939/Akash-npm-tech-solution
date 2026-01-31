
import React from 'react';
import { PlayCircle, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onAction: () => void;
}

const Hero: React.FC<HeroProps> = ({ onAction }) => {
  return (
    <section className="pt-20 pb-20 md:pt-28 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-4 py-2 rounded-full text-blue-700 text-sm font-semibold animate-bounce-subtle">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Smart POS for Modern Retail
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1]">
              Smart POS Billing System for <span className="text-blue-600">Faster Business</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl">
              Easy billing, inventory management, GST compliance, and real-time reports – everything your business needs in one powerful POS solution.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button 
                onClick={onAction}
                className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all active:scale-95"
              >
                Start Free Trial
              </button>
              <button 
                onClick={onAction}
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white border-2 border-slate-100 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:border-blue-200 hover:bg-slate-50 transition-all active:scale-95"
              >
                <PlayCircle size={24} className="text-blue-600" />
                Request Demo
              </button>
            </div>

            <div className="flex items-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <CheckCircle2 size={18} className="text-green-500" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2 text-slate-600 text-sm font-medium">
                <CheckCircle2 size={18} className="text-green-500" />
                14-Day Free Trial
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-indigo-400/10 rounded-full blur-3xl -z-10"></div>
            
            {/* Mockup Representation */}
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 p-3 overflow-hidden animate-float">
              <div className="bg-slate-100 rounded-2xl p-4 overflow-hidden border border-slate-200">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>
                  <div className="h-6 w-32 bg-slate-200 rounded-full"></div>
                </div>
                
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-8 space-y-3">
                    <div className="h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center px-4 justify-between">
                      <div className="w-24 h-4 bg-slate-100 rounded"></div>
                      <div className="w-12 h-4 bg-blue-100 rounded"></div>
                    </div>
                    <div className="h-40 bg-white rounded-xl shadow-sm border border-slate-100 p-4 space-y-4">
                      <div className="flex justify-between border-b border-slate-50 pb-2">
                        <div className="w-32 h-3 bg-slate-50 rounded"></div>
                        <div className="w-12 h-3 bg-slate-50 rounded"></div>
                      </div>
                      <div className="flex justify-between border-b border-slate-50 pb-2">
                        <div className="w-24 h-3 bg-slate-50 rounded"></div>
                        <div className="w-12 h-3 bg-slate-50 rounded"></div>
                      </div>
                    </div>
                    <div className="h-24 bg-blue-600 rounded-xl shadow-lg p-4 text-white">
                      <div className="text-xs opacity-80 uppercase tracking-wider mb-1 font-bold">Total Amount</div>
                      <div className="text-3xl font-black">₹ 12,450.00</div>
                    </div>
                  </div>
                  
                  <div className="col-span-4 space-y-3">
                    <div className="grid grid-cols-2 gap-2">
                      {[1,2,3,4,5,6].map(i => (
                        <div key={i} className="aspect-square bg-white rounded-xl shadow-sm border border-slate-100 flex flex-col items-center justify-center p-2">
                          <div className="w-8 h-8 bg-slate-50 rounded-lg mb-2"></div>
                          <div className="w-10 h-2 bg-slate-100 rounded"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        @keyframes bounce-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-bounce-subtle { animation: bounce-subtle 3s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
