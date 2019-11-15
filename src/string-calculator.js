module.exports = class StringCalculator{

      Add(string){     
        let res = string.match(/\d{1,}/g); //only match digits only
        let summed = 0 ; 
        if (string == "") {
            return 0;
        }else{
            for (let i = 0; i < res.length; i++) {
                let converted = parseInt(res[i]);  // convert splitted string into integer
                if (converted >= 1000) {
                    converted = 0;
                }
                summed += converted;  //summing the convert string 
            }return summed;
        }

    }

   }


