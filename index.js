n = process.argv[2];

if(n == null){
    console.error('USAGE: node index.js [number_of_points]');
    process.exit(1);
}

circlePoints = 0;
totalPoints = 0;

for(i = 0; i < n; i++){
    x = Math.random();
    y = Math.random();

    distance = Math.pow(x, 2) + Math.pow(y, 2);
    if(distance < 1){
        circlePoints++;
    }
    totalPoints++;
}

pi = 4 * (circlePoints / totalPoints);
console.log(pi);