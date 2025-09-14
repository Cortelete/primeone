import React from 'react';

const ClientCard: React.FC<{ name: string, logo: string }> = ({ name, logo }) => (
  <div className="bg-white/5 p-4 rounded-lg flex items-center space-x-4 hover:bg-white/10 transition-colors">
    <div className="w-16 h-16 bg-slate-800/50 rounded-md flex items-center justify-center p-2 flex-shrink-0">
        <img src={logo} alt={`${name} logo`} className="max-w-full max-h-full object-contain" />
    </div>
    <h3 className="font-semibold text-lg text-slate-200">{name}</h3>
  </div>
);

const ClientsModalContent: React.FC = () => {
  const clients = [
    { name: "Florida Fine Cars", logo: "/logoclient1.png" },
    { name: "Lexus of North Miami", logo: "/logoclient2.png" },
    { name: "Prestige Imports", logo: "/logoclient3.png" },
    { name: "Gunther VW", logo: "/logoclient4.png" },
    { name: "Ferrari of Fort Lauderdale", logo: "/logoclient5.png" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-slate-100 to-slate-400 bg-clip-text text-transparent">Our Valued Partners</h2>
      <p className="text-center text-gray-400 mb-6">We're proud to provide our premium services to these leading dealerships.</p>
      <div className="space-y-3 max-h-80 overflow-y-auto pr-2">
        {clients.map(client => <ClientCard key={client.name} {...client} />)}
      </div>
    </div>
  );
};

export default ClientsModalContent;