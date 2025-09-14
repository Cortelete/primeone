
import React from 'react';

const ClientCard: React.FC<{ name: string, images: [string, string] }> = ({ name, images }) => (
  <div className="bg-white/5 p-4 rounded-lg">
    <h3 className="font-semibold text-lg mb-2 text-cyan-400">{name}</h3>
    <div className="grid grid-cols-2 gap-3">
      <img src={images[0]} alt={`${name} example 1`} className="rounded-md aspect-video object-cover" />
      <img src={images[1]} alt={`${name} example 2`} className="rounded-md aspect-video object-cover" />
    </div>
  </div>
);

const ClientsModalContent: React.FC = () => {
  const clients = [
    { name: "Florida Fine Cars", images: ["https://picsum.photos/seed/ffc1/300/200", "https://picsum.photos/seed/ffc2/300/200"] as [string, string] },
    { name: "Lexus of North Miami", images: ["https://picsum.photos/seed/lexus1/300/200", "https://picsum.photos/seed/lexus2/300/200"] as [string, string] },
    { name: "Prestige Imports", images: ["https://picsum.photos/seed/prestige1/300/200", "https://picsum.photos/seed/prestige2/300/200"] as [string, string] },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Our Valued Partners</h2>
      <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
        {clients.map(client => <ClientCard key={client.name} {...client} />)}
      </div>
    </div>
  );
};

export default ClientsModalContent;
