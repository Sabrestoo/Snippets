const input = document.querySelector('input');

const debounce = (func, timer) => {
    let timeId = null;

    return (...args) => {
        if(timeId){
            clearTimeout(timeId);
        }
        timeId = setTimeout(()=> {
            func(...args);
        }, timer)
    }
}

input.addEventListener('keyup', debounce((e) => 
{
    console.log(e);
}, 1000));

