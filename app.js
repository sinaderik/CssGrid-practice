const btn=document.getElementById('main-btn')
const container=document.querySelector('#gridContainer')
const gridItems=container.children

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const gridItem=document.createElement('div')
    gridItem.className='grid-item';
    gridItem.innerText=`New Item ${gridItems.length +1}`
    container.append(gridItem)
})