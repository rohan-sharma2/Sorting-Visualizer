async function bubble() {
    console.log("In bubble()");
    const ele = document.querySelectorAll(".bar");
    for (let i = 0; i < ele.length - 1; i++) {
        console.log("In ith loop");
        for (let j = 0; j < ele.length - i - 1; j++) {
            console.log("In jth loop");
            ele[j].style.background = "#864879";
            ele[j + 1].style.background = "#864879";
            if (
                parseInt(ele[j].style.height) >
                parseInt(ele[j + 1].style.height)
            ) {
                console.log("In if condition");
                await waitforme(delay);
                swap(ele[j], ele[j + 1]);
            }
            ele[j].style.background = "#E9A6A6";
            ele[j + 1].style.background = "#E9A6A6";
        }
        ele[ele.length - 1 - i].style.background = "#FF5151";
    }
    ele[0].style.background = "#FF5151";
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener("click", async function () {
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
