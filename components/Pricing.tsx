
import React from 'react';
import { Check } from 'lucide-react';

interface PricingProps {
  customPrices: { basic: string; standard: string; premium: string };
}

const Pricing: React.FC<PricingProps> = ({ customPrices }) => {
  const plans = [
    {
      name: 'Basic Plan',
      price: `₹ ${customPrices.basic}`,
      period: '/ month',
      desc: 'Ideal for small retail shops',
      features: ['Single Terminal', 'Up to 500 Products', 'Standard Billing', 'Daily Reports', 'Offline Support'],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Standard Plan',
      price: `₹ ${customPrices.standard}`,
      period: '/ month',
      desc: 'Perfect for growing supermarkets',
      features: ['Dual Terminal', 'Unlimited Products', 'Advanced Inventory', 'GST Compliance', 'SMS Notifications', 'Priority Support'],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Premium Plan',
      price: `₹ ${customPrices.premium}`,
      period: '/ month',
      desc: 'For multi-store enterprises',
      features: ['Multi-store Sync', 'Warehouse Management', 'Customer Loyalty App', 'E-commerce Integration', 'API Access', 'Dedicated Manager'],
      cta: 'Get Started',
      popular: false
    }
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Simple, Transparent Pricing</h2>
          <p className="text-slate-600">Choose the plan that fits your business scale. No hidden fees.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={i} 
              className={`relative bg-white p-10 rounded-3xl border transition-all duration-300 ${
                plan.popular 
                ? 'border-blue-500 shadow-2xl scale-105 z-10' 
                : 'border-slate-100 shadow-sm hover:shadow-xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-bold tracking-wide">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm">{plan.desc}</p>
              </div>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-4xl font-black text-slate-900">{plan.price}</span>
                <span className="text-slate-500 font-medium">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-10">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                    <div className="bg-blue-50 text-blue-600 p-1 rounded-full">
                      <Check size={14} />
                    </div>
                    {feat}
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-2xl font-bold transition-all ${
                plan.popular 
                ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-100' 
                : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
