export const dynamicsort= (order, property, optProperty='') => {
    var sort_order = -1;
    if(order === "asc"){
        sort_order = 1;
    }
    return function (a, b){
        // a should come before b in the sorted order
        const valA = optProperty !== '' ? a[property][optProperty] : a[property];
        const valB = optProperty !== '' ? b[property][optProperty] : b[property];
        if(valA < valB){
                return -1 * sort_order;
        // a should come after b in the sorted order
        }else if(valA > valB){
                return 1 * sort_order;
        // a and b are the same
        }else{
                return 0 * sort_order;
        }
    }
}