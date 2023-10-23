function forms() {
    let name = document.querySelector('input#idname').value
    let email = document.querySelector('input#idemail').value
    let msg = document.querySelector('textarea#idtextarea').value
    
    if (name == 'Lucas Lira') {
        window.alert('Owner of the page.')

    } else {
        window.alert('Normal user.')

    }
}