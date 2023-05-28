export function userAge (user) {
    user = {
        'name': 'John',
    }
    let userEnteredAge = prompt('Enter your age:');

    user.age = userEnteredAge;

    console.log(user.age)

    return user.age;
}

export function admin (user) {
    let admin = Object.assign(user, {'role': 'Admin'})
    console.log(admin)

    return typeof admin
}
