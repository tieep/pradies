export default class User {
    static countid = 0
    id
    name
    email
    password
    product
    myproduct
    isadmin

    constructor(
        name = '',
        email = '',
        password = '',
        product = [],
        myproduct = [],
        isadmin = false
        )
        {
            User.countid++
            this.id = 'u' +  User.countid,
            this.name = name
            this.password = password
            this.email = email
            this.product = product
            this.myproduct = myproduct
            this.isadmin = isadmin
    }
}