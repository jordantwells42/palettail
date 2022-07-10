import { AnyMxRecord } from 'dns'
import { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react'
import Landing from '../components/landing'
import { ColorResult } from 'react-color'
import LightDark from '../components/lightdark'
import Complements from '../components/complements'
import Generator from '../components/generator'

const tinycolor = require('tinycolor2')

const Home: NextPage = () => {
  const [lightColor, setLightColor] = useState(
    tinycolor({ h: 60, s: 0.05, v: 0.95 })
  )
  const [darkColor, setDarkColor] = useState(
    tinycolor({ h: 280, s: 0.05, v: 0.04 })
  )
  const [color, setColor] = useState<any>(tinycolor({ h: 120, s: 0.5, v: 0.5 }))
  const [complements, setComplements] = useState<any>(color.tetrad().slice(1))
  const [palette, setPalette] = useState<any[]>([])

  function handlePick (inpcolor: any) {
    setColor(tinycolor(inpcolor.hsv))
    setComplements(color.tetrad().slice(1))
  }

  function handlePickLight (inpcolor: any) {
    setLightColor(tinycolor(inpcolor.hsv))
  }

  function handlePickDark (inpcolor: any) {
    setDarkColor(tinycolor(inpcolor.hsv))
  }

  return (
    <>
      <Head>
        <title>PaletTail</title>
        <meta name='description' content='Generated by create-t3-app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-full bg-slate-50 h-full flex flex-col justify-center items-center overflow-x-hidden'>
        <Landing
          color={color}
          lightColor={lightColor}
          darkColor={darkColor}
          handlePick={handlePick}
        />
        <Complements
          color={color}
          complements={complements}
          lightColor={lightColor}
          darkColor={darkColor}
          setComplements={setComplements}
        />
        <LightDark
          color={color}
          complements={complements}
          lightColor={lightColor}
          darkColor={darkColor}
          handlePickLight={handlePickLight}
          handlePickDark={handlePickDark}
        />
        <Generator
          color={color}
          complements={complements}
          lightColor={lightColor}
          darkColor={darkColor}
          palette={palette}
          setPalette={setPalette}
        />
        <div className='flex flex-col h-full w-full'>
          
        </div>
        <div className='flex flex-row justify-between w-full h-full'></div>
      </div>
    </>
  )
}

export default Home