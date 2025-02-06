// app/admin/dashboard/page.tsx

import BarChart from "../components/BarChart";

interface MetricCardProps {
  title: string;
  value: string | number;
  percentageChange: string;
  color: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  percentageChange,
  color,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
      <p className={`text-3xl font-bold ${color} mt-2`}>{value}</p>
      <p className="text-gray-500 text-sm mt-1">{percentageChange}</p>
    </div>
  );
};

interface ActivityItemProps {
  icon: React.ReactNode;
  title: string;
  timestamp: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ icon, title, timestamp }) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-100">
      <div className="flex items-center">
        <div className="bg-blue-50 p-3 rounded-full">{icon}</div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
          <p className="text-gray-500 text-sm">{timestamp}</p>
        </div>
      </div>
      <button className="text-blue-600 hover:text-blue-700">View</button>
    </div>
  );
};

export default function DashboardPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      {/* Key Metrics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Total Posts"
          value="1,234"
          percentageChange="+12% from last month"
          color="text-blue-600"
        />
        <MetricCard
          title="Total Visitors"
          value="45,678"
          percentageChange="+8% from last month"
          color="text-green-600"
        />
        <MetricCard
          title="Engagement Rate"
          value="78%"
          percentageChange="+5% from last month"
          color="text-purple-600"
        />
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Recent Activity</h2>

        {/* Activity List */}
        <div className="space-y-4">
          <ActivityItem
            icon={
              <svg
                className="w-6 h-6 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
            }
            title="New Post Published"
            timestamp="2 hours ago"
          />
          <ActivityItem
            icon={
              <svg
                className="w-6 h-6 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                ></path>
              </svg>
            }
            title="Post Updated"
            timestamp="5 hours ago"
          />
          <ActivityItem
            icon={
              <svg
                className="w-6 h-6 text-purple-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                ></path>
              </svg>
            }
            title="High Traffic Alert"
            timestamp="1 day ago"
          />
        </div>
      </div>

      {/* Charts Section (Placeholder) */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700 mb-6">Analytics</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Visitors Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Visitors Over Time
            </h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
            <BarChart />
            </div>
          </div>

          {/* Engagement Chart */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Engagement Rate
            </h3>
            <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
              <p className="text-gray-500">Chart Placeholder</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}