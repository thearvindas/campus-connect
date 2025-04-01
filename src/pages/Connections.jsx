import React, { useState } from 'react';

const Connections = () => {
  const [activeTab, setActiveTab] = useState('all');

  // Mock data - will be replaced with real data from backend
  const connections = [
    {
      id: 1,
      name: 'John Doe',
      university: 'Stanford',
      department: 'Computer Science',
      status: 'connected',
      email: 'john.doe@stanford.edu',
      skills: ['React', 'Node.js'],
      interests: ['Web Development']
    },
    {
      id: 2,
      name: 'Jane Smith',
      university: 'MIT',
      department: 'Data Science',
      status: 'pending',
      email: 'jane.smith@mit.edu',
      skills: ['Python', 'Machine Learning'],
      interests: ['AI/ML']
    },
    {
      id: 3,
      name: 'Mike Johnson',
      university: 'UC Berkeley',
      department: 'Software Engineering',
      status: 'connected',
      email: 'mike.j@berkeley.edu',
      skills: ['Java', 'Spring Boot'],
      interests: ['Backend Development']
    }
  ];

  const filteredConnections = connections.filter(connection => {
    if (activeTab === 'all') return true;
    return connection.status === activeTab;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg">
          {/* Header */}
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">My Connections</h1>
          </div>

          {/* Tab Navigation */}
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8 px-6">
              <button
                onClick={() => setActiveTab('all')}
                className={`${
                  activeTab === 'all'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                All
              </button>
              <button
                onClick={() => setActiveTab('connected')}
                className={`${
                  activeTab === 'connected'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Connected
              </button>
              <button
                onClick={() => setActiveTab('pending')}
                className={`${
                  activeTab === 'pending'
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
              >
                Pending
              </button>
            </nav>
          </div>

          {/* Connections List */}
          <div className="divide-y divide-gray-200">
            {filteredConnections.map((connection) => (
              <div key={connection.id} className="px-4 py-5 sm:px-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{connection.name}</h3>
                    <p className="text-sm text-gray-500">
                      {connection.university} - {connection.department}
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    {connection.status === 'connected' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        Connected
                      </span>
                    )}
                    {connection.status === 'pending' && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                        Pending
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex flex-wrap gap-2">
                    {connection.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-indigo-100 text-indigo-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-2">
                  <div className="flex flex-wrap gap-2">
                    {connection.interests.map((interest) => (
                      <span
                        key={interest}
                        className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-purple-100 text-purple-800"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>

                {connection.status === 'connected' && (
                  <div className="mt-4">
                    <a
                      href={`mailto:${connection.email}`}
                      className="text-sm text-indigo-600 hover:text-indigo-900"
                    >
                      {connection.email}
                    </a>
                  </div>
                )}

                {connection.status === 'pending' && (
                  <div className="mt-4 flex justify-end space-x-3">
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Decline
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Accept
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connections; 