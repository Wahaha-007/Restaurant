function createMain() {

    let pMainPage, pTop, pBody, pBottom;

    /**** pTop *****/
    pTop = document.createElement("div");
    pTop.classList.add("pTop");

    const pTop1 = document.createElement("h1");
    pTop1.textContent = "The Ever Best Restaurant";

    const pTop2 = document.createElement("div");
    const pTopButton1 = document.createElement("button");
    pTopButton1.textContent = "Main";
    pTopButton1.setAttribute("page", "1");
    pTop2.appendChild(pTopButton1);

    const pTopButton2 = document.createElement("button");
    pTopButton2.textContent = "Menu";
    pTopButton2.setAttribute("page", "2");
    pTop2.appendChild(pTopButton2);

    const pTopButton3 = document.createElement("button");
    pTopButton3.textContent = "Contact";
    pTopButton3.setAttribute("page", "3");
    pTop2.appendChild(pTopButton3);

    pTop.appendChild(pTop1);
    pTop.appendChild(pTop2);

    /***** pBody *******/

    function createImg(choice, tImg, tText) {

        let result;

        result = document.createElement("div");
        result.classList.add("pMiddleContent");

        const mImage = document.createElement("img");
        mImage.src = tImg;
        mImage.alt = "Picture";
        mImage.setAttribute("height", "auto");
        mImage.setAttribute("width", "300px");

        const mText = document.createElement("p");
        mText.textContent = tText;

        if (choice) {
            result.appendChild(mImage);
            result.appendChild(mText);
        } else {
            result.appendChild(mText);
            result.appendChild(mImage);
        }

        return result;
    }

    const pLeft = document.createElement("div");
    const pMiddle = document.createElement("div");
    const pRight = document.createElement("div");

    pMiddle.classList.add("pMiddle");

    const pMiddleUp = createImg(true, "images/cafe-5579069_960_720.jpg",
        "Escape from you busy office to where you fulfill your mind");
    const pMiddleMid = createImg(false, "images/table-5706576_960_720.jpg",
        "This is our value");
    const pMiddleDown = createImg(true, "images/place-setting-2110245_960_720.jpg",
        "You will always discover what you want here !");

    pMiddle.appendChild(pMiddleUp);
    pMiddle.appendChild(pMiddleMid);
    pMiddle.appendChild(pMiddleDown);

    pBody = document.createElement("div");
    pBody.classList.add("pBody");
    pBody.appendChild(pLeft);
    pBody.appendChild(pMiddle);
    pBody.appendChild(pRight);

    /***** pButtom *******/

    pBottom = document.createElement("div");
    pBottom.classList.add("pBottom");
    pBottom.textContent = "No copyright at all (2021)";

    /*** Total Main Page *****/
    pMainPage = document.createElement("div");
    pMainPage.setAttribute("id", "inner-content");
    pMainPage.appendChild(pTop);
    pMainPage.appendChild(pBody);
    pMainPage.appendChild(pBottom);

    return pMainPage;
}

export default createMain;