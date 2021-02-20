const summation = (num) => {
    let i=1, sum=0;
    while (i <= num) {
        sum+=i;
        i++;
      }
      console.log(sum);
}

summation(8);