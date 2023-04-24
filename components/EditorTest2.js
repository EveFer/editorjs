import React from 'react'
import Editor from '@stfy/react-editor.js'
import Header from '@editorjs/header'

import { EDITOR_JS_TOOLS } from '../libs/tools'

console.log(EDITOR_JS_TOOLS)

export default function EditorTest () {
  return (
    <>
      <Editor
        autofocus
        holder='editor'
        // excludeDefaultTools={['header']}
        onChange={() => console.log('Something is changing!!')}
        onData={(data) => console.log(data)}
        onReady={() => console.log('Start!')}
        // data={{
        //   time: 1554920381017,
        //   blocks: [
        //     {
        //       type: 'header',
        //       data: {
        //         text: 'Hello Editor.js',
        //         level: 2
        //       }
        //     }
        //   ],
        //   version: '2.12.4'
        // }}
        data={{
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
                  url: 'https://picsum.photos/200/300'
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
          version: '2.12.4'
        }}
      />
      <div id='editor' />
    </>

  )
}
