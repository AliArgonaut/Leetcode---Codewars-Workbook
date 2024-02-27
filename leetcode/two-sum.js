var twoSum = function(nums, target) {
    let current = 0;
    for (x = 1; x < nums.length; x++){
        if (parseInt(nums[current]) + parseInt(nums[x]) == target){
            return current, x
        }
        
    }
};