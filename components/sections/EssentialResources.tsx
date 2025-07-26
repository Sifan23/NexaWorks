// components/EssentialResources.jsx
import { Book, Link2, Info } from 'lucide-react';

export default function EssentialResources() {
  const resources = [
    {
      title: 'Company Handbook',
      icon: <Book />,
      description: 'All rules, values, and general knowledge about our organization.',
      href: '#',
    },
    {
      title: 'Policies & Guidelines',
      icon: <Info />,
      description: 'Important legal, HR, and operational policies you must know.',
      href: '#',
    },
    {
      title: 'IT Support',
      icon: <Link2 />,
      description: 'Need tech help? Submit tickets or access tools.',
      href: '#',
    },
    {
      title: 'HR Services',
      icon: <Link2 />,
      description: 'Benefits, leave requests, and personal support.',
      href: '#',
    },
    {
      title: 'Project Templates',
      icon: <Link2 />,
      description: 'Use our base templates to start your projects quickly.',
      href: '#',
    },
    {
      title: 'Meeting Room Booking',
      icon: <Link2 />,
      description: 'Find and reserve a room for your next meeting.',
      href: '#',
    },
    {
      title: 'Brand Assets',
      icon: <Link2 />,
      description: 'Download company logos, fonts, and design assets.',
      href: '#',
    },
    {
      title: 'FAQs',
      icon: <Link2 />,
      description: 'Commonly asked questions and their answers.',
      href: '#',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Left-aligned title */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-black">Essential Resources</h2>
        </div>

        {/* Centered grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {resources.map((res, idx) => (
            <a
              key={idx}
              href={res.href}
              className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-md transition block"
            >
              <div className="text-blue-600 text-2xl mb-3 flex justify-center">{res.icon}</div>
              <h3 className="text-lg font-semibold mb-1 text-gray-800">{res.title}</h3>
              <p className="text-sm text-gray-600">{res.description}</p>
              <p className="text-blue-600 font-medium mt-2">Access</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
