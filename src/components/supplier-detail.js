import React, { useState } from "react";
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
  Tag,
  Checkbox,
} from "antd";
import {
  PlusOutlined,
  ExportOutlined,
  SearchOutlined,
  UserOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

const { Content } = Layout;
const { Option } = Select;
const { TabPane } = Tabs;


const materialData = [
  {
    key: '1',
    group: 'IT - Device',
    material: 'Computer / Notebook',
    active: true
  },
  {
    key: '2',
    group: 'IT - Device',
    material: 'Computer / PC',
    active: true
  }
];

const outstandingData = [
  {
    key: '1',
    invoice: 'INV1234',
    project: 'Project ABC',
    amount: '123.000',
    aging: '34'
  }
];
export function SupplierDetail ({showModal, dataSource, columns, onClickItem, isModalVisible, handleCancel}) {
    return (
        <Content style={{ margin: "16px" }}>
            <div style={{ background: '#f8f8f8', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24, borderRadius: 4 }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ width: 100, height: 100, border: '1px solid #ccc', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 16 }}>Logo</div>
              <div>
                <h3 style={{ margin: 0 }}>PT Setroom Indonesia</h3>
                <p style={{ margin: 0, color: '#666' }}>Fatmawati Raya St, 33</p>
                <p style={{ margin: 0, color: '#666' }}>Jakarta Selatan</p>
                <Tag color="green" style={{ marginTop: 8 }}>Active</Tag>
                <Tag icon={<UserOutlined />} style={{ marginTop: 8 }}>Setroom</Tag>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <Button danger>Block / Unblock</Button>
              <ArrowLeftOutlined style={{ fontSize: 16, cursor: 'pointer' }} />
              <ArrowRightOutlined style={{ fontSize: 16, cursor: 'pointer' }} />
              <span style={{ marginLeft: 8, color: '#999' }}>1 of 32</span>
            </div>
          </div>
          
           <div style={{ background: '#fff', padding: 16, border: '1px solid #ccc', borderRadius: 4, marginBottom: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <h4 style={{ margin: 0 }}>Materials provided by Supplier</h4>
              <Button size="small">Edit / Save</Button>
            </div>
            <Table
              dataSource={materialData}
              pagination={false}
              columns={[
                { title: 'Material Group', dataIndex: 'group' },
                { title: 'Material ID', dataIndex: 'material', render: (text) => <Select defaultValue={text} style={{ width: '100%' }}><Option value={text}>{text}</Option></Select> },
                { title: 'Active', dataIndex: 'active', render: (active) => <Checkbox checked={active} /> }
              ]}
              style={{ marginBottom: 24 }}
            />

            <h4>Outstandings</h4>
            <Table
              dataSource={outstandingData}
              pagination={false}
              columns={[
                { title: '#', dataIndex: 'key' },
                { title: 'Invoice Number', dataIndex: 'invoice' },
                { title: 'Project Name', dataIndex: 'project' },
                { title: 'Amount', dataIndex: 'amount' },
                { title: 'Aging (days)', dataIndex: 'aging' }
              ]}
            />
          </div>
        </Content> 
    )
}