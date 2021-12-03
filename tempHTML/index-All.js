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




function createContact() {

    let pContactPage, pTop, pBody, pBottom;

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

    const pLeft = document.createElement("div");
    const pMiddle = document.createElement("div");
    const pRight = document.createElement("div");

    pMiddle.classList.add("pMiddle");


    /*** Text Address ***/
    const pMiddleUp = document.createElement("div");
    const pAdd1 = document.createElement("h4");
    pAdd1.textContent = "Contact :";
    const pAdd2 = document.createElement("p");
    pAdd2.textContent = "1234 East/West Somewhere Road USA.";
    const pAdd3 = document.createElement("p");
    pAdd3.textContent = "Tel : 555-555-555";
    pMiddleUp.appendChild(pAdd1);
    pMiddleUp.appendChild(pAdd2);
    pMiddleUp.appendChild(pAdd3);

    /**** Map Address ***/

    const mapSource = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10307.720726378328!2d100.35730104752614!3d14.597204946277326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sth!4v1638518269902!5m2!1sen!2sth";

    const pMiddleMid = document.createElement("div");
    const pMiddleDiv = document.createElement("div");
    pMiddleDiv.setAttribute("style", "width: 100%");
    const pMiddleIframe = document.createElement("iframe");
    pMiddleIframe.setAttribute("width", "600px");
    pMiddleIframe.setAttribute("height", "300px");
    pMiddleIframe.setAttribute("src", mapSource);

    pMiddleDiv.appendChild(pMiddleIframe);
    pMiddleMid.appendChild(pMiddleDiv);

    pMiddle.appendChild(pMiddleUp);
    pMiddle.appendChild(pMiddleMid);

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
    pContactPage = document.createElement("div");
    pContactPage.setAttribute("id", "inner-content");
    pContactPage.appendChild(pTop);
    pContactPage.appendChild(pBody);
    pContactPage.appendChild(pBottom);

    return pContactPage;
}

function changePage(e) {

    const pageSelection = e.target.getAttribute('page');
    console.log(pageSelection);
    console.log(currentPage);


    if (pageSelection != currentPage) {
        currentPage = pageSelection;
        while (contentMain.firstChild) {
            contentMain.removeChild(contentMain.firstChild);
        }
        if (pageSelection == 1) {
            contentMain.appendChild(createMain());
        } else if (pageSelection == 2) {
            contentMain.appendChild(createMenu());
        } else if (pageSelection == 3) {
            contentMain.appendChild(createContact());
        }
    }

    const butts = Array.from(document.querySelectorAll('button'));
    butts.forEach(key => key.addEventListener('click', changePage));

}

let currentPage = 1;

const contentMain = document.getElementById('content');
contentMain.appendChild(createMain());

const butts = Array.from(document.querySelectorAll('button'));
butts.forEach(key => key.addEventListener('click', changePage));

// Embedded Google Map : https://www.businessinsider.com/how-to-embed-google-map