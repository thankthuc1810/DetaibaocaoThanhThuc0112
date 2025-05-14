import React from "react";
import {
    List,
    Datagrid,
    TextField,
    Edit,
    SimpleForm,
    EditButton,
    TextInput,
    Create,
} from "react-admin";
export const listGallery =(props)=>(
    <List {...props}>
        <Datagrid style={{overflowX:"auto"}}>
            <TextField source="id"/>
            <TextField source="thumbnail"/>
            <EditButton />
        </Datagrid>
    </List>
)
export const editGallery =(props)=>(
    <Edit {...props}>
        <SimpleForm>
        <TextInput source="thumbnail"/>
        </SimpleForm>
    </Edit>
);

export const createGallery =(props)=>(
    <Create {...props}>
        <SimpleForm>
        <TextInput source="thumbnail"/>
        </SimpleForm>
    </Create>
)