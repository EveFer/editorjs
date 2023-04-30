import EditorJS from '@editorjs/editorjs'
import { EDITOR_JS_TOOLS } from '../libs/tools'
import { useEffect, useId, useRef } from 'react'

import Embed from '@editorjs/embed'
import Table from '@editorjs/table'
import Paragraph from 'editorjs-paragraph-with-alignment'
import List from '@editorjs/list'
import Warning from '@editorjs/warning'
import Code from '@editorjs/code'
import LinkTool from '@editorjs/link'
import ImageTool from '@editorjs/image'
import RawTool from '@editorjs/raw'
import Header from '@editorjs/header'
import Quote from '@editorjs/quote'
import Marker from '@editorjs/marker'
import CheckList from '@editorjs/checklist'
import Delimiter from '@editorjs/delimiter'
import InlineCode from '@editorjs/inline-code'
import SimpleImage from '@editorjs/simple-image'
import Tooltip from 'editorjs-tooltip'
import ColorPlugin from 'editorjs-text-color-plugin'
import MermaidTool from 'editorjs-mermaid'
import EditorJSLayout from 'editorjs-layout'

export default function Editor () {
  const holder = useId()
  const editor = useRef()
  useEffect(() => {
    if (editor.current) {
      editor.current = new EditorJS({
        data: {
          blocks: [
            {
              id: 'zcKCF1S7X8',
              type: 'header',
              data: {
                text: 'Editor.js',
                level: 1
              }
            },
            {
              id: 'b6ji-DvaKb',
              type: 'paragraph',
              data: {
                text: 'Hey. Meet the new Editor. On this page you can see it in action — try to edit this text. Source code of the page contains the example of connection and configuration.'
              }
            },
            {
              type: 'header',
              id: '7ItVl5biRo',
              data: {
                text: 'Key features',
                level: 2
              }
            },
            {
              type: 'list',
              id: 'SSBSguGvP7',
              data: {
                items: [
                  {
                    content: 'It is a block-styled editor',
                    items: []
                  },
                  {
                    content: 'It returns clean data output in JSON',
                    items: []
                  },
                  {
                    content: 'Designed to be extendable and pluggable with a simple API',
                    items: []
                  }
                ],
                style: 'unordered'
              }
            },
            {
              type: 'header',
              id: 'QZFox1m_ul',
              data: {
                text: 'What does it mean «block-styled editor»',
                level: 2
              }
            },
            {
              type: 'paragraph',
              id: 'bwnFX5LoX7',
              data: {
                text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class=\"cdx-marker\">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
              }
            },
            {
              type: 'paragraph',
              id: 'mTrPOHAQTe',
              data: {
                text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
              }
            },
            {
              type: 'header',
              id: '1sYMhUrznu',
              data: {
                text: 'What does it mean clean data output',
                level: 2
              }
            },
            {
              type: 'paragraph',
              id: 'jpd7WEXrJG',
              data: {
                text: 'Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below'
              }
            },
            {
              type: 'paragraph',
              id: '0lOGNUKxqt',
              data: {
                text: 'Given data can be used as you want: render with HTML for <code class="inline-code">Web clients</code>, render natively for <code class="inline-code">mobile apps</code>, create markup for <code class="inline-code">Facebook Instant Articles</code> or <code class="inline-code">Google AMP</code>, generate an <code class="inline-code">audio version</code> and so on.'
              }
            },
            {
              type: 'paragraph',
              id: 'WvX7kBjp0I',
              data: {
                text: 'Clean data is useful to sanitize, validate and process on the backend.'
              }
            },
            {
              type: 'delimiter',
              id: 'H9LWKQ3NYd',
              data: {}
            },
            {
              type: 'paragraph',
              id: 'h298akk2Ad',
              data: {
                text: 'We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make its core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏'
              }
            },
            {
              type: 'image',
              data: {
                file: {
                  url: 'https://www.tesla.com/tesla_theme/assets/img/_vehicle_redesign/roadster_and_semi/roadster/hero.jpg',
                  key: 'wferty'
                },
                caption: 'Roadster // tesla.com',
                withBorder: false,
                withBackground: false,
                stretched: false
              }
            },
            {
              type: 'linkTool',
              data: {
                link: 'https://codex.so',
                meta: {
                  title: 'CodeX Team',
                  site_name: 'CodeX',
                  description: 'Club of web-development, design and marketing. We build team learning how to build full-valued projects on the world market.',
                  image: {
                    url: 'https://codex.so/public/app/img/meta_img.png'
                  }
                }
              }
            }
          ]
        },
        holder,
        tools: {
          image: {
            class: ImageTool,
            actions: [
              {
                action: (name) => {
                  console.log(name)
                }
              }
            ],
            config: {
              endpoints: {
                byFile: 'http://localhost:8080/api/images' // Your backend file uploader endpoint
              }

            }
          },
          mermaid: MermaidTool,
          paragraph: {
            class: Paragraph,
            inlineToolbar: true
          },
          /**
             * Each Tool is a Plugin. Pass them via 'class' option with necessary settings {@link docs/tools.md}
             */
          header: {
            class: Header,
            inlineToolbar: ['marker', 'link'],
            config: {
              placeholder: 'Header'
            },
            shortcut: 'CMD+SHIFT+H'
          },
          list: {
            class: List,
            inlineToolbar: true,
            shortcut: 'CMD+SHIFT+L'
          },

          checklist: {
            class: CheckList,
            inlineToolbar: true
          },
          Color: {
            class: ColorPlugin, // if load from CDN, please try: window.ColorPlugin
            config: {
              colorCollections: ['#EC7878', '#9C27B0', '#673AB7', '#3F51B5', '#0070FF', '#03A9F4', '#00BCD4', '#4CAF50', '#8BC34A', '#CDDC39', '#FFF'],
              defaultColor: '#FF1300',
              type: 'text',
              customPicker: true // add a button to allow selecting any colour
            }
          },
          tooltip: {
            class: Tooltip,
            config: {
              location: 'left',
              highlightColor: '#FFEFD5',
              underline: true,
              backgroundColor: '#154360',
              textColor: '#FDFEFE',
              holder: 'editorId'
            }
          },

          quote: {
            class: Quote,
            inlineToolbar: true,
            config: {
              quotePlaceholder: 'Enter a quote',
              captionPlaceholder: 'Quote\'s author'
            },
            shortcut: 'CMD+SHIFT+O'
          },

          warning: Warning,

          marker: {
            class: Marker,
            shortcut: 'CMD+SHIFT+M'
          },

          code: {
            class: Code,
            shortcut: 'CMD+SHIFT+C'
          },

          delimiter: Delimiter,

          inlineCode: {
            class: InlineCode,
            shortcut: 'CMD+SHIFT+C'
          },

          linkTool: LinkTool,

          embed: {
            class: Embed,
            config: {
              services: {
                youtube: true,
                coub: true
              }
            }
          },

          table: {
            class: Table,
            inlineToolbar: true,
            shortcut: 'CMD+ALT+T'
          },
          raw: RawTool

        },
        onReady: () => {
          MermaidTool.config({ theme: 'neutral' })
        }
      })
    }

    return () => {
      if (editor.current && editor.current.destroy) {
        editor.current.destroy()
      }
    }
  }, [holder])
  return (
    <div id={holder} ref={editor} />
  )
}
