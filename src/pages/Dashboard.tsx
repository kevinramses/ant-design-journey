import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Users, LineChart } from "lucide-react";

const Dashboard = () => {
  const stats = [
    {
      title: "Total Users",
      value: "1,234",
      icon: Users,
      trend: "+12.3%",
    },
    {
      title: "Active Now",
      value: "321",
      icon: Activity,
      trend: "+4.5%",
    },
    {
      title: "Revenue",
      value: "$12,345",
      icon: LineChart,
      trend: "+23.1%",
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600">Here's what's happening today.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-green-500 mt-1">{stat.trend}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600">No recent activity to show.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;