function createMenu() {

    let pMenuPage, pTop, pBody, pBottom;

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

    function createMenu(tImg, tText1, tText2) {

        let result;

        result = document.createElement("div");
        result.classList.add("picContainer");

        const mImage = document.createElement("img");
        mImage.src = tImg;
        mImage.alt = "Picture";
        mImage.setAttribute("height", "auto");
        mImage.setAttribute("width", "500px");

        const mText1 = document.createElement("h4");
        mText1.textContent = tText1;
        const mText2 = document.createElement("p");
        mText2.textContent = tText2;

        const mTextBox = document.createElement("div");
        mTextBox.classList.add("picText-block");
        mTextBox.appendChild(mText1);
        mTextBox.appendChild(mText2);

        result.appendChild(mImage);
        result.appendChild(mTextBox);

        return result;
    }

    const pLeft = document.createElement("div");
    const pMiddle = document.createElement("div");
    const pRight = document.createElement("div");

    pMiddle.classList.add("pMiddle");

    const pMiddleUp = createMenu("images/bowl-1932375_960_720.jpg",
        "Desset......1 USD",
        "The most charming dessert from our restaurant.");

    const pMiddleMid = createMenu("images/cake-1850011_960_720.jpg",
        "Cake......1 USD",
        "Nothing is so refreshing like our really sweet cake.");

    const pMiddleDown = createMenu("images/orange-cake-398966_960_720.jpg",
        "Orange Cake......1 USD",
        "Very delicious !");

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
    pMenuPage = document.createElement("div");
    pMenuPage.setAttribute("id", "inner-content");
    pMenuPage.appendChild(pTop);
    pMenuPage.appendChild(pBody);
    pMenuPage.appendChild(pBottom);

    return pMenuPage;
}

export default createMenu;