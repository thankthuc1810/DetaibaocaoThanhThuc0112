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
    Create,
} from "react-admin";
export const listOrderDetail =(props)=>(
    <List {...props}>
        <Datagrid style={{overflowX:"auto"}}>
            <TextField source="id"/>
            <TextField source="price"/>
            <TextField source="num"/>
            <TextField source="total_money"/>
           
            <EditButton />
        </Datagrid>
    </List>
)
export const editOrderDetail =(props)=>(
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="price"/>
            <TextInput  source="num"/>
            <NumberInput source="total_money"/>
        </SimpleForm>
    </Edit>
);

export const createOrderDetail =(props)=>(
    <Create {...props}>
        <SimpleForm>
        <NumberInput source="price"/>
            <TextInput  source="num"/>
            <NumberInput source="total_money"/>
        </SimpleForm>
    </Create>
)