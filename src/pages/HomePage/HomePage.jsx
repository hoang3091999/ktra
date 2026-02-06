import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Tabs } from "antd";
import "./homepage.css";

const HomePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const tabItems = [
    {
      key: "All",
      label: "All",
    },
    {
      key: "Active",
      label: "Active",
    },
    {
      key: "Completed",
      label: "Completed",
    },
  ];
  const activeKey = location.pathname.replace("/", "");
  return (
    <div className="todo_container">
      <Link to="/" className="home-title">
        <h1>#todo</h1>
      </Link>
      <Tabs
        className="tab"
        activeKey={activeKey}
        items={tabItems}
        onChange={(key) => navigate(key)}
      />
      <Outlet />
    </div>
  );
};

export default HomePage;
