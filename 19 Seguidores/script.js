const counters = document.querySelectorAll(".counter")
counters.forEach(item =>{
    item.innerText="0"
    const target = +item.getAttribute("data-target")
const interval =target/100

    const updateCounter=()=>{
        const value = +item.innerText;
        if(value<target){
            item.innerText=Math.ceil(value+interval);
            setTimeout(()=>{
                updateCounter()
            },20);

        }

    }
    updateCounter();

})