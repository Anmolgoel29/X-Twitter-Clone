let cur;

document.querySelectorAll(".nav>ul>span").forEach((element, ind, arr) => {
    element.addEventListener("click", () => {
        element.style.transform = "scale(1.1)"
        element.style.fontWeight = "bolder"
        console.log(arr)
        console.log(cur, arr[cur]);
        try {
            arr[cur].style.transform = "none"
            arr[cur].style.fontWeight = "normal"
        }
        finally{
            cur = ind;
        }
    })
})