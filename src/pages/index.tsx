import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { LogoInstagram, Blog } from '@carbon/icons-react'


const pageStyles = {
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const IndexPage: React.FC<PageProps> = () => {
  const defaultLetters = [
    {
      letter: "M",
      color: "#FF0000",
      fontFamily: "Arial",
      transform: "translate(2px, -3px) rotate(5deg)",
    }, {
      letter: "I",
      color: "#00FF00",
      fontFamily: "Arial",
      transform: "translate(-1px, 2px) rotate(-3deg)",
    }, {
      letter: "S",
      color: "#0000FF",
      fontFamily: "Arial",
      transform: "translate(3px, 1px) rotate(2deg)",
    }, {
      letter: "S",
      color: "#FF00FF",
      fontFamily: "Arial",
      transform: "translate(-2px, -2px) rotate(-4deg)",
    }, {
      letter: "U",
      color: "#00FFFF",
      fontFamily: "Arial",
      transform: "translate(1px, 3px) rotate(3deg)",
    }, {
      letter: "T",
      color: "#FFFF00",
      fontFamily: "Arial",
      transform: "translate(-3px, -1px) rotate(-2deg)",
    }, {
      letter: "E",
      color: "#FF0000",
      fontFamily: "Arial",
      transform: "translate(2px, 2px) rotate(4deg)",
    }, {
      letter: "K",
      color: "#8000FF",
      fontFamily: "Arial",
      transform: "translate(-1px, -3px) rotate(-5deg)",
    }, {
      letter: "I",
      color: "#008080",
      fontFamily: "Arial",
      transform: "translate(3px, -2px) rotate(3deg)",
    }
  ];

  const [letters, setLetters] = React.useState(defaultLetters);
  const fonts = ['Arial', 'Verdana', 'Georgia', 'Courier', 'Times New Roman', 'Palatino', 'Garamond', 'Bookman', 'Comic Sans MS', 'Trebuchet MS', 'Arial Black', 'Impact'];
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FF00FF', '#00FFFF', '#FFFF00', '#FF8000', '#8000FF', '#008080', '#800000', '#008000', '#000080'];

  const handleClickLetter = (letterIndex: number) => () => {

    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    setLetters([...letters.slice(0, letterIndex), {
      ...letters[letterIndex],
      color: randomColor,
      fontFamily: randomFont,
    }, ...letters.slice(letterIndex + 1)]);

  }
  return (
    <main className="flex justify-center items-center h-[100vh] flex-col gap-10" style={pageStyles}>
    <div id="word" className="text-8xl mx-auto ">
      {letters.map(({letter, color, transform, fontFamily}, letterIndex) => {
        return <span 
          className="hover:animate-wiggle transition-all cursor-pointer inline-block mx-2" 
          style={{color, transform, fontFamily}} 
          onClick={handleClickLetter(letterIndex)}>
            {letter}
        </span>
      })}
    </div>
    <div>
      Ariel Liu makes art and makes art about art.
    </div>
    <div className=" flex space-x-4">
        <a href="https://www.instagram.com/missuteki/" className="flex items-center p-2" target="_blank" 
          style={{color: colors[Math.floor(Math.random() * colors.length)]}}>
          <LogoInstagram className="mr-2" /> <span >Instagram</span>
        </a>
        <a href="https://missuteki.substack.com/" className="flex items-center p-2" target="_blank"
          style={{color: colors[Math.floor(Math.random() * colors.length)]}}>
          <Blog className="mr-2" /> Newsletter
        </a>
      </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
