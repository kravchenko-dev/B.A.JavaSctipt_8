'use strict'

let playList = [
  {
    author: 'LED ZEPPELIN',
    song: 'STAIRWAY TO HEAVEN',
  },

  {
    author: 'QUEEN',
    song: 'BOHEMIAN RHAPSODY',
  },

  {
    author: 'LYNYRD SKYNYRD',
    song: 'FREE BIRD',
  },

  {
    author: 'DEEP PURPLE',
    song: 'SMOKE ON THE WATER',
  },

  {
    author: 'JIMI HENDRIX',
    song: 'ALL ALONG THE WATCHTOWER',
  },

  {
    author: 'AC/DC',
    song: 'BACK IN BLACK',
  },

  {
    author: 'QUEEN',
    song: 'WE WILL ROCK YOU',
  },

  {
    author: 'METALLICA',
    song: 'ENTER SANDMAN',
  },
]

let btn1 = document.getElementById('firstBut')
let btn2 = document.getElementById('twoBut')
let btn3 = document.getElementById('threeBut')

function addPlayList(el) {
  let list = document.getElementById('list')
  el.forEach((band) => {
    let track = document.createElement('li')
    track.innerText = `${band.author} : ${band.song}`
    list.insertBefore(track, list.firstChild)
  })
}

btn1.onclick = () => addPlayList(playList)

// Task 2

function addModal() {
  let divClass = document.querySelector('.modal')
  if (divClass) return
  btn2.insertAdjacentHTML(
    'beforebegin',
    '<div class="modal"><button id="btnMod" class="modal__btn">Close</button></div>',
  )
  let btnModal = document.getElementById('btnMod')
  btnModal.onclick = () => deleteModal()
}

function deleteModal() {
  let div = document.querySelector('.modal')
  div.remove()
}

btn2.onclick = () => addModal()

// Task 3

let node = null
function light() {
  resetColor()
  if (node == null) {
    let list = document.getElementById('trafficLight')
    node = list.firstChild
    node.style.background = 'green'
    return
  }

  node = node.nextSibling
  console.log(node)
  if (node != null) {
    let color = node.id
    node.style.background = color
  }
}

function resetColor() {
  let List = document.getElementsByTagName('div')
  for (let i = 0; i < List.length; i++) {
    List[i].setAttribute('style', 'background:white')
  }
}

btn3.onclick = () => light()
