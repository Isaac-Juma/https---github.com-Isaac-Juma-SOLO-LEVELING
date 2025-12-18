const Navbar = [
    {
        name: '',


    },




];

const Card = {
    name: 'Isaac',
    last: 'Juma',
    third: 'okubo',

    getme () 
      {
        console.log(this.name);
        return `Hello ${this.name}`


    }

}
const obj =  {
    display: 'flex',
    background: 'blue',
    Height: '300px',
    Width: '300px',
    border: '10px solid black'
}
let mydiv = document.getElementById('mydiv');
for (const key in obj) {
    mydiv.style[key] = obj[key];
}




export default Navbar;

