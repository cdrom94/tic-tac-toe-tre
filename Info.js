import React, { useState, memo } from 'react'
import styled, { css, createGlobalStyle } from 'styled-components'
import parkmusic from "./parkmusic.mp3"

const audio = new Audio(parkmusic)

const Info = ({board, xIsNext, winner, renderMoves}) => {
  const [sound, setSound] = useState(true)

  let status;
  winner && winner != "tie" ? status = "Winner: " + winner + "!"
  : winner === "tie" ? status = "Tie!"
  : status = "Next player: " + (xIsNext ? "Gem" : "Pearl")

  const toggle = () =>{
    if (sound){
      audio.play()
      audio.loop = true
    }
    else{
      audio.pause()
    }
    setSound(!sound)
  }

  return (
    <React.Fragment>
      <UpperLeft>
        <h1>Tic Tac Toe</h1>
      </UpperLeft>
      <UpperRight onClick={toggle}>
        <p>{sound ? <s>Ambience</s> : "Ambience"}</p>
      </UpperRight>
      <RightPanel>
        <a href="https://www.zapsplat.com">Audio provided by https://www.zapsplat.com</a>
      </RightPanel>
      <LowerLeft>
        <p>{status}</p>
      </LowerLeft>
      <LowerRight onClick={renderMoves}>
        <p>{ board.every(x => x === null) ? "" : "Restart" } </p>
      </LowerRight>
      <Global />
    </React.Fragment>
  )
}

const base = css`
  font-family: 'Teko', sans-serif;
  position: absolute;
  text-transform: uppercase;
  font-weight: 900;
  line-height: 1em;
  pointer-events: none;
  color: rgba(244, 199, 238, 0.76);
`

const RightPanel = memo(styled.div`
  ${base}
  top: 50%;
  right: -100px;
  font-size: 10px;
  font-weight: 400;
  -ms-transform: rotate(-90deg);
  transform: rotate(90deg);
  pointer-events: all;
  cursor: pointer;
   & > a {
    color: rgba(244, 199, 238, 0.76);
    text-decoration: none;
    text-align: center;
  }
`)

const UpperLeft = memo(styled.div`
  ${base}
  text-align: right;
  top: -15px;
  left: -20px;
  font-family: 'Monsieur La Doulaise', cursive;
  text-transform: capitalize;
  font-size: 40px;
  pointer-events: all;
  cursor: pointer;
`)

const UpperRight = styled.div`
  ${base}
  text-align: right;
  top: 40px;
  right: 50px;
  pointer-events: all;
  cursor: pointer;
  @media only screen and (max-width: 500px) {
    top: 100px;
  }
`

const LowerLeft = styled.div`
  ${base}
  bottom: 40px;
  left: 50px;
  width: 200px;
  @media only screen and (max-width: 350px) {
    text-align: center;
  }
}
`

const LowerRight = styled.div`
  ${base}
  bottom: 40px;
  right: 50px;
  width: 200px;
  text-align: right;
  pointer-events: all;
  cursor: pointer;
  @media only screen and (max-width: 350px) {
      bottom: 20px;
      text-align: center;
    }
  }
`

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    user-select: none;
    overflow: hidden;
  }
  #root {
    overflow: auto;
    padding: 0px;
  }
  body {
    position: fixed;
    overflow: hidden;
    overscroll-behavior-y: none;
    font-family: -apple-system, BlinkMacSystemFont, avenir next, avenir, helvetica neue, helvetica, ubuntu, roboto, noto, segoe ui, arial, sans-serif;
  }
`
export default React.memo(Info);