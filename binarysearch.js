// function include(file) {

//     let script = document.createElement('script');
//     script.src = file;
//     script.type = 'text/javascript';
//     script.defer = true;

//     document.getElementsByTagName('head').item(0).appendChild(script);

// }
// include('visualizer_js.js')


var timeoutlist = []
var s = []
var e = []

function start_binarysearch() {
    key = document.getElementById('key').value;
    if (key == "" || isNaN(key) || (!Number.isInteger(parseFloat(key))))
        window.alert("Please enter a valid element you want to search");
    else {
        console.log(key);
        key = parseInt(key);
        if (arrgen == false)
            window.alert("Please generate a new array first");
        if (arrgen == true && lock == false)
            visualize_binarySearch();
    }

}

function visualize_binarySearch() {
    timeoutlist = []
    s = []
    e = []
    let prevs = -1;
    let preve = - 1;
    lock = true;
    lockInput();
    timeout = 1000;
    binarySearch();
    console.log(s);
    console.log(e);
    start = 0;
    end = n - 1;
    info[start].innerHTML = "start";
    info[end].innerHTML = "end";

    var newe = document.createElement("div");
    newe.setAttribute("class", "logElement");
    var ee = document.getElementById("logvals");
    var temporary = "<b>start = " + start + ", end = " + end + "</b><br>key = " + key + ", mid = " + parseInt((start + end) / 2) + ", arr[" + parseInt((start + end) / 2) + "] = " + arr[parseInt((start + end) / 2)].innerHTML;
    if (parseInt(key) > parseInt(arr[parseInt((start + end) / 2)].innerHTML)) {
        temporary += (",<span style='color:red'><b> key > arr[mid]</b></span>, start = mid+1 = " + (parseInt((start + end) / 2) + 1));
    }
    else if (parseInt(key) < parseInt(arr[parseInt((start + end) / 2)].innerHTML)) {
        temporary += (",<span style='color:red'><b> key < arr[mid]</b></span>, end = mid-1 = " + (parseInt((start + end) / 2) - 1));
    }
    else
        temporary += (",<span style='color:green'><b> key = arr[" + parseInt((start + end) / 2) + "] => Element found</b></span>");

    newe.innerHTML = temporary;
    ee.appendChild(newe);
    f(newe);

    for (let j = start; j <= end; j++) {
        arr[j].classList.add('inrange');
    }
    for (let i = 0; i < s.length; i++) {
        setTimeout(() => {
            for (let j = start; j <= end; j++) {
                arr[j].classList.remove('inrange');
            }
            // if(end>=start)
            info[end].innerHTML = "";
            // if(start<=end)
            info[start].innerHTML = "";
            start = s[i];
            end = e[i];
            if (start > end) {
                var newe = document.createElement("div");
                newe.setAttribute("class", "logElement");
                var ee = document.getElementById("logvals");
                var temporary = "<b>start = " + start + ", end = " + end + "</b><br>key = " + key + ",  <span style='color:red'> start > end => <b>Element not found</b></span>";
               
                newe.innerHTML = temporary;
                ee.appendChild(newe);
                f(newe);
                if(start>=0 && start<n)
                info[start].innerHTML = "start";
                if(end>=0 && end<n)
                info[end].innerHTML = "end";
                setTimeout(() => {
                    window.alert('Element not found!');
                }, 1000)
                unlockInput();
                lock = false;
                arrgen = false;
            }
            else if (start == end) {
                if(parseInt(start)!=parseInt((prevs+preve)/2))
                {
                var newe = document.createElement("div");
                newe.setAttribute("class", "logElement");
                var ee = document.getElementById("logvals");
                var temporary = "<b>start = " + start + ", end = " + end + "</b><br>key = " + key + ", mid = " + parseInt((start + end) / 2) + ", arr[" + parseInt((start + end) / 2) + "] = " + arr[parseInt((start + end) / 2)].innerHTML;
                if (parseInt(key) > parseInt(arr[parseInt((start + end) / 2)].innerHTML)) {
                    temporary += (",<span style='color:red'><b> key > arr[mid]</b></span>, start = mid+1 = " + (parseInt((start + end) / 2) + 1));
                }
                else if (parseInt(key) < parseInt(arr[parseInt((start + end) / 2)].innerHTML)) {
                    temporary += (",<span style='color:red'><b> key < arr[mid]</b></span>, end = mid-1 = " + (parseInt((start + end) / 2) - 1));
                }
                else
                    temporary += (",<span style='color:green'><b> key = arr[" + parseInt((start + end) / 2) + "] => Element found</b></span>");

                newe.innerHTML = temporary;
                ee.appendChild(newe);
                f(newe);
                info[s[i]].innerHTML = "start end";
            }


                
                if (parseInt(key) == parseInt(arr[parseInt(start)].innerHTML)) {
                    foundSound.play();
                    setTimeout(() => {
                        arr[s[i]].classList.add('found');
                    }, 300 - 100 * speed)
                }
                unlockInput();
                lock = false;
                arrgen = false;
                if (parseInt(key) == parseInt(arr[parseInt(start)].innerHTML)) {
                    setTimeout(() => {

                        window.alert("Element found at index " + s[i]);
                    }, 500 - 100 * speed);
                }
            }
            else {
                // var newe = document.createElement("div");
                // newe.setAttribute("class", "logElement");
                // var ee = document.getElementById("logvals");
                // var temporary = "<b>start = " + prevs + ", end = " + preve + "</b><br>key = " + key + ", mid = " + parseInt((prevs + preve) / 2) + ", arr[mid] = " + "arr[" + parseInt((prevs + preve) / 2) + "] = " + arr[parseInt((prevs + preve) / 2)].innerHTML + ",<br><span style='color:red'><b> key";
                // if (parseInt(key) > parseInt(arr[parseInt((prevs + preve) / 2)].innerHTML)) {
                //     temporary += (" > arr[mid]</b></span>, start = mid+1 = " + (parseInt((prevs + preve) / 2) + 1));
                // }
                // else if (parseInt(key) < parseInt(arr[parseInt((prevs + preve) / 2)].innerHTML)) {
                //     temporary += (" < arr[mid]</b></span>, end = mid-1 = " + (parseInt((prevs + preve) / 2) - 1));
                // }
                // newe.innerHTML = temporary;
                // ee.appendChild(newe);
                // f(newe);


                var newe = document.createElement("div");
                newe.setAttribute("class", "logElement");
                var ee = document.getElementById("logvals");
                var temporary = "<b>start = " + start + ", end = " + end + "</b><br>key = " + key + ", mid = " + parseInt((start + end) / 2) + ", arr[" + parseInt((start + end) / 2) + "] = " + arr[parseInt((start + end) / 2)].innerHTML;
                if (parseInt(key) > parseInt(arr[parseInt((start + end) / 2)].innerHTML)) {
                    temporary += (",<span style='color:red'><b> key > arr[mid]</b></span>, start = mid+1 = " + (parseInt((start + end) / 2) + 1));
                }
                else if (parseInt(key) < parseInt(arr[parseInt((start + end) / 2)].innerHTML)) {
                    temporary += (",<span style='color:red'><b> key < arr[mid]</b></span>, end = mid-1 = " + (parseInt((start + end) / 2) - 1));
                }
                else
                    temporary += (",<span style='color:green'><b> key = arr[" + parseInt((start + end) / 2) + "] => Element found</b></span>");
                newe.innerHTML = temporary;
                ee.appendChild(newe);
                f(newe);


                info[start].innerHTML = "start";
                info[end].innerHTML = "end";
                setTimeout(() => {
                    for (let j = start; j <= end; j++) {
                        arr[j].classList.add('inrange');
                    }
                }, 700 - 100 * speed)

                console.log("bhai");
            }
            prevs = s[i];
            preve = e[i];
        }, timeout)
        timeout += (2000 - 200 * speed)

    }
}



function binarySearch() {
    start = 0, end = n - 1;
    console.log("n= ", n);
    while (start <= end) {
        console.log("hy");

        let mid = Math.floor((start + end) / 2);
        console.log("mid " + mid);
        console.log("start " + start);
        console.log("end " + end);
        if (parseInt(arr[mid].innerHTML) == key) {
            if(start!=end)
            {
            s.push(mid);
            e.push(mid);
            }
            return mid;
        }
        else if (key < parseInt(arr[mid].innerHTML)) {
            end = mid - 1;
        }
        else
            start = mid + 1;
        if ((start <= end)) {
            s.push(start);
            e.push(end);
        }
    }
    s.push(start);
    e.push(end);
    return -1;

}
