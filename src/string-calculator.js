module.exports = class StringCalculator{

      Add(string){     
        let res = string.split(/[\n\,]/); //split string into res using \n & ,
        let summed = 0 ; 
        if (string == "") {
            return 0;
        }else{
            for (let i = 0; i < res.length; i++) {
                let converted = parseInt(res[i]);  // convert splitted string into integer
                summed += converted;  //summing the convert string 
            }return summed;
        }

    }

}
