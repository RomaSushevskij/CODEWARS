function incrementer(nums) {
    if (nums.length === 0) {
        return nums;
    } else {
        let incrementArr = [];
        for (let i = 0; i < nums.length; i += 1) {
            let newNum = nums[i] + (i + 1);
            newNum = newNum.toString();
            if (newNum.length > 1) {
                newNum = newNum[newNum.length - 1];
                newNum =parseInt(newNum);
                incrementArr.push(newNum)
            } else {
                newNum =parseInt(newNum);
                incrementArr.push(newNum)
            }
        }
        return incrementArr;
    }
}
