import React from 'react';
import {Admin,Resource,fetchUtils} from 'react-admin';
import AdminPanel from './component/AdminPanel';
import  {
  listCategory,
  editCategory,
  createCategory,
}  from './component/Category';
import  {
  listProduct,
  editProduct,
  createProduct,
}  from './component/Products';
import  {
  listFeedback,
  editFeedback,
  createFeedback,
}  from './component/Feedbacks';
import  {
  listGallery,
  editGallery,
  createGallery,
}  from './component/Gallery';
import  {
  listOrderDetail,
  editOrderDetail,
  createOrderDetail,
}  from './component/Orderdetails';
import  {
  listOrders,
  editOrders,
  createOrders,
}  from './component/Orders';
import  {
  listRole,
  editRole,
  createRole,
}  from './component/Role';
import  {
  listToken,
  editToken,
  createToken,
}  from './component/Token';
import  {
  listUser,
  editUser,
  createUser,
}  from './component/User';
import simpleRestProvider from "ra-data-simple-rest";
const httpClient = fetchUtils.fetchJson;
const App=()=>(
  <Admin dashboard={AdminPanel}
  dataProvider={simpleRestProvider ("http://localhost:8080/api",httpClient)}
  >
  
    <Resource 
    name="categories"
    list={listCategory}
    edit={editCategory}
    create={createCategory}
    />

<Resource 
    name="products" 
    list={listProduct}
    edit={editProduct}
    create={createProduct} />
     
     <Resource
     name="feedbacks" 
     list={listFeedback}
     edit={editFeedback}
     create={createFeedback}
     />
    <Resource
     name="galleries" 
     list={listGallery}
     edit={editGallery}
     create={createGallery}
     />
     <Resource
     name="orderDetails" 
     list={listOrderDetail}
     edit={editOrderDetail}
     create={createOrderDetail}
     />
      <Resource
     name="orders" 
     list={listOrders}
     edit={editOrders}
     create={createOrders}
     />
      <Resource
     name="roles" 
     list={listRole}
     edit={editRole}
     create={createRole}
     />
       <Resource
     name="tokens" 
     list={listToken}
     edit={editToken}
     create={createToken}
     />
         <Resource
     name="users" 
     list={listUser}
     edit={editUser}
     create={createUser}
     />                                                                   
  </Admin>
);
export default App;