function arrFind(arr,num){
	for (var i = 0; i < arr.length; i++){
		if (arr[i] == num){
			arr[i] = 2 * arr[i];
			num = arr[i];
		} 
	}
	return num/2;
}

arrFind([1,2,4,6],2)