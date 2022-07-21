var RangeOfValues = ((low , high) => {
    var ArrOfRangeOFValues = [] ; 
    for (let index = low; index < high; index++) {
        ArrOfRangeOFValues.push(index)
        
    }

    return ArrOfRangeOFValues ; 

})(0,100) ; 
