import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Mock data - will be replaced with real data later
  const profileCompletion = 75;
  const recentConnections = [
    { id: 1, name: 'John Doe', major: 'Computer Science', university: 'Stanford' },
    { id: 2, name: 'Jane Smith', major: 'Data Science', university: 'MIT' },
    { id: 3, name: 'Mike Johnson', major: 'Software Engineering', university: 'UC Berkeley' }
  ];

  const recommendations = [
    { id: 1, name: 'Sarah Wilson', matchScore: 95, skills: ['React', 'Node.js'], interests: ['Web Development'] },
    { id: 2, name: 'Tom Brown', matchScore: 88, skills: ['Python', 'Machine Learning'], interests: ['AI/ML'] },
    { id: 3, name: 'Emma Davis', matchScore: 82, skills: ['UI/UX Design'], interests: ['Web Development'] }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Profile Summary */}
        <div className="bg-white shadow rounded-lg mb-6">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Your Profile
                </h3>
                <div className="mt-2">
                  <div className="relative pt-1">
                    <div className="flex mb-2 items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-indigo-600 bg-indigo-200">
                          Profile Completion
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs font-semibold inline-block text-indigo-600">
                          {profileCompletion}%
                        </span>
                      </div>
                    </div>
                    <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-indigo-200">
                      <div
                        style={{ width: `${profileCompletion}%` }}
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-indigo-500"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/profile/edit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Edit Profile
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Recent Connections */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recent Connections
              </h3>
              <div className="mt-4 space-y-4">
                {recentConnections.map((connection) => (
                  <div
                    key={connection.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{connection.name}</p>
                      <p className="text-sm text-gray-500">
                        {connection.major} at {connection.university}
                      </p>
                    </div>
                    <Link
                      to={`/profile/${connection.id}`}
                      className="text-sm text-indigo-600 hover:text-indigo-900"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to="/connections"
                  className="text-sm text-indigo-600 hover:text-indigo-900"
                >
                  View all connections →
                </Link>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Recommended Partners
              </h3>
              <div className="mt-4 space-y-4">
                {recommendations.map((recommendation) => (
                  <div
                    key={recommendation.id}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                  >
                    <div>
                      <p className="text-sm font-medium text-gray-900">{recommendation.name}</p>
                      <p className="text-sm text-gray-500">
                        Match Score: {recommendation.matchScore}%
                      </p>
                      <div className="mt-1 flex flex-wrap gap-1">
                        {recommendation.skills.map((skill) => (
                          <span
                            key={skill}
                            className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link
                      to={`/profile/${recommendation.id}`}
                      className="text-sm text-indigo-600 hover:text-indigo-900"
                    >
                      View Profile
                    </Link>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  to="/find-partners"
                  className="text-sm text-indigo-600 hover:text-indigo-900"
                >
                  Find more partners →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 