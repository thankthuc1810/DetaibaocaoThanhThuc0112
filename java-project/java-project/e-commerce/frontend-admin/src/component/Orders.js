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
} from "react-admin";
export const listOrders =(props)=>(
    <List {...props}>
        <Datagrid style={{overflowX:"auto"}}>
            <TextField source="id"/>
            <TextField source="fulltname"/>
            <TextField source="email"/>
            <TextField source="phone_number"/>
            <TextField source="adderss"/>
            <TextField source="note"/>
            <TextField source="order_date"/>
            <TextField source="status"/>
            <TextField source="total_money"/>
            <EditButton />
        </Datagrid>
    </List>
)
export const editOrders =(props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="fullname"/>
            <TextInput source="email"/>
            <NumberInput source="phone_number"/>
            <TextInput source="adderss"/>
            <TextInput source="note"/>
            <DateInput source="order_date"/>  
            <NumberInput source="status"/>
            <DateInput source="total_money"/>
        </SimpleForm>
    </Edit>
);

export const createOrders =(props)=>(
    <Create {...props}>
        <SimpleForm>
        <TextInput source="fullname"/>
            <TextInput source="email"/>
            <NumberInput source="phone_number"/>
            <TextInput source="adderss"/>
            <TextInput source="note"/>
            <DateInput source="order_date"/>  
            <NumberInput source="status"/>
            <DateInput source="total_money"/>
        </SimpleForm>
    </Create>
)