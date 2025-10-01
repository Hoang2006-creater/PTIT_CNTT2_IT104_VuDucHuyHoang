import { useEffect, useState } from "react";
import { Button, Form, Input, Modal, Pagination, Select, Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import { v4 as uuidv4 } from "uuid";
import { api } from "../api/axios";

type CategoryStatus = "active" | "inactive";

type CategoryRow = {
  id: string;
  name: string;
  description: string;
  status: CategoryStatus;
};

type CategoryFormValues = {
  name: string;
  description?: string;
  status: CategoryStatus;
};


export default function Categories() {
  const [rows, setRows] = useState<CategoryRow[]>([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<CategoryRow | null>(null);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<CategoryStatus | "">("");
  const [page, setPage] = useState(1);
  const pageSize = 5;

  async function fetchCategories() {
    const res = await api.get<CategoryRow[]>("/categories");
    setRows(res.data);
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  async function onDelete(id: string) {
    await api.delete(`/categories/${id}`);
    fetchCategories();
  }

 async function onSubmit(values: CategoryFormValues) {
  const next: CategoryRow = {
    id: editing?.id ?? uuidv4(),
    name: values.name,
    description: values.description || "",
    status: values.status,
  };

  if (editing) {
    await api.put(`/categories/${editing.id}`, next);
  } else {
    await api.post("/categories", next);
  }

  fetchCategories();
  setOpen(false);
}
  const filtered = rows.filter((r) =>
    search ? r.name.toLowerCase().includes(search.toLowerCase()) : true
  ).filter((r) =>
    statusFilter ? r.status === statusFilter : true
  );
  const paged = filtered.slice((page - 1) * pageSize, page * pageSize);

  const columns: ColumnsType<CategoryRow> = [
    { title: "Tên", dataIndex: "name" },
    { title: "Mô tả", dataIndex: "description" },
    { title: "Trạng thái", dataIndex: "status", render: (s) => s === "active" ? "Hoạt động" : "Ngừng" },
    {
      title: "Thao tác",
      render: (_, r) => (
        <>
          <Button size="small" type="primary" onClick={() => { setEditing(r); setOpen(true); }}>Sửa</Button>
          <Button size="small" danger onClick={() => onDelete(r.id)} style={{ marginLeft: 8 }}>Xóa</Button>
        </>
      )
    }
  ];

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2>Quản lý danh mục</h2>
        <Button type="primary" onClick={() => { setEditing(null); setOpen(true); }}>
          Thêm mới
        </Button>
      </div>
      <div className="flex gap-2 mb-4">
        <Select
          placeholder="Trạng thái"
          allowClear
          style={{ width: 180 }}
          value={statusFilter || undefined}
          onChange={(v) => setStatusFilter(v as CategoryStatus || "")}
          options={[
            { value: "active", label: "Hoạt động" },
            { value: "inactive", label: "Ngừng" }
          ]}
        />
        <Input
          placeholder="Tìm kiếm theo tên"
          style={{ width: 240 }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <Table rowKey="id" columns={columns} dataSource={paged} pagination={false} />
      <div className="flex justify-end mt-3">
        <Pagination
          current={page}
          pageSize={pageSize}
          total={filtered.length}
          onChange={setPage}
        />
      </div>
      <Modal
        title={editing ? "Sửa danh mục" : "Thêm mới danh mục"}
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        destroyOnClose
      >
        <Form
          layout="vertical"
          onFinish={onSubmit}
          initialValues={editing ?? { status: "active" }}
        >
          <Form.Item name="name" label="Tên" rules={[{ required: true, message: "Nhập tên danh mục" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="status" label="Trạng thái" rules={[{ required: true }]}>
            <Select
              options={[
                { value: "active", label: "Hoạt động" },
                { value: "inactive", label: "Ngừng" }
              ]}
            />
          </Form.Item>
          <Form.Item name="description" label="Mô tả">
            <Input.TextArea rows={3} />
          </Form.Item>
          <div className="flex justify-end">
            <Button onClick={() => setOpen(false)} style={{ marginRight: 8 }}>Hủy</Button>
            <Button type="primary" htmlType="submit">Lưu</Button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}
