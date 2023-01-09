import React from "react"
import { StaticQuery, graphql } from "gatsby"

import MusicPlayer from "react-h5-audio-player"
import "react-h5-audio-player/lib/styles.css"
import "./MusicPlayer.css"
// Note: You can change "images" to whatever you'd like.



const MusicPlayers = props => (
  <StaticQuery
    query={graphql`
      query {
        audio: file(
          relativePath: { eq: "https://webaudiovedicnation.s3.amazonaws.com/audio/book2.mp3" }      
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
          <MusicPlayer
            autoPlay={false}
            src={audio.publicURL}
            onPlay={e => console.log("")}
          />
        </div>
      )
    }}
  />
)






export default MusicPlayers

