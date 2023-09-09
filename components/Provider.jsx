import React from 'react';
import { sessionProvider } from 'next-auth';

const Provider = ({children, session}) => {
  return (
    <div>
      <sessionProvider session={session}>
        {chilldren}
      </sessionProvider>
    </div>
  )
}

export default Provider
