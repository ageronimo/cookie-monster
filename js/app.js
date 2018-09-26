function resizeGridItem(item) {
    grid = document.getElementsByClassName("cookieGrid")[0];
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.content').getBoundingClientRect().height + rowGap) / (rowHeight + rowGap));
    item.style.gridRowEnd = "span " + rowSpan;
}

function resizeAllGridItems() {
    allItems = document.getElementsByClassName("item");
    for (var x = 0; x < allItems.length; x++) {
        resizeGridItem(allItems[x]);
    }
}

function resizeInstance(instance) {
    item = instance.elements[0];
    resizeGridItem(item);
}

// window.onload = resizeAllGridItems();
// $(document).ready(resizeAllGridItems());
window.setTimeout(resizeAllGridItems, 50);

window.addEventListener("resize", resizeAllGridItems);

allItems = document.getElementsByClassName("item");
for ( var x = 0; x < allItems.length; x++) {
    console.log(allItems[x]);
    resizeInstance(allItems[x]);
}

//window.height