import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Login from './layouts/login'
import Menu from './layouts/menu'
import Masters from './layouts/masters'
import Booking from './layouts/record'
import Service from './layouts/service'
import Time from './layouts/time'
import EditMasterPage from './api/pages/editMasterPage'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const App = () => {
  return (
    <>
      <Switch>
        <Route path="/login:type?" component={Login} />
        <Route path="/menu" component={Menu} />
        <Route
          path="/select-master/edit/:masterId"
          component={EditMasterPage}
        />
        <Route path="/select-master/" component={Masters} />
        <Route path="/select-time" component={Time} />
        <Route path="/select-service" component={Service} />
        <Route path="/create-record" component={Booking} />
        <Redirect to="/menu" />
      </Switch>
      <ToastContainer />
    </>
  )
}

export default App
