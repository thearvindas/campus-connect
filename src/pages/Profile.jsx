const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile</h2>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" className="input mt-1" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">University</label>
            <input type="text" className="input mt-1" placeholder="Your university" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Major</label>
            <input type="text" className="input mt-1" placeholder="Your major" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Year of Study</label>
            <select className="input mt-1">
              <option>Freshman</option>
              <option>Sophomore</option>
              <option>Junior</option>
              <option>Senior</option>
              <option>Graduate</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Bio</label>
            <textarea className="input mt-1" rows="4" placeholder="Tell us about yourself"></textarea>
          </div>
          <button className="btn btn-primary w-full">Save Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile; 