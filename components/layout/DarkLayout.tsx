import { FC, PropsWithChildren } from 'react'

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div style={{ backgroundColor: 'rgba(255,0,0,0.3)', padding: '10px'}}>
      <h3>Dark layout</h3>
    <div>
        {children}
    </div>

    </div>
  )
}
