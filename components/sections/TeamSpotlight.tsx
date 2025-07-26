export default function TeamSpotlight() {
  const team = [
    {
      name: 'Jane Doe',
      career: 'Engineering',
      role: 'Team Spotlight',
      bio: 'Leading with passion and clarity to drive innovation across teams.',
      img: '/team/jane.jpg',
    },
    {
      name: 'John Smith',
      career: 'New Hire - Data Scientist',
      role: 'New Hire',
      bio: 'John recently joined our Data Science team bringing fresh perspectives and expertise in predictive analytics and',
      img: '/team/john.jpg',
    },
    {
      name: 'Emily Rose',
      career: 'UI/UX Designer',
      role: 'Team Spotlight',
      bio: 'Emily crafts intuitive and beautiful user experience for all our products ensuring our interfaces are both',
      img: '/team/emily.jpg',
    },
    {
      name: 'Michael Ray',
      career: 'New Hire - Cloud Architect',
      role: 'New Hire',
      bio: 'Michael is a crucial addition to our infrastructure team, specializing in scalable cloud solutions and',
      img: '/team/michael.jpg',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title and link */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-10">
          <h2 className="text-3xl font-bold text-black">Team Spotlight</h2>
          <a
            href="#"
            className="mt-2 md:mt-0 inline-block bg-blue-100 text-blue-700 font-semibold py-2 px-4 rounded-full shadow-sm hover:bg-blue-200 transition"
          >
            Meet our team
          </a>
        </div>

        {/* Team cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow text-center hover:shadow-md transition"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover mb-4 border-4 border-gray-200"
              />
              <h3 className="text-lg font-bold text-black">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium">{member.career}</p>

              {/* Bold rounded role badge */}
              <p
                className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-2 ${
                  member.role === 'Team Spotlight'
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {member.role}
              </p>

              <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
              <a
                href="#"
                className="text-blue-500 hover:underline font-medium text-sm"
              >
                View Profile →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
