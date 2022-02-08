//----串接API
fetch("/API/110Math.json")
    .then((res) => {
        const data = res.json();
        return data;
    })
    .then((data) => {
        let topic;
        var page = []; //每一頁裡面有幾個row
        var column = []; //每一頁的column的大小不同

        for (let p = 1; p < data.document.page.length; p++) {
            page[p] = data.document.page[p].row.length; //頁數
            // console.log(page);
            for (let c = 0; c < data.document.page.length; c++) {
                column[c] = data.document.page[c].row[0].column.length;
                // console.log(column);
            }
        }
        for (let k = 1; k < data.document.page.length - 1; k++) {
            for (let i = 0; i < page[k] - 1; i++) {
                for (let j = 0; j < column[k]; j++) {
                    topic = data.document.page[k].row[i].column[j].text.text;
                    if (topic != undefined && topic != "") {
                        $('#question-form').append(topic + "<br>");
                    }
                }
            }
        }
    });



//----時間
function displayTime() {
    let time_minutes = 100; // Value in minutes
    let time_seconds = 0; // Value in seconds
    let duration = time_minutes * 60 + time_seconds;
    element = document.querySelector('#count-down-timer');
    element.textContent = `${paddedFormat(time_minutes)}:${paddedFormat(time_seconds)}`;
    startCountDown(--duration, element);
}

function paddedFormat(num) {
    return num < 10 ? "0" + num : num;
}

function startCountDown(duration, element) {
    let secondsRemaining = duration;
    let min = 0;
    let sec = 0;
    let countInterval = setInterval(function() {
        min = parseInt(secondsRemaining / 60);
        sec = parseInt(secondsRemaining % 60);
        element.textContent = `${paddedFormat(min)}:${paddedFormat(sec)}`;
        secondsRemaining = secondsRemaining - 1;
        if (secondsRemaining == 598) {
            alert("考試時間剩餘 10 分鐘。");
        } else if (secondsRemaining < 0) {
            clearInterval(countInterval);
            document.getElementById('submit').click();
        };
    }, 1000);
}
displayTime();