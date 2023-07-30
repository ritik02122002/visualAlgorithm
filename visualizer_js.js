let arrcontainer = document.querySelector('.array');
let infocontainer = document.querySelector('.information');

const swapSound = new Audio('swapsound.wav');
const foundSound = new Audio('found.mp3');

var swapcount = 0;
var arrgen = true;
var lock = false;
var speed = 1;
var timeout = 1000;
var key;
var n = 6;
var arr = [];
var info = [];

make_array(true);


function generate_random_arr(tech) {
    if (lock == false) {
        if (inputArraySize() == false)
            return;


        arrgen = true;
        if (tech == "bubblesort") {
            swapcount = 0;
            document.getElementById("swapcount").innerHTML = swapcount;
            document.getElementById('sorted').innerHTML = "UNSORTED";
        }
        make_array(false, tech);
    }
}

function generate_sorted_arr(tech) {
    let x = 0;
    if (lock == false) {
        if (inputArraySize() == false)
            return;
        arrgen = true;
        if (tech == "bubblesort") {
            swapcount = 0;
            document.getElementById("swapcount").innerHTML = swapcount;
            document.getElementById('sorted').innerHTML = "UNSORTED";
        }
        make_array(true, tech);
    }
}



function arr_size() {
    if (lock === false) {

        let x = document.getElementById('n').value;
        n = parseInt(x);
        console.log(n);
        arrgen = false;

    }
}

function make_array(issorted, tech) {
    document.getElementById("logvals").innerHTML = "";
    if (tech == "bubblesort") {
        swapcount = 0;
        document.getElementById("swapcount").innerHTML = swapcount;
    }
    document.querySelector('.array').innerHTML = "";
    document.querySelector('.information').innerHTML = "";
    arr = [];
    info = [];
    let x = 0;
    for (let i = 0; i < n; i++) {
        let ei = document.createElement('div');
        let infoi = document.createElement('div');
        if (issorted == true)
            x += Math.floor((Math.random() * 6) + 1);
        else
            x = Math.floor((Math.random() * 100));
        ei.innerHTML = x;
        arrcontainer.append(ei);
        infocontainer.append(infoi);
        arr.push(ei);
        info.push(infoi);

    }

}
function lockInput() {
    let todis = document.querySelectorAll('input,select,range');
    let l = todis.length;
    for (let i = 0; i < l; i++)
        todis[i].disabled = true;
}
function unlockInput() {
    let todis = document.querySelectorAll('input,select,range');
    let l = todis.length;
    for (let i = 0; i < l; i++)
        todis[i].disabled = false;

}
function bubble_sort() {
    lock = true;
    lockInput();
    speed = parseFloat(document.getElementById("speed").value) / 2;
    timeout = 200;
    console.log(speed);
    document.getElementById('sorted').innerHTML = "SORTING....";
    for (let i = 0; i < n - 1; i++) {

        console.log("swap");
        for (let j = 0; j < n - 1 - i; j++) {
            if (lock === false)
                return;
            setTimeout(() => {

                if (j > 0) {
                    arr[j - 1].classList.remove('exchange');
                    arr[j].classList.remove('exchange');
                }
                if (j == 0) {
                    var newe = document.createElement("div");
                    newe.setAttribute("class", "logElement");
                    var ee = document.getElementById("logvals");
                    newe.innerHTML = "<br><b style='font-size:20px;color:brown'>i = " + i + "<br></b>";
                    ee.appendChild(newe);
                    f(newe);
                }

                arr[j].classList.remove('unsorted');
                arr[j + 1].classList.remove('unsorted');
                arr[j].classList.add('exchange');
                arr[j + 1].classList.add('exchange');
                if (parseInt(arr[j].innerHTML) > parseInt(arr[j + 1].innerHTML)) {
                    console.log("swap");

                    // let val1 = arr[j].innerHTML;
                    // let val2 = arr[j + 1].innerHTML;

                    // info[j].innerHTML = val1 + " > " + "<br>" + "sw";
                    // info[j].setAttribute("style", "text-align:right;");
                    // info[j + 1].innerHTML = val2 + "<br>" + "ap!";

                    var newe = document.createElement("div");
                    newe.setAttribute("class", "logElement");
                    var ee = document.getElementById("logvals");
                    newe.innerHTML = "<b>j = " + j + " , j+1 = " + (j + 1) + "</b><br>" + "arr[" + j + "] = " + arr[j].innerHTML + ", arr[" + (j + 1) + "] = " + arr[(j + 1)].innerHTML + "<br><span style='color:red'><b>arr[" + j + "] > arr[" + (j + 1) + "] => Swap</b></span>";
                    ee.appendChild(newe);
                    f(newe);

                    setTimeout(() => {
                        swapSound.playbackRate = speed + 2;
                        swapSound.play();
                        swapcount++;
                        document.getElementById("swapcount").innerHTML = swapcount;
                        let temp = arr[j].innerHTML;
                        arr[j].innerHTML = arr[j + 1].innerHTML;
                        arr[j + 1].innerHTML = temp;
                        info[j].innerHTML = "";
                        info[j + 1].innerHTML = "";
                        info[j].setAttribute("style", "text-align:left;");
                    }, (1000 - 400 * speed)


                    )

                }
                else {
                    var newe = document.createElement("div");
                    newe.setAttribute("class", "logElement");
                    var ee = document.getElementById("logvals");
                    newe.innerHTML = "<b>j = " + j + " , j+1 = " + (j + 1) + "</b><br>" + "arr[" + j + "] = " + arr[j].innerHTML + ", arr[" + (j + 1) + "] = " + arr[(j + 1)].innerHTML + "<br><span style='color:green'><b>arr[" + j + "] <= arr[" + (j + 1) + "] => NO Swap</b></span>";
                    ee.appendChild(newe);
                    f(newe);

                }
                if (j == n - i - 2) {
                    setTimeout(() => {
                        arr[j].classList.remove('exchange');
                        arr[j + 1].classList.remove('exchange');
                        arr[n - i - 1].classList.add('final');
                        arr[n - i - 1].setAttribute("style", "border-top:4px solid brown;border-bottom:4px solid brown;");
                        if (i == 0) {

                            arr[n - i - 1].setAttribute("style", "border-top:4px solid brown;border-bottom:4px solid brown;border-right:4px solid brown;");
                        }
                        if (i == n - 2) {
                            arr[0].classList.add('final');
                            document.getElementById('sorted').innerHTML = "SORTED";
                            arr[0].setAttribute("style", "border-top:4px solid brown;border-bottom:4px solid brown;border-left:4px solid brown;");
                            arrgen = false;
                            lock = false;
                            unlockInput();
                            timeout = 1000 - 200 * speed;
                        }

                    }, (1000 - 400 * speed))
                }

            }, (timeout - 400 * speed))
            timeout += (2000 - 800 * speed);
        }
    }
}

