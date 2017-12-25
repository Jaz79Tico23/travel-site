var $ = require('jquery');
import Person from './modules/Person';


class Adult extends Person {
    payTaxes() {
        console.log(this.name + " still owes $1000 in back taxes");
    }
}

//alert("ABC 123");

var john = new Person("John Doe", "blue");
john.greet();

var jane = new Adult("Jane Smith", "orange");
jane.greet();
jane.payTaxes();
