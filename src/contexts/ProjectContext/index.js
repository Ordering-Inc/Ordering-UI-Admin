import React, { useState, createContext, useEffect } from 'react'
import { useApi, useSession } from 'ordering-components-admin'
/**
 * Create ProjectContext
 * This context will manage the info between pages and provide an easy interface
 */
export const ProjectContext = createContext()

/**
  * Custom provider to mange shared info
  * @param {props} props
  */
export const ProjectProvider = ({ children }) => {
  const [ordering] = useApi()
  const [{ token }] = useSession()
  const [state, setState] = useState({ loading: false, project: {} })

  const getProjectStatus = async () => {
    if (state.loading) return
    try {
      setState({ ...state, loading: true })
      const response = await fetch(`${ordering.root}/current`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      })

      const { error, result } = await response.json()
      setState({
        loading: false,
        project: error ? {} : result
      })
    } catch (error) {
      setState({ ...state, loading: false })
    }
  }

  const functions = {
    getProjectStatus
  }

  useEffect(() => {
    if (token) {
      getProjectStatus()
    }
  }, [token])

  return (
    <ProjectContext.Provider value={[state, functions]}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjectState () {
  const projectManager = React.useContext(ProjectContext)
  return projectManager || [{}, () => {}]
}
