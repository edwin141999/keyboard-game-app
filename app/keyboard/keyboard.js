'use client'
import { useEffect } from "react";
import Key from "../components/key";

export default function Keyboard() {
  const LETTERS = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ', 'z', 'x', 'c', 'v', 'b', 'n', 'm']

  //TODO: Mostrar que letra toca
  const TOUCH_LETTER = []

  useEffect(() => {
    window.addEventListener('keydown', function (e) {
      // console.log(`You pressed ${e.key}`);
    }, false);
  }, [])


  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-10 gap-2 w-1/2">
        {LETTERS.map(letter => {
          return (
            <Key key={letter} word={letter} className={'flex border-red-500 border-2 justify-center px-1 rounded-sm'} />
          )
        })}
      </div>
    </div>
  )
}