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
export const listUser =(props)=>(
    <List {...props}>
        <Datagrid style={{overflowX:"auto"}}>
            <TextField source="id"/>
            <TextField source="fulltname"/>
            <TextField source="email"/>
            <TextField source="phone_number"/>
            <TextField source="adderss"/>
            <TextField source="password"/>
            <TextField source="created_at"/>
            <TextField source="updated_at"/>
            <TextField source="deleted"/>
            <EditButton />
        </Datagrid>
    </List>
)
export const editUser =(props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="fullname"/>
            <TextInput source="email"/>
            <NumberInput source="phone_number"/>
            <TextInput source="adderss"/>
            <TextInput source="note"/>
            <NumberInput source="password"/>  
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
            <NumberInput source="deleted"/>
        </SimpleForm>
    </Edit>
);

export const createUser =(props)=>(
    <Create {...props}>
        <SimpleForm>
        <TextInput source="fullname"/>
            <TextInput source="email"/>
            <NumberInput source="phone_number"/>
            <TextInput source="adderss"/>
            <TextInput source="note"/>
            <NumberInput source="password"/>  
            <DateInput source="created_at"/>
            <DateInput source="updated_at"/>
            <NumberInput source="deleted"/>
        </SimpleForm>
    </Create>
)