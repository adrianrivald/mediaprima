import React from "react";
import {
  Layout,
  Table,
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
} from "antd";
import {
  PlusOutlined,
  ExportOutlined,
  SearchOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;

export function SupplierList({
  showModal,
  dataSource,
  columns,
  onClickItem,
  isModalVisible,
  handleCancel,
}) {
  return (
    <Content style={{ margin: "16px" }}>
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "20px 0",
          alignItems: "center",
        }}
      >
        <h1>Supplier List</h1>
        <Button type="primary" icon={<PlusOutlined />} onClick={showModal}>
          New Supplier
        </Button>
      </Row>
      <Row gutter={16}>
        <Col span={6}>
          <Card>
            <Statistic
              title="Total Supplier"
              value={1869}
              suffix={<span style={{ color: "green" }}>+8%</span>}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="New Supplier"
              value={27}
              suffix={<span style={{ color: "green" }}>+1%</span>}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Avg Cost per Supplier"
              value={"Rp 320.3 Mn"}
              suffix={<span style={{ color: "red" }}>-1%</span>}
            />
          </Card>
        </Col>
        <Col span={6}>
          <Card>
            <Statistic
              title="Blocked Supplier"
              value={31}
              suffix={<span style={{ color: "green" }}>-4%</span>}
            />
          </Card>
        </Col>
      </Row>

      <div
        style={{
          margin: "16px 0",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
          <Input
            prefix={<SearchOutlined />}
            placeholder="Search Customer"
            style={{ width: 400 }}
          />
          <Select defaultValue="Active" style={{ width: 150 }}>
            <Option value="Active">Active</Option>
            <Option value="In Progress">In Progress</Option>
            <Option value="Blocked">Blocked</Option>
          </Select>
        </div>
        <div>
          <Button icon={<ExportOutlined />} style={{ marginRight: 8 }}>
            Export
          </Button>
        </div>
      </div>

      <Table
        dataSource={dataSource}
        columns={columns(onClickItem)}
        pagination={false}
      />

      {/* New Supplier Modal */}
      <Modal
        title="New Supplier"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[
          <Button key="cancel" onClick={handleCancel}>
            Cancel
          </Button>,
          <Button key="submit" type="primary">
            Save
          </Button>,
        ]}
        width={700}
      >
        <Form layout="vertical">
          <Row gutter={16}>
            <Col span={6}>
              <div
                style={{
                  border: "1px solid #ccc",
                  height: 100,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Logo
              </div>
            </Col>
            <Col span={18}>
              <Form.Item label="Supplier Name">
                <Input defaultValue="PT Setroom Indonesia" />
              </Form.Item>
              <Form.Item label="Nick Name">
                <Input defaultValue="Setroom" />
              </Form.Item>
            </Col>
          </Row>

          <Tabs defaultActiveKey="1">
            <TabPane tab="Address" key="1">
              <Table
                dataSource={[
                  {
                    key: 1,
                    name: "Head Office",
                    address: "Fatmawati Raya St, 123",
                  },
                  { key: 2, name: "Branch Office", address: "Ciawi, 99" },
                ]}
                columns={[
                  { title: "Name", dataIndex: "name" },
                  { title: "Address", dataIndex: "address" },
                  {
                    title: "Main",
                    dataIndex: "key",
                    render: (text, record, index) => (
                      <Radio name="mainOffice" value={record.key} />
                    ),
                  },
                ]}
                pagination={false}
              />
            </TabPane>
            <TabPane tab="Contacts" key="2" />
            <TabPane tab="Groups" key="3" />
            <TabPane tab="Material List" key="4" />
            <TabPane tab="Others" key="5" />
          </Tabs>
        </Form>
      </Modal>
    </Content>
  );
}
