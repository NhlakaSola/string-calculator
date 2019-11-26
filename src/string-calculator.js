module.exports = class StringCalculator{

      Add(string){     


        let summed = 0 ;

        if (string == "") {
            return 0;
        }else{      
            let negatives = ""; 
            let nums = string.split(',');
            for (let i = 0; i < nums.length; i++) {
                if (nums[i][0] === "-") {
                    negatives += " " + nums[i]; 
                }
            }
            if (negatives != "") {
                throw new Error("negatives are not allowed" + negatives); 
            }

            let res = string.match(/\d{1,}/g); //only match digits only
            for (let j = 0; j < res.length; j++) {
                let converted = parseInt(res[j]); 
                 
                if (converted >= 1000) {
                    converted = 0; 
                }
                summed += converted;  
            }return summed;
        }

    }

   }


