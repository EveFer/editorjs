import React from 'react'
import Output from 'editorjs-react-renderer'

const data = {
  time: 1564767102436,
  blocks: [
    {
      type: 'header',
      data: {
        level: 4,
        text: 'Editor.js React Renderer'
      }
    },
    {
      type: 'image',
      data: {
        file: {
          url: '<image url here>'
        },
        caption: 'Test Caption',
        withBorder: false,
        stretched: false,
        withBackground: false
      }
    },
    {
      type: 'paragraph',
      data: {
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque accusantium veritatis dolorum cum amet! Ipsa ullam nisi, dolor explicabo ut nobis repudiandae saepe illo error facilis consectetur, quisquam assumenda dolorum.'
      }
    }
  ],
  version: '2.14.0'
}
export default function EditorTest () {
  return (
    <section><Output data={data} /></section>
  )
}
