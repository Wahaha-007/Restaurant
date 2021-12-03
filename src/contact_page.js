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

export default createContact;