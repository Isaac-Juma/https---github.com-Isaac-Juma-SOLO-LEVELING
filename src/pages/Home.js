//Dom of Index.html 

// Dom components 
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');

})

// Header components
const Header = document.getElementById('HeaderPage');
Header.style.color = 'blue';
const UserDetails = document.getElementById('UserDetails');
const UserProfile = document.getElementById('UserProfile');
const UserPic = document.getElementById('UserPic');
const UserSettings = document.getElementById('UserSettings');
const UserStatus = document.getElementById('UserStatus');




// Navigation buttons
//home button
const HomeBtn = document.getElementById('HomeBtn');
HomeBtn.addEventListener('click', window.history.back())

//addbutton box 
 const AddBtn = document.getElementById('AddBtn');
 const SubBtn = document.getElementById('SubmitBtn');
 const MainGoal = document.getElementById('InputGoal')
 let LISTS = document.getElementById('Arrayoutput');
 const MyList = [];
 
 SubBtn.addEventListener('click', function () {
    const InputValue = MainGoal.value;
    if (InputValue.trim() !== "") {
      items.push(InputValue).title;
      Mission.push(InputValue).body;
      MyList.push(InputValue);
      LISTS.innerText = MyList.join(' , ') ;
      MainGoal.value = '';
      MainGoal.focus();
      // InputValue.value = '';
      // InputValue.focus();
    }
    else {
      return `enter your goals`
    }
  });

AddBtn.addEventListener('click', () => {
  let Modal = document.getElementById('ModalBox')
  Modal.classList.remove('hidden');



})

// new bpx
const ResulstBtn = document.getElementById('ResultsBtn');
const HealthBtn = document.getElementById('HealthBtn');


const TaskList = document.getElementById('TodoList');

// function AddTask(input)
//   { input = document.createElement('input');
//     input.type = 'text';
//     input.placeholder = "What's your Goals ?..."

//   }

// Menu and User Level
const Menu = document.getElementById('menu');
const MenuBtn = document.getElementById('MenuBtn');
const MenuText = document.getElementById('MenuText');
const StatusBar = document.getElementById('statusBar')
const NavBar = document.getElementById('NavBar');

Menu.addEventListener('click', () => {
  NavBar.classList.toggle('hidden');
})

// Navigation and User Bar
const UserNav = document.getElementById('UserNav');
const ListItems = document.getElementById('ListItems');


// MainPage and content
const MainPage = document.getElementById('MainPage');
const DailyQuests = document.getElementById('DailyQuests');
const MainHeader = document.getElementById('MainHeader');
const MainTitle = document.getElementById('MainTitle');

let CheckDone = document.getElementById('DoneCheckbox');
const UserXp = document.getElementById('UserExp');
const UserLevel = document.getElementById('UserLevel');

let ExPoints = 0;
let LevelPoints = 0;
let test = 0;

function ScoreHandler() {
  if (CheckDone.checked) {
      ExPoints ++ ;
      UserXp.innerHTML = `EX-P: ${ExPoints} - 100`;
      test++;
      if (DoneBtn.addEventListener('click', () => {
        CheckDone.checked = false;
      }))

    if (test === 7 ) {
      LevelPoints++;
      UserLevel.innerText = `LEVEL:${LevelPoints} - 100`
      test = 0;
    }
  }
  // else if (CheckDone.unchecked) {
  //   ExPoints-= 1;
  //   UserXp.innerText = `POINTS: ${ExPoints} - 100`

  // }
  else {
    ExPoints --;
    UserXp.innerHTML = `EX-P: ${ExPoints} - 100`
  }


};

CheckDone.addEventListener('change', ScoreHandler);

let DailyChecks = document.getElementById('DailyChecks')
const DoneBtn = document.getElementById('DoneBtn');
let InfoDisplay = document.getElementById('InfoDisplay');
let LevelDisplay = document.getElementById('LevelDisplay');
let Showitem = document.getElementById('GoalsList');
let MissionDisplay = document.getElementById('MissionDisplay');
let arr = document.getElementById('Arrayoutput')

let items = [
  {title: 'STUDY', body : 'body 1'}, 
  {title: 'EXERCISE', body: 'body 2'},
  {title: 'MEDITATE FOR 20 MINS OF SILIENCE', body: 'am his body'},
  {title: 'PRACTICE THE LAWS OF HUMAN NATURE THAT YOU READ THIS MORNING', body: 'body 4'} ];
  
  let Mission = [
    {title: 'title 1', body: 'STUDY FOR 30 MINS BEFORE GOING TO BED AND LEAVING. IT WILL INCREASE YOUR UNDERSTANDING, CLARITY AND FOCUS FOR A BETTER LIFE'},
    {title: 'hello', body: 'exercise today for 30 mins immediatly after work'},
  {title: 'title 3', body: 'YOUR GREATEST ENEMY IS YOUR MIND, CONTROL IT, GUIDE IT, AND LET IT SERVE YOU . IT IS A VERY GOOD AND LOYAL SERVENT'},
  {title: 'title 4', body: 'YOU HAVE TO PRACTICE THE LAW OF IRATIONALITY IF YOU WANT TO UNDERSTAND HUMAN BEINGS AND KNOW HOW TO DEAL WITH THEM'}
];

let CurrentItem = 0;
let miss = 0;

function SysUpdater () {
  CheckDone.unchecked
  if (CheckDone.checked) {
    DoneBtn.innerText = 'NEXT';
    
    if (CurrentItem < items.length) {
      Showitem.innerHTML = items[CurrentItem].body;
      CurrentItem++;
      
      if (miss < Mission.length) {
        MissionDisplay.innerText = Mission[miss].title;
        miss++;
      }
      
      if (CurrentItem  > items)  {
          CheckDone.disabled = true;
          DoneBtn.disabled = true;
          DoneBtn.innerText = 'Done';
          
        }
    }
    
  }
}
DoneBtn.addEventListener('click', SysUpdater);


// Progress Bar
const ProgressBar = document.getElementById('ProgressBar');
const ProgressFill = document.getElementById('ProgressFill');
const ProgressText = document.getElementById('ProgressText');

// Aside Panel
const AsidePanel = document.getElementById('AsidePanel');
const AsideTitle = document.getElementById('AsideTitle');
const AsideList = document.getElementById('AsideList');
const RewardList = document.getElementById('RewardList')

// FooterPage
const FooterPage = document.getElementById('FooterPage');
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



const Card = {
  name: 'Isaac',
  last: 'Juma',
  third: 'okubo',

}



// fetch('https://api.example.com/data')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//         }
//           return response.json(); // Or .text() for plain text, .blob() for binary data, etc.
//         })
//         .then(data => {
//             console.log(data); // Process the fetched data
//         })
//         .catch(error => {
//             console.error('Error fetching data:', error);
//         });














export default Headers