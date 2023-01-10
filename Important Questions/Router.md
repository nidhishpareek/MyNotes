npm install react-router-dom@6
*************************************Router file*************************************

import { Route, Routes } from "react-router-dom";
import all the elements and use in rout
<Routes>
      <Route path="/" element={<CreateTodo />} exact></Route>
      <Route path="/todo/" element={<TodoList />} exact></Route>
      <Route path="/todo/:id" element={<TodoPage />}></Route>
</Routes>

export default MyRoutes;


import and use in app.js directly as component.