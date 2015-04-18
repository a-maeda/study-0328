function copyArray(arr){
    var newarr = []
    for(var i = 0; i < arr.length; i++){
        newarr[i] = arr[i];
    }
    return newarr;
}

var a = [0,1,2,3,4]
alert(a);

var b = copyArray(a);
alert(b);

a[5] = 5;
alert(b);


function copyArray(arr){
    var newarr = [];
    for(var i = 0; i < arr.length; i++){
        if(Array.isArray(arr[i])){
            newarr[i] = copyArray(arr[i]);
        }else{
            newarr[i] = arr[i];
        }
    }
    return newarr;
}

var a = [
    [0, 1, 2],
    [3, 4, 5]
];
alert(a[0]);

var b = copyArray(a);
alert(b[0]);

a[0][3] = 3;
alert(b[0]);


function aaa(){
    alert('test');
}

aaa();

aaa(aaa);


var a = {}
a.abc = test;
a.abc();

function test(){
    alert('test');
}


var aaa = function(){
    alert('test');
};

aaa