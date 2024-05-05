import React from 'react'
import { useLocation } from 'react-router'

const Adventure = () => {
    const {search} = useLocation();
  const param = new URLSearchParams(search)

  return (
    <div>
      Adventure Page of {param.get("city")}
    </div>
  )
}

export default Adventure
