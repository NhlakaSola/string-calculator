module.exports = class StringCalculator{

      Add(string){     


        let summed = 0 ;

        if (string == "") {
            return 0;
        }else{       
            try {
                if (/-/.test(string) == true) {
                    throw "negatives are not allowed";

                }
            } catch (error) {
                return error;
            }
            let res = string.match(/\d{1,}/g); //only match digits only
            for (let i = 0; i < res.length; i++) {
                let converted = parseInt(res[i]); 
                 
                if (converted >= 1000) {
                    converted = 0; 
                }
                summed += converted;  
            }return summed;
        }

    }

   }


