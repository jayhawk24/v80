import React, { createContext, useState } from 'react'

type Props = {
  children: React.ReactNode
}

type LiveChart = {
  name: string
  symbol: string
}

type AppContextType = {
  liveChart: LiveChart
  setLiveChart: (liveChart: LiveChart) => void
}

export const AppContext = createContext<
  AppContextType
>({
  liveChart: {
    name: "Microsoft",
    symbol: "MSFT"
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setLiveChart: () => { }
})

const AppContextProvider = (props: Props) => {
  const [liveChart, setLiveChart] = useState<LiveChart>(
    {
      name: "Microsoft",
      symbol: "MSFT"
    }
  )

  return (
    <div>
      <AppContext.Provider value={
        {
          liveChart,
          setLiveChart
        }
      }>
        {props.children}
      </AppContext.Provider>
    </div>
  )
}

export default AppContextProvider