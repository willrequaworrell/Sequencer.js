import ScreenContainer from "./ScreenContainer"
import TrackButton from "./TrackButton"
import { TrackType } from '../types/track';
import { useTracksContext } from "../context/TracksContext";


interface TrackPropsType {
    track: TrackType
    setTracks: React.Dispatch<React.SetStateAction<TrackType[]>>
}

const Track = ({track, setTracks}:TrackPropsType) => {
    const {tracks, currentTrack, setCurrentTrack} = useTracksContext()

    const handleClick = () => {
        setCurrentTrack(track.index)
        tracks[track.index].player.start()
    }

    return (
        <div className="flex items-center flex-1 py-[.75vh]">
            <div onClick={handleClick} className="h-full pr-4 cursor-pointer w-1/8">
                <ScreenContainer 
                    styles={`relative h-full text-[1.1rem] ${currentTrack === track.index && "text-white"}`}
                >
                    {/* {(currentTrack === track.index) && <p className="absolute -translate-y-1/2 top-1/2 left-[10%]">•</p>} */}
                    <p>{track.name}</p>
                </ScreenContainer>
            </div>
            <div className="flex h-full w-7/8 gap-x-[1vw]">
                {track.trackButtons.map( (_, i)  => (
                    <TrackButton trackIndex={track.index} buttonIndex={i} trackButtons={track.trackButtons} setTracks={setTracks} key={`${track.index}-${i}`}/>
                ))}
            </div>
        </div>
    )
}

export default Track
