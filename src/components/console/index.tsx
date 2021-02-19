import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'

const LogsContainer:React.FC = () => {
  const [logs, setLogs] = useState([])

  // run once!
  useEffect(() => {
    console.log(logs)
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )
    return () => Unhook(window.console)
  }, [])

  return <div style={{ backgroundColor: "#242424" }}>
        <Console logs={logs} variant="dark" />
      </div>
}

export default LogsContainer