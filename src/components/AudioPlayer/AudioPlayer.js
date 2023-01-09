import React from "react"
import { StaticQuery, graphql } from "gatsby"

import AudioPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "./AudioPlayer.css"
// Note: You can change "images" to whatever you'd like.



const AudioPlayers = props => (
  <StaticQuery
    query={graphql`
      query {
        audio: file(
          relativePath: { eq: "https://webaudiovedicnation.s3.amazonaws.com/audio/kashish-jee-kee-raashtreey-soch.mp3" }      
        ) {
          id
          publicURL
          relativePath
        }
      }
    `}

    

    
    
    render={data => {
      const audio = data.audio
      return (
        <div className="main-audio-player">
          <AudioPlayer
            autoPlay={false}
            src={audio.publicURL}
            onPlay={e => console.log("")}
          />
        </div>
      )
    }}
  />
)






export default AudioPlayers

