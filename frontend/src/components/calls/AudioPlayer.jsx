// AudioPlayer component for playing call recordings
const AudioPlayer = () => {
  return (
    <div className='mt-5 px-4 py-2 bg-gray-100 rounded-2xl'>
        <p className='font-bold'>Audio Player</p>
        <audio controls className='w-full h-16'>
        <source
            src="sample.mp3"
            type="audio/mpeg"
            className='w-full h-16 rounded-lg border border-gray-300'
        />
        </audio>
    </div>
  )
}

export default AudioPlayer