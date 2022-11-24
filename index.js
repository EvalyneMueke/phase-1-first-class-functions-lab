// Code your solution in this file!

const returnFirstTwoDrivers = function (twoDrivers) {
    let drivers = [...twoDrivers.slice(0, 2)];
    return drivers;
}

const returnLastTwoDrivers = function(twoDrivers){
    let drivers = [...twoDrivers.slice(twoDrivers.length -2)];
    return drivers;
}
//we use the .length above because we dont know the no of names used therefore .length stands for all names

const selectingDrivers =[returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num){
    return function(fare=5){
        return fare *num;
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
} 
//the (2) because the fare is double

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(twoDrivers, fn){
    return fn(twoDrivers);
}
