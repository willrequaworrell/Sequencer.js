import { useCallback } from "react"
import { TrackType } from "../types/track"


interface TrackButtonPropsType {
    trackIndex: number
    buttonIndex: number
    isDownbeat?: boolean
    trackButtons: boolean[]
    setTracks: React.Dispatch<React.SetStateAction<TrackType[]>>
}

const TrackButton = ({trackIndex, buttonIndex, isDownbeat=false, trackButtons, setTracks}:TrackButtonPropsType) => {
    const active = trackButtons[buttonIndex]

    const handleUpdateButtonState =  useCallback(
        () => {
            setTracks(prevTracksArray => {
                return prevTracksArray.map((prevTrackObj, i) => {
                    if (i !== trackIndex) {
                        return prevTrackObj
                    } else {
                        return {
                            ...prevTrackObj,
                            trackButtons: prevTrackObj.trackButtons.map((prevButtonActiveVal, i) => {
                                return (i === buttonIndex) ? !prevButtonActiveVal : prevButtonActiveVal
                            })}
                    }
                    
                })
            })
        }
    , [trackIndex, buttonIndex, setTracks])

    return (
        <button
            type="button"
            onClick={handleUpdateButtonState}
            className={`
                ${isDownbeat ? "h-full" : "h-full"}
                w-full
                ${active ? "bg-accent/20" : "bg-background"} 
                rounded-2xl
                shadow-[4px_4px_6px_#b0c0c9,-4px_-4px_6px_#ffffff]
                active:bg-white/20
                cursor-pointer
                ${active && "shadow-[inset_-4px_-4px_9px_#ffffffe0,inset_2px_2px_4px_#718eab1a]"}
            `}
        >
            
        </button>
    )
}

export default TrackButton
