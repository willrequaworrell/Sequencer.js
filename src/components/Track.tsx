import ScreenContainer from "./ScreenContainer"
import TrackButton from "./TrackButton"
import { TrackType } from '../types/track';
import { useTracksContext } from "../context/TracksContext";


interface TrackPropsType {
    track: TrackType
    setTracks: React.Dispatch<React.SetStateAction<TrackType[]>>
}

const Track = ({track, setTracks}:TrackPropsType) => {
    const {setCurrentTrack} = useTracksContext()

    const handleClick = () => {
        setCurrentTrack(track.index)
    }

    return (
        <div className="flex items-center flex-1 py-2">
            <div onClick={handleClick} className="h-full pr-4 cursor-pointer w-1/8">
                <ScreenContainer 
                    styles="h-full text-[1.1rem]"
                >
                    <p>{track.name}</p>
                </ScreenContainer>
            </div>
            <div className="flex h-full w-7/8 gap-x-4 ">
                {track.trackButtons.map( (_, i)  => (
                    <TrackButton trackIndex={track.index} buttonIndex={i} trackButtons={track.trackButtons} setTracks={setTracks} key={`${track.index}-${i}`}/>
                ))}
            </div>
        </div>
    )
}

export default Track
