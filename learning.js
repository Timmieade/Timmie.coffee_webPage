
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
	navbarMenu.classList.toggle('is-active');
});

//tabs

const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		tabs.forEach(item => item.classList.remove('is-active'))
		tab.classList.add('is-active');

		const target = tab.dataset.target;
		tabContentBoxes.forEach(box => {
			if(box.getAttribute('id') === target){
				box.classList.remove('is-hidden');
			} else {
				box.classList.add('is-hidden');
			}
		});
	})
})

// modal
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButton.addEventListener('click' , () => {
	modal.classList.add('is-active')
});
modalBg.addEventListener('click', () => {
	modal.classList.remove('is-active')
})



























// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "You agreed." );
//   }
  
//   function showCancel() {
//     alert( "You canceled the execution." );
//   }
  
//   // usage: functions showOk, showCancel are passed as arguments to ask
//   ask("Do you agree?", showOk, showCancel);


//function Declaration
// function checkDriverAge(age){
//      if (Number(age) < 18) {
//         return "Sorry, you are too yound to drive this car. Powering off";
//     } else if (Number(age) > 18) {
//         return "Powering On. Enjoy the ride!";
//     } else if (Number(age) === 18) {
//         return "Congratulations on your first year of driving. Enjoy the ride!";
//     }
// }
//       console.log(checkDriverAge(92))
      

// Fuction expression 
// let checkDriverAge2 = function(age){
//     if (Number(age) < 18) {
// 	        return "Sorry, you are too yound to drive this car. Powering off";
//     } else if (Number(age) > 18) {
// 	        return "Powering On. Enjoy the ride!"; 
//     } else if (Number(age) === 18) {
// 	        return "Congratulations on your first year of driving. Enjoy the ride!";
//     }
//     }

// console.log(checkDriverAge2(92))


// // Bonus
// function checkDriverAge(age){

// if (Number(age) < 18) {
// 	return("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	return("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	return("Congratulations on your first year of driving. Enjoy the ride!");
// }
// }
// console.log(checkDriverAge())



// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }


// // 1 remove the banana from the array
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift();
// console.log(array)


// // 2 sort the array in order
// array.sort();
// console.log(array)


// // 3 Put kiwi at the end of thde array
// array.push("Kiwi");
// console.log(array)


// // 4 remove apple from the array
// array.splice(0,1);
// console.log(array)


// 5 sort the array in reverse order
// array.reverse();
// console.log(array)


//Task 2
//1
// function q1() {
// 	var a = 5;
// 	if(a>1) {
// 		a = 3;
// 	}
// 	alert(a)
// }


// var a = 0;
// function q2() {
//     a = 5;
// }

// function q22() {
//     alert(a);
// }

// console.log(q22())