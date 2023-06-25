export function userAge (user) {
    let userEnteredAge = prompt('Enter your age:');

    user.age = userEnteredAge;

    let admin = Object.assign(user, {'role': 'Admin'})

    //return user.age;
}
