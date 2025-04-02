"use client";
import React, { useState, useEffect } from 'react';
import { Table, Button, Input, Space, Modal, Form, message } from 'antd';
import { SearchOutlined, EditOutlined, DeleteOutlined, PlusOutlined, FilterOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { Collapse } from 'antd';
const { Panel } = Collapse;

interface Amenity {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: boolean;
}

const AmenityManagement: React.FC = () => {
  const [data, setData] = useState<Amenity[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();
  const [editingId, setEditingId] = useState<string | null>(null);

  // Mock data - replace with actual API calls
  useEffect(() => {
    setData([
      { id: '1', name: 'WiFi', description: 'Free WiFi', icon: 'wifi', status: true },
      { id: '2', name: 'Pool', description: 'Swimming Pool', icon: 'pool', status: true },
      { id: '3', name: 'Parking', description: 'Free Parking', icon: 'car', status: true },
    ]);
  }, []);

  const columns: ColumnsType<Amenity> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      filteredValue: [searchText],
      onFilter: (value, record) => {
        return record.name.toLowerCase().includes(value.toString().toLowerCase()) ||
               record.description.toLowerCase().includes(value.toString().toLowerCase());
      },
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Icon',
      dataIndex: 'icon',
      key: 'icon',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status: boolean) => (
        <span className={status ? 'text-green-500' : 'text-red-500'}>
          {status ? 'Active' : 'Inactive'}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.id)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleEdit = (record: Amenity) => {
    setEditingId(record.id);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this amenity?',
      onOk() {
        setData(data.filter(item => item.id !== id));
        message.success('Amenity deleted successfully');
      },
    });
  };

  const handleSubmit = async (values: any) => {
    try {
      if (editingId) {
        // Update existing amenity
        setData(data.map(item => 
          item.id === editingId ? { ...values, id: editingId } : item
        ));
        message.success('Amenity updated successfully');
      } else {
        // Add new amenity
        const newAmenity = {
          ...values,
          id: Date.now().toString(),
          status: true,
        };
        setData([...data, newAmenity]);
        message.success('Amenity added successfully');
      }
      setIsModalVisible(false);
      form.resetFields();
      setEditingId(null);
    } catch (error) {
      message.error('An error occurred');
    }
  };

  return (
    <div className="p-6">
      <div className="mb-4">
        <Collapse 
          ghost
          className="bg-white rounded-lg shadow-sm mb-4"
        >
          <Panel 
            header={
              <div className="flex items-center">
                <FilterOutlined className="mr-2" />
                <span>Search Filters</span>
              </div>
            } 
            key="1"
          >
            <div className="p-4 bg-gray-50 rounded-lg">
              <Form layout="vertical">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Form.Item label="Name">
                    <Input
                      placeholder="Search by name..."
                      onChange={e => setSearchText(e.target.value)}
                      className="rounded-lg"
                    />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input
                      placeholder="Search by description..."
                      onChange={e => setSearchText(e.target.value)}
                      className="rounded-lg"
                    />
                  </Form.Item>
                </div>
              </Form>
            </div>
          </Panel>
        </Collapse>

        <div className="flex justify-end">
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={() => {
              setEditingId(null);
              form.resetFields();
              setIsModalVisible(true);
            }}
            className="rounded-lg shadow-sm hover:shadow-md transition-all"
          >
            Add Amenity
          </Button>
        </div>
      </div>

      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowKey="id"
        pagination={{ pageSize: 10 }}
        className="rounded-lg shadow-sm"
      />

      <Modal
        title={editingId ? "Edit Amenity" : "Add New Amenity"}
        open={isModalVisible}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
          setEditingId(null);
        }}
        footer={null}
        className="rounded-2xl overflow-hidden"
        style={{ top: 20 }}
        bodyStyle={{ padding: '24px' }}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          className="px-2"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input amenity name!' }]}
          >
            <Input className="rounded-lg" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: 'Please input description!' }]}
          >
            <Input.TextArea className="rounded-lg" rows={4} />
          </Form.Item>

          <Form.Item
            name="icon"
            label="Icon"
            rules={[{ required: true, message: 'Please input icon name!' }]}
          >
            <Input className="rounded-lg" />
          </Form.Item>

          <Form.Item className="text-right mb-0">
            <Space size="middle">
              <Button 
                onClick={() => setIsModalVisible(false)}
                className="rounded-lg px-6"
              >
                Cancel
              </Button>
              <Button 
                type="primary" 
                htmlType="submit"
                className="rounded-lg px-6 shadow-sm hover:shadow-md transition-all"
              >
                {editingId ? 'Update' : 'Add'}
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AmenityManagement;