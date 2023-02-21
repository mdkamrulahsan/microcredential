// 1. if, else if, else statement

let num = prompt("Enter a value, could be a string or a number");

num = parseInt(num);

if (num < 0){
  console.log(`${num} is a negative number`)
}
else if(num >= 0){
  console.log(`${num} is a positive number`)
}
else{
  console.log(`${num} is a string.`)
}



  
// 2. switch statement

let colors = ['Red' , 'Blue' , 'Green']

let color = prompt(`Pick a color (type a, b, or c) : \n a) Red \n b) Blue\n c) Green`);
    color.toLowerCase();

    switch(color)
    {
        case 'a':
        console.log('You selected Red color');
        break;
        case 'b':
        console.log('You selected Blue color');
        break;
        case 'c':
        console.log('You selected Green color');
        break;
        default:
        console.log('Color is not in the list!');
    }