function start_bubblesort() {
    if (arrgen == false)
        window.alert("Please generate a new array first");
    if (arrgen == true && lock == false)
        bubble_sort(arr, info, n);
}

function start_linearsearch() {

    key = document.getElementById('key').value;
    if (key == "" || (!Number.isInteger(parseFloat(key))))
        window.alert("Please enter a valid element you want to search");
    else {
        console.log(key);
        key = parseInt(key);
        if (arrgen == false)
            window.alert("Please generate a new array first");
        if (arrgen == true && lock == false)
            linearSearch();
    }

}

function linearSearch() {
    speed = parseFloat(document.getElementById("speed").value) / 2;
    timeout = 200;
    lock = true;
    lockInput();
    let alltimeoutids = [];
    for (let i = 0; i < n; i++) {
        let x = setTimeout(() => {
            if (i > 0) {
                info[i - 1].innerHTML = "";
                arr[i - 1].classList.remove('current');
            }
            info[i].innerHTML = "&#x2191;";
            arr[i].classList.add('current');
            info[i].setAttribute("style", "text-align:center;");
            if (parseInt(arr[i].innerHTML) == key) {


                var newe = document.createElement("div");
                newe.setAttribute("class", "logElement");
                var ee = document.getElementById("logvals");
                newe.innerHTML = "<b>index = " + i + "</b><br>" + "key =" + " " + key + ", " + "arr[" + i + "] = " + arr[i].innerHTML + ",<span style='color:green'><b> key = arr[" + i + "]</b></span>";
                ee.appendChild(newe);
                f(newe);

                foundSound.play();
                arr[i].classList.remove('current');
                arr[i].classList.add('found');
                for (let j = 0; j < alltimeoutids.length; j++)
                    clearTimeout(alltimeoutids[j]);
                arrgen = false;
                lock = false;
                unlockInput();
                setTimeout(() => {

                    window.alert("key found at index " + i);
                }, 500)
                return;

            }
            else if (i == n - 1) {
                arrgen = false;
                lock = false;
                unlockInput();
                setTimeout(() => {

                    window.alert('key not found');
                }, 100);

            }
            var newe = document.createElement("div");
            newe.setAttribute("class", "logElement");
            var ee = document.getElementById("logvals");
            newe.innerHTML = "<b>index = " + i + "</b><br>" + "key =" + " " + key + ", " + "arr[" + i + "] = " + arr[i].innerHTML + ",<span style='color:red'><b> key != arr[" + i + "]</b></span>";
            ee.appendChild(newe);
            f(newe);
        }, timeout
        )
        alltimeoutids.push(x);
        timeout += (1000 - 400 * speed);

    }


}

