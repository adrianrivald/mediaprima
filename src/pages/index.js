import React, { useState } from "react";
import {
  Layout,
  Menu,
  Table,
  Tag,
  Input,
  Button,
  Select,
  Card,
  Statistic,
  Row,
  Col,
  Modal,
  Form,
  Tabs,
  Radio,
  Divider,
} from "antd";
import {
  UserOutlined,
  TeamOutlined,
  DashboardOutlined,
  PlusOutlined,
  ExportOutlined,
  SearchOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";
import { SupplierList } from "@/components/supplier-list";
import { SupplierDetail } from "@/components/supplier-detail";

const { Header, Content, Sider } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

const dataSource = [
  {
    key: "1",
    name: "PT Setroom Indonesia",
    code: "61000012",
    address: "Jakarta, Indonesia",
    contact: "Albert Einstein",
    status: "Active",
  },
  {
    key: "2",
    name: "PT Suka Suka",
    code: "41000013",
    address: "Bandung, Indonesia",
    contact: "James Lee",
    status: "In Progress",
  },
  {
    key: "3",
    name: "PT Angin Ribut",
    code: "41000014",
    address: "Denpasar, Indonesia",
    contact: "Maria Chen",
    status: "Blocked",
  },
];

const columns = (onClickItem) => {
  return [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => {
        return (
          <div onClick={() => onClickItem(record.code)}>
            <strong>{text}</strong>
            <br />
            <a href="#">{record.code}</a>
          </div>
        );
      },
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Contact",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => {
        let color = "default";
        if (status === "Active") color = "green";
        else if (status === "In Progress") color = "orange";
        else if (status === "Blocked") color = "red";
        return <Tag color={color}>{status}</Tag>;
      },
    },
  ];
};

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedItemCode, setSelectedItemCode] = useState("");

  const showModal = () => setIsModalVisible(true);
  const handleCancel = () => setIsModalVisible(false);

  const onClickItem = (itemCode) => {
    setSelectedItemCode(itemCode);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        width={260}
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        style={{ backgroundColor: "#FFF", borderRight: "1px solid #d9d9d9" }}
      >
        {!collapsed && (
          <div
            className="logo"
            style={{
              color: "black",
              textAlign: "center",
              padding: 16,
              fontSize: 40,
            }}
          >
            ALISA
          </div>
        )}
        <Menu
          theme="light"
          defaultSelectedKeys={["2.2"]}
          mode="inline"
          style={{ marginTop: collapsed ? 40 : 0 }}
        >
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.SubMenu
            key="2"
            icon={<TeamOutlined />}
            title="Supplier Management"
          >
            <Menu.Item key="2.1">Dashboard</Menu.Item>
            <Menu.Item key="2.2">Supplier List</Menu.Item>
            <Menu.Item key="2.3">Review & Approvals</Menu.Item>
            <Menu.Item key="2.4">Configurations</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key="3" icon={<UserOutlined />}>
            Funnel Management
          </Menu.Item>
        </Menu>
        <Divider style={{ margin: "12px 0", backgroundColor: "#777" }} />
        <div style={{ padding: "0 20px", color: "black" }}>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              marginBottom: 10,
              position: "absolute",
              left: 20,
              bottom: 80,
            }}
          >
            <QuestionCircleOutlined style={{ marginRight: 8 }} />{" "}
            {!collapsed && "Help & Support"}
          </div>
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              color: "red",
              position: "absolute",
              left: 20,
              bottom: 60,
            }}
          >
            <UserOutlined style={{ marginRight: 8 }} />{" "}
            {!collapsed && "John Doe"}
          </div>
        </div>
      </Sider>
      <Layout>
        <Header
          style={{
            background: "#fff",
            padding: 0,
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Supplier Management
        </Header>
        {selectedItemCode === "" ? (
          <SupplierList
            showModal={showModal}
            columns={columns}
            dataSource={dataSource}
            onClickItem={onClickItem}
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
          />
        ) : (
          <SupplierDetail
            showModal={showModal}
            columns={columns}
            dataSource={dataSource}
            onClickItem={onClickItem}
            isModalVisible={isModalVisible}
            handleCancel={handleCancel}
          />
        )}
      </Layout>
    </Layout>
  );
};

export default App;
