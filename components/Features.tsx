
import React from 'react';
import { 
  FileText, Package, Calculator, BarChart3, 
  Users, UserPlus, CloudOff, Cloud 
} from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    { title: 'Fast Billing & Invoicing', desc: 'Create and print invoices in seconds with shortcut keys.', icon: <FileText /> },
    { title: 'Inventory Management', desc: 'Track stock levels, low stock alerts, and bulk imports.', icon: <Package /> },
    { title: 'GST & Tax Calculation', desc: 'Automatic HSN-wise GST reports for hassle-free filing.', icon: <Calculator /> },
    { title: 'Sales & Profit Reports', desc: 'Deep insights into your daily sales and net profit margins.', icon: <BarChart3 /> },
    { title: 'Customer Management', desc: 'Maintain loyalty programs and customer purchase history.', icon: <UserPlus /> },
    { title: 'Multi-User Access', desc: 'Assign specific roles and permissions to your staff.', icon: <Users /> },
    { title: 'Offline & Online Mode', desc: 'Keep billing even when the internet goes down.', icon: <CloudOff /> },
    { title: 'Cloud Backup', desc: 'Your data is securely backed up and accessible from anywhere.', icon: <Cloud /> },
  ];

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Powerful Features to Grow Your Business</h2>
            <p className="text-slate-600">Advanced tools that simplify your daily operations and boost your bottom line.</p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
            See All Features <span>→</span>
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:-translate-y-2 transition-transform duration-300">
              <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                {/* Fix: Added 'any' type to React.ReactElement to permit 'size' property in cloneElement */}
                {React.cloneElement(feature.icon as React.ReactElement<any>, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
