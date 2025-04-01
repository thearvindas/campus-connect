import React from 'react';
import { useParams } from 'react-router-dom';

const ProfileView = () => {
  const { id } = useParams();

  // Mock data - will be replaced with real data from backend
  const profile = {
    id: 1,
    name: 'John Doe',
    university: 'Stanford',
    department: 'Computer Science',
    yearOfStudy: '3',
    bio: 'Passionate about web development and machine learning. Looking for study partners for upcoming hackathons and projects.',
    skills: [
      { name: 'React', proficiency: 'Advanced' },
      { name: 'Node.js', proficiency: 'Intermediate' },
      { name: 'Python', proficiency: 'Advanced' },
      { name: 'Machine Learning', proficiency: 'Intermediate' }
    ],
    interests: [
      'Web Development',
      'AI/ML',
      'Data Science',
      'Mobile Development'
    ],
    matchScore: 95
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* Profile Header */}
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                <p className="mt-1 text-sm text-gray-500">
                  {profile.university} - {profile.department}
                </p>
                <p className="text-sm text-gray-500">
                  Year {profile.yearOfStudy}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                  {profile.matchScore}% Match
                </span>
              </div>
            </div>
          </div>

          {/* Profile Content */}
          <div className="px-4 py-5 sm:p-6">
            {/* Bio */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2">About</h2>
              <p className="text-gray-600">{profile.bio}</p>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Skills</h2>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {profile.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-gray-50 rounded-lg p-3 flex justify-between items-center"
                  >
                    <span className="text-sm font-medium text-gray-900">{skill.name}</span>
                    <span className="text-xs text-gray-500">{skill.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Interests</h2>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Message
              </button>
              <button
                type="button"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileView; 