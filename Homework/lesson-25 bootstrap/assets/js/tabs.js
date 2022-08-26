// Tab_btns
const tab_btns = document.querySelector('#portfolio').children
console.dir(tab_btns)

const all_btn = tab_btns[0]
const photo_btn = tab_btns[1]
const logo_btn = tab_btns[2]
const web_btn = tab_btns[3]
// Tab_content
const tab_content = document.querySelector('#pills-tabContent').children
console.dir(tab_content)

const all_content = tab_content[0]
const photo_content = tab_content[1]
const logo_content = tab_content[2]
const web_content = tab_content[3]

// $('#pills-all-tab').on('click', function (event) {
//     event.preventDefault()
//     $(photo_content).tab('show')
//     $(logo_content).tab('show')
//     $(web_content).tab('show')
// })