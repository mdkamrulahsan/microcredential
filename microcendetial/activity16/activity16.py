"""
Md Kamrul Ahsan Emon
Activity16
"""
# Example using the print () function
print('Md Kamrul Ahsan Emon')
print('-------- example 1 -----------')
name = 'Peter Pan'
number = 2.5
print('My name is: ',name, ' and my lucky number is: ', number)
# example using input () function
print('---------- example 2 --------- ')
lastName = input('Enter a last name: ')
num1 = int(input('Enter a number: '))
print('Last name = ',lastName, '\nEntered number =', num1, '\nThe double of the number is = ',num1*2)

print('Example 3')
h =float (input('enter a height: '))
w = float (input('enter a weight: '))
hyp = (h**2 + w**2) **0.5
print ('Hypotenuse = ', hyp)

print ('Example 4')
# assign a value
number1 = 8
print('Number = ',number1)
# self add+=
number1 += 3
print('Self add = ', number1)
# self subtraction -=
number1 -=5
print('Self substract =', number1)
number1 %= 4
print('Reminder after the divison with 4 =', number1)
# using %s market on print()
print('The height = %s and width = %s. The calculation for the hypotenuse is %s ' %(h,w,hyp))

print('----- example 5 -----')
# find a character in a string using index
msg = 'Queensborough'
# print the 3rd and 7th character in string msg
print('The 3rd character is = ', msg[2])
print('The 7th character is = ', msg[6])
# slice in a string
print('From the 5th to the 10th character: ', msg[4:9])
lenMsg = len(msg)
print('The length is = ',lenMsg)
# upper() method
msgUpper = msg.upper()
print(msgUpper)
# replace () method
msgReplace = msg.replace('e','$')
print(msgReplace)
# in operator
msgIn = 'n' in msg
print('Is m in the message?',msgIn)

print('----- Example 6 -----')
# create a list of animals
animals = ['cat', 'dog','parrot','fish','rat']
print('2nd animal = ', animals[1])
# delete the 3rd item in the list
del animals[2]
print(animals)
# asks the user to input an animal. The new animal will be added to the existing list
a = input('Enter an animal: ')
animals.append(a)
print(animals)































