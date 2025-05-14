import React from "react";
import {
  List,
  Datagrid,
  TextField,
  Edit,
  SimpleForm,
  EditButton,
  TextInput,
  NumberInput,
  DateInput,
  Create,
  ReferenceInput,
  SelectInput,
  ReferenceField,
} from "react-admin";

// 👉 Danh sách sản phẩm
export const listProduct = (props) => (
  <List {...props}>
    <Datagrid style={{ overflowX: "auto" }}>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="price" />
      <TextField source="discount" />
      <TextField source="thumbnail" />
      <TextField source="description" />
      <TextField source="created_at" />
      <TextField source="updated_at" />
      {/* 👉 Hiển thị tên danh mục qua khóa categoryId */}
      <ReferenceField source="categoryId" reference="categories">
        <TextField source="name" />
      </ReferenceField>
      <EditButton />
    </Datagrid>
  </List>
);

// 👉 Trang chỉnh sửa sản phẩm
export const editProduct = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <NumberInput source="price" />
      <NumberInput source="discount" />
      <TextInput source="thumbnail" />
      <TextInput source="description" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      <NumberInput source="deleted" />
      {/* ✅ Chọn danh mục từ danh sách categories */}
      <ReferenceInput source="categoryId" reference="categories" label="Danh mục">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Edit>
);

// 👉 Trang tạo sản phẩm mới
export const createProduct = (props) => (
  <Create {...props}>
    <SimpleForm>
      <TextInput source="title" />
      <NumberInput source="price" />
      <NumberInput source="discount" />
      <TextInput source="thumbnail" />
      <TextInput source="description" />
      <DateInput source="created_at" />
      <DateInput source="updated_at" />
      <NumberInput source="deleted" />
      {/* ✅ Gắn danh mục bằng categoryId */}
      <ReferenceInput source="categoryId" reference="categories" label="Danh mục">
        <SelectInput optionText="name" />
      </ReferenceInput>
    </SimpleForm>
  </Create>
);
