import React, { useEffect, useState } from 'react'
import { Link, useHistory, useParams } from 'react-router-dom'
import EditMasterForm from '../../components/ui/editMasterForm'
import httpService from '../../services/http.services'
// import config from "../../config.json";

const EditMasterPage = () => {
  const history = useHistory()
  const [master, setMaster] = useState(null)
  const id = useParams().masterId

  const masterEndPoint = `select-master/${id}`
  useEffect(() => {
    httpService.get(masterEndPoint).then((data) => {
      setMaster(data.data)
    })
  }, [])

  const handleSubmit = async(master) => {
    try {
      await httpService.patch(masterEndPoint, master)
      history.replace('/select-master')
    } catch (error) {
      console.log('Expected error')
    }
  }

  return (
    <>
      <div className="container border border-2 border-info">
        <div className="card m-4">
          <h1>Edit Master Page</h1>

          {master !== null ? (
            <EditMasterForm data={master} onSubmit={handleSubmit} />
          ) : (
            'Loading...'
          )}
        </div>
        <Link to="/select-master">Back</Link>
      </div>
    </>
  )
}

export default EditMasterPage
