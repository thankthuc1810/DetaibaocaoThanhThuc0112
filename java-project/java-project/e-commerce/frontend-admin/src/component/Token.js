import React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    TextInput,
    DateInput,
    Create,
} from "react-admin";
export const listToken =(props)=>(
    <List {...props}>
        <Datagrid style={{overflowX:"auto"}}>
            <TextField source="id"/>
            <TextField source="token"/>
            <TextField source="created_at"/>
           
            <EditButton />
        </Datagrid>
    </List>
)
export const editToken =(props)=>(
    <Edit {...props}>
        <SimpleForm>
            <TextInput  source="token"/>
            <DateInput source="created_at"/>
        </SimpleForm>
    </Edit>
);

export const createToken =(props)=>(
    <Create {...props}>
        <SimpleForm>
        <TextInput  source="token"/>
            <DateInput source="created_at"/>
        </SimpleForm>
    </Create>
)