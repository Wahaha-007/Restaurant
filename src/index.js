import createMain from './main_page';
import createMenu from './menu_page';
import createContact from './contact_page';

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