function validateArray(string) {
    var l = string.length;
    if (l == 0)
        return false;
    if (string[0] == ',')
        return false;
    if (string[l - 1] == ',' || string[l - 1] == '-')
        return false;
    sample = [];
    let temp = "";
    for (let i = 0; i < l; i++) {
        if (!(string[i] == ',' || string[i] == '-' || (string[i] >= '0' && string[i] <= '9')))
            return false;
        if (string[i] == ',' && string[i + 1] == ',')
            return false;
        if (string[i] == '-' && (string[i + 1] == ',' || string[i + 1] == '-'))
            return false;

        if (i > 0 && string[i] == '-' && string[i - 1] != ',')
            return false;
        if (string[i] == ',') {
            sample.push(parseInt(temp));
            temp = "";
        }
        else
            temp += string[i];
        if (temp.length > 5)
            return false;

    }
    sample.push(parseInt(temp));
    console.log(sample);
    return sample;

}

function updateVal() {
    if (lock == true)
        return;
    let manArray = prompt("Please enter the array elements seperated by comma");
    if (manArray == null)
        return;

    var x = validateArray(manArray);
    if (x == false) {
        alert("invalid")
        return;
    }

    // if(x.length!=size)
    // {alert("size of array doesn't match with size given")
    // return;}
    if (x.length > 15) {
        alert("size can't exceed 15")
        return;
    }
    document.getElementById("logvals").innerHTML = "";
    arrgen = true;
    n = x.length;
    size = x.length;
    document.querySelector('.array').innerHTML = "";
    document.querySelector('.information').innerHTML = "";
    arr = [];
    info = [];
    let y = 0;
    for (let i = 0; i < size; i++) {
        let ei = document.createElement('div');
        let infoi = document.createElement('div');
        y = x[i]
        ei.innerHTML = y;
        arrcontainer.append(ei);
        infocontainer.append(infoi);
        arr.push(ei);
        info.push(infoi);

    }

}

function showHideProblem() {


    var x = document.getElementsByClassName("prblm_st")[0].style.display;
    if (x == "block") {
        document.getElementsByClassName("prblm_st")[0].style.display = "none";

    }
    else {

        // document.getElementsByTagName("body")[0].style.filter="blur(2px)";
        //     document.querySelectorAll("body :not(.prblm_st)")
        //   .forEach(element => element.style.filter = "blur(2px)");
        document.getElementsByClassName("prblm_st")[0].style.display = "block";
    }
    console.log(x);

}
function f(element) {
    // const element = document.getElementById("logs");
    element.scrollIntoView(true);
}

function inputArraySize() {
    let temp_size = prompt("Please enter the number of elements you want in array(should be between 1 and 15)", 6);
    if (temp_size == null)
        return false;
    let x = Number(temp_size);
    if (x == NaN) {
        alert("please provide a valid value");
        return false;
    }
    if (x <= 0) {
        alert("number of elements cannot be less than 1");
        return false;
    }
    if (x > 15) {
        alert("maximum value allowed is 15");
        return false;
    }
    n = x;
    return true;

}