
class Central_Tendency{

    Test_Category = "Descriptive Analysis"

    mean(Data){
        const sum = Data.reduce((accumulator,currentValue) => accumulator + currentValue);
        const meaner =sum/Data.length
        return meaner
    }
    static mean_note = "The average of the given numbers and is calculated by dividing the sum  of given numbers by the total number of numbers"

    median(Data){
        const middle = Math.floor(Data.length/2);
        const sorted = Data.sort((a,b) => a-b);
        if (sorted.length % 2 ===0){
            return (sorted[middle - 1] + sorted[middle]) / 2
        }else{
            return sorted[middle]
        }
    }
    static median_note = "The middle value of the given list of data when arranged in order"

    mode(Data){
        let object = {}
        for(let i = 0; i < Data.length;i++){
        if(object[Data[i]]) {
            object[Data[i]] += 1
        } else {
            object[Data[i]] = 1
        }

        }
        let biggestValue = -1
        let biggestValueKey = -1
        Object.keys(object).forEach(key =>{
            let value = object[key]
            if(value > biggestValue) {
                biggestValue = value
                biggestValueKey = key
            }
        })
        return biggestValueKey

    }

    static mode_note = "A mode is defined as the value that has a higher frequency in a given set of values"

}




class Dispersion{
    Range(Data){
        const min = Math.min(...Data)
        const max = Math.max(...Data)
        return max - min;


        }

    static Range_note = "The spread of your data from the lowest to the highest value in the distribution"

    Variance(Data){
        const mean = Data.reduce((accumulator,currentValue) => accumulator + currentValue) / Data.length;
        const squaredDifferences = Data.map(Data => Math.pow(Data  - mean,2));
        const variance = squaredDifferences.reduce((accumulator,currentValue) => accumulator + currentValue) / Data.length;
        
        return variance


    }

    static variance_note = "A statistical measurement of the spread between numbers in a dataset"

    Standard_Deviation(Data){
        let mean = Data.reduce((accumulator,currentValue) => {
            return accumulator + currentValue
        },0) / Data.length;

        Data = Data.map((k) => {
            return (k - mean) **2
        });
        let sum = Data.reduce((accumulator,currentValue) => accumulator + currentValue,0);
        let variance = sum / Data.length
        return Math.sqrt(sum/Data.length)
    }

    static standard_deviation_note = "A measure of how dispersed the data is in relation to the mean"

    Mean_Deviation(Data){
        const mean = Data.reduce((accumulator,currentValue) => accumulator + currentValue)
        const deviation = Data.map(Data => Math.abs(Data - mean));
        const mean_deviation = deviation.reduce((accumulator,currentValue)=> accumulator + currentValue)/ Data.length;

        return mean_deviation
    }
    static mean_deviation_note = "The average deviation of a data point from the data set's mean,median or mode"

    Quartile_Deviation(Data){
        const sorted = Data.sort((a,b) => a-b);
        const q1Index = Math.floor(sorted.length/4);
        const q3Index = Math.floor((3*sorted.length)/4);
        const q1 = sorted[q1Index]
        const q3 = sorted[q3Index]
        const Interquantile_Range = q3-q1
        const Quartile_Deviation = Interquantile_Range/2;
        return Quartile_Deviation;



    }
    static quartile_deviation_note = "The difference between the first quartile and the third quartile in the frequency distribution table"


    Get_Test_Category(){
        console.log(this.Test_Category)
    
    }

    Set_Test_Category(category = ""){
        this.Test_Category = category

    }

}   



const desi = new Central_Tendency()
var Arraya = [1,2,3,4,4,5,55,6]
console.log("The mean is",desi.mean(Arraya))
console.log("The median is",desi.median(Arraya))
console.log("The mode is",desi.mode(Arraya))



const dispersion = new Dispersion()
console.log("The range is",dispersion.Range(Arraya))
console.log("The variance is",dispersion.Variance(Arraya))
console.log("The Standard deviation is",dispersion.Standard_Deviation(Arraya))
console.log("The mean deviation",dispersion.Mean_Deviation(Arraya))
console.log("The Quartile deviation is",dispersion.Quartile_Deviation(Arraya))
