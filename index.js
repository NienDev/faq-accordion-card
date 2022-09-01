const log = console.log 
const btns = document.querySelectorAll('i')
const questions = document.querySelectorAll('.question')

function makeActive(e){
  const downArrow = e.target.parentElement.querySelector('.bx-chevron-down');
  const upArrow = e.target.parentElement.querySelector('.bx-chevron-up');
  const answer = e.target.parentElement.parentElement.querySelector('.answer')
  if (downArrow.classList.contains('hidden')){
    downArrow.classList.remove('hidden')
    upArrow.classList.add('hidden')
    answer.classList.add('hidden')
  }else{
    downArrow.classList.add('hidden')
    upArrow.classList.remove('hidden')
    answer.classList.remove('hidden')
  }
}

btns.forEach(btn=>{
  btn.addEventListener('click', e=>{
    makeActive(e)
  })
})

questions.forEach(question=>{
  question.addEventListener('click', (e)=>{
    makeActive(e)
  })
})
