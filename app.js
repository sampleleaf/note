// filter of commend
const nav = document.querySelector('#nav')
const list = document.querySelector('#introduction')

document.querySelectorAll('input[name="select"]').forEach(function(select){
    select.addEventListener('change',function(e){
        let select = e.target.id; //e.target 是被指定的<input>
        for (let i = 0; i < nav.children.length; i++){
            if(select == 'all'){ //顯示所有鏡框
                nav.children[i].classList.remove('hide')
                list.children[i].classList.remove('hide')
            }else if(select == nav.children[i].classList[0] || select == nav.children[i].classList[1]){  //被選擇的<a>class
                nav.children[i].classList.remove('hide')
                list.children[i].classList.remove('hide')
            }else{
                nav.children[i].classList.add('hide')
                list.children[i].classList.add('hide')
            }
        }
    })
})