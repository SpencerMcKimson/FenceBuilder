//input: number of small pieces, number of large pieces, length of fence
//output: Bool if fence of exact length can be made

//acceptance criteria
    //small = 1 ft
    //large = 5 ft
    //wood cannot be cut into pieces; must use whole size
    //cannot have negative input

//approach
    //take inputs and create an array containing all small and large pieces
    //use recursive function to find all possible permutations of sums of array elements
    //if one equals the length, return true, else return false