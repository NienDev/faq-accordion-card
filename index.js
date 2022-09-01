const log = console.log 
const btns = document.querySelectorAll('i')
const questions = document.querySelectorAll('.question')

function makeActive(e){
  const downArrow = e.target.parentElement.querySelector('.bx-chevron-down');
  const upArrow = e.target.parentElement.querySelector('.bx-chevron-up');
  const answer = e.target.parentElement.parentElement.querySelector('.answer')
  const question = e.target.parentElement.querySelector('.question');
  if (downArrow.classList.contains('hidden')){
    downArrow.classList.remove('hidden')
    upArrow.classList.add('hidden')
    answer.classList.add('hidden')
    question.classList.remove('font-bold')
  }else{
    downArrow.classList.add('hidden')
    upArrow.classList.remove('hidden')
    answer.classList.remove('hidden')
    question.classList.add('font-bold')
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
