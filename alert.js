console.log('i am here');

// alert('Ma is coming!!');

const maComing = () => {
    alert('Mom is coming. Open the book');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake fee ta bKash kore de');
    }
    else {
        console.log('DGM !!! Door e giya mor!!!');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
    else {
        console.log('Write down your name');
    }
}