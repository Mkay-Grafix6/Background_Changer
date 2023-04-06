const display = document.getElementById('display');

// DISPLAY CHANGING FUNCTIONS
function none() {
    display.style.background = 'none';
}

function red() {
    display.style.background = 'red';
}

function green() {
    display.style.background = 'green';
}

function blue() {
    display.style.background = 'blue';
}

function yellow() {
    display.style.background = 'yellow';
}

function cyan() {
    display.style.background = 'cyan';
}

function magenta() {
    display.style.background = 'magenta';
}

//SETTINGS PANEL CODE

const settings = document.getElementById("settingsPanel");

function showPanel() {
    settings.style.display = "block";
}

function exit() {
    settings.style.display = "none";
}

// THEME CHANGING FUNCTIONS
function light() {
    document.body.style.background = 'white';
    settings.style.background = "black";
    settings.style.color = "white";
    settings.boxShadow = "none";
    document.getElementById('color').style.display = 'none';
    document.getElementById('images').style.display = 'none';
}

function dark() {
    document.body.style.background = 'black';
    document.body.style.color = 'white';
    settings.style.background = "white";
    settings.style.boxShadow = "0px 0px 20px 5px black";
    settings.style.color = "black";
    display.style.background = "whitesmoke";
    document.getElementById('color').style.display = 'none';
    document.getElementById('images').style.display = 'none';
}

function solid() {
    document.getElementById('color').style.display = 'flex';
    document.getElementById('images').style.display = 'none';
}

function image() {
    document.getElementById('color').style.display = 'none';
    document.getElementById('images').style.display = 'flex';

}
//SOLID BACKGROUND COLOR CHANGING
function b_none() {
    document.body.style.background = 'none';
}

function b_red() {
    document.body.style.background = 'red';
}

function b_green() {
    document.body.style.background = 'green';
}

function b_blue() {
    document.body.style.background = 'blue';
}

function b_yellow() {
    document.body.style.background = 'yellow';
}

function b_cyan() {
    document.body.style.background = 'cyan';
}

function b_magenta() {
    document.body.style.background = 'magenta';
}

function b_azure() {
    document.body.style.background = 'azure';
}

function b_brown() {
    document.body.style.background = 'brown';
}

function b_burlywood() {
    document.body.style.background = 'burlywood';
}

function b_darkcyan() {
    document.body.style.background = 'darkcyan';
}

//BACKGROUND IMAGE FUNCTIONS
function b_img1() {
    document.body.style.background = `url("assets/images/Hedy Graphics (17).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img2() {
    document.body.style.background = `url("assets/images/Hedy Graphics (18).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img3() {
    document.body.style.background = `url("assets/images/Hedy Graphics (19).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img4() {
    document.body.style.background = `url("assets/images/Hedy Graphics (2).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img5() {
    document.body.style.background = `url("assets/images/Hedy Graphics (2).png")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img6() {
    document.body.style.background = `url("assets/images/Hedy Graphics (20).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img7() {
    document.body.style.background = `url("assets/images/Hedy Graphics (21).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img8() {
    document.body.style.background = `url("assets/images/Hedy Graphics (22).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img9() {
    document.body.style.background = `url("assets/images/Hedy Graphics (3).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img10() {
    document.body.style.background = `url("assets/images/Hedy Graphics (4).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img11() {
    document.body.style.background = `url("assets/images/Hedy Graphics (5).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img12() {
    document.body.style.background = `url("assets/images/Hedy Graphics (6).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img13() {
    document.body.style.background = `url("assets/images/Hedy Graphics (7).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img14() {
    document.body.style.background = `url("assets/images/Hedy Graphics (8).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}

function b_img15() {
    document.body.style.background = `url("assets/images/Hedy Graphics (9).jpg")`;
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundAttachment = 'fixed';
}