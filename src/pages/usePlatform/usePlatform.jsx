import YouTube from "react-youtube";
import { Header } from "../../components/header";

export function UsePlatform(){
  return(
    <div className="app h-screen flex items-center justify-center">
      <Header />
      <div className="text-center font-bold text-white text-2xl">
        Aprenda a usar a nossa plataforma
        < br />
        < br />
      <YouTube videoId="Cd0rCbHQOVw"/>
    </div>

    </div>
    
    
  )
}