import React from "react";
import Header from "../../Header";
import Footer from "../../Footer";

const OurTeam = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Team</h1>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadershipTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 rounded-full bg-gray-200 mx-auto mb-4 overflow-hidden">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-red-600 mb-2">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Editorial Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {editorialTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-red-600 text-sm mb-2">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">
            Operations & Technology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techTeam.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gray-200 mx-auto mb-3 overflow-hidden">
                  <img
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${member.name}`}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-red-600 text-sm mb-2">{member.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            We're always looking for talented individuals to join our growing
            team. Check out our current openings or send us your resume for
            future opportunities.
          </p>
          <button className="bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors duration-300">
            View Career Opportunities
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const leadershipTeam = [
  {
    name: "Jonathan Reynolds",
    position: "Chief Executive Officer",
    bio: "With over 20 years of experience in media and business, Jonathan leads our organization with a vision for innovation and excellence.",
  },
  {
    name: "Sophia Chen",
    position: "Editor-in-Chief",
    bio: "Sophia brings 15 years of journalism experience to her role overseeing all editorial content and maintaining our high standards.",
  },
  {
    name: "Marcus Williams",
    position: "Chief Technology Officer",
    bio: "Marcus leads our digital transformation, ensuring our platforms deliver the best possible experience for our audience.",
  },
];

const editorialTeam = [
  {
    name: "Olivia Martinez",
    position: "Senior Editor, Technology",
  },
  {
    name: "Daniel Kim",
    position: "Senior Editor, Finance",
  },
  {
    name: "Priya Sharma",
    position: "Senior Editor, Startups",
  },
  {
    name: "James Wilson",
    position: "Senior Editor, Leadership",
  },
  {
    name: "Emma Thompson",
    position: "Senior Writer",
  },
  {
    name: "Michael Johnson",
    position: "Senior Writer",
  },
  {
    name: "Sarah Lee",
    position: "Staff Writer",
  },
  {
    name: "Robert Chen",
    position: "Staff Writer",
  },
];

const techTeam = [
  {
    name: "David Rodriguez",
    position: "Head of Product",
  },
  {
    name: "Jennifer Wu",
    position: "UX/UI Lead",
  },
  {
    name: "Thomas Anderson",
    position: "Senior Developer",
  },
  {
    name: "Aisha Patel",
    position: "Data Analyst",
  },
  {
    name: "Carlos Mendez",
    position: "DevOps Engineer",
  },
  {
    name: "Lisa Johnson",
    position: "QA Specialist",
  },
  {
    name: "Kevin Zhang",
    position: "Frontend Developer",
  },
  {
    name: "Natalie Brown",
    position: "Backend Developer",
  },
];

export default OurTeam;
