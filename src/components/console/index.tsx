import React, { useState, useEffect } from 'react'
import { Console, Hook, Unhook } from 'console-feed'
import styled from 'styled-components';
import {Delete} from '../../assets/icons'
const ConsoleContainer =  styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  background: #242424;
  order:2;
  min-height:0;
  display:grid;

  p{
    background: ${({theme})=>theme.colors.bg};
    height:40px;
    display: flex;
    align-items:center;
    border:1px solid ${({theme})=>theme.colors.border};
    justify-content: center;
  }
  .content{
    height:100%;
    width:100%;
    display:grid;
    grid-template-rows: 40px auto 1fr;
    overflow:auto;
  }
  .logs{
    flex:1;
    height:100%;
    overflow:auto;
  }
  .button-delete{
    display:inline-block;
    display: flex;
    border:0;
    background: transparent;
    cursor: pointer;
    padding:.4rem;
    width:40px;
    outline:0;  
    svg{
      path{
        stroke:${({theme})=>theme.colors.mainText};

      }
    } 
  }
`
const LogsContainer:React.FC = () => {
  const [logs, setLogs] = useState([])

  // run once!
  useEffect(() => {
    Hook(
      window.console,
      (log) => setLogs((currLogs) => [...currLogs, log]),
      false
    )  
    return () => Unhook(window.console)
  }, [])

  return <ConsoleContainer>
        <div className="content">
        <p>Console</p>
        <button title="clear console" onClick={()=>setLogs([])} className="button-delete">
          <Delete />
        </button>
        <div className="logs">
        <Console logs={logs} variant="dark" />
        </div>
        </div>
      </ConsoleContainer>
}

export default LogsContainer