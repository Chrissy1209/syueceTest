(function($) {
    $(function() {
        let chineseStr = '';
        let englishStr = '';
        let mathStr = '';
        let count = 0;
        let chineseBar = [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //43
        let englishBar = [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //57
        let mathBar = [9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; //21
        //首頁開始考試按鈕    
        $("#home-form>select").change(function() {
            const year = $("#sel_year").val();
            const obj = $("#sel_obj").val();
            if (year !== "選擇年份" && obj !== "選擇科目")
                $("#home-form>.button").show();
            else $("#home-form>.button").hide();
        });
        //選擇年份跟科目
        $(".button").click(function() {
            const obj = $("#sel_obj").val();
            switch (obj) {
                case "Chinese":
                    $("#home-form").attr("action", "/quize/Chinese");
                    break;
                case "English":
                    $("#home-form").attr("action", "/quize/English");
                    break;
                case "Math":
                    $("#home-form").attr("action", "/quize/Math");
                    break;
            }
        });
        //國文答案格
        for (let i = 1; i <= 42; i++) {
            chineseStr += `<label>
            <span>${i}</span>
            <input type="checkbox" name="Chinese${i}" value="A">
            <input type="checkbox" name="Chinese${i}" value="B">
            <input type="checkbox" name="Chinese${i}" value="C">
            <input type="checkbox" name="Chinese${i}" value="D">
            <input type="checkbox" name="Chinese${i}" value="E">
            </label>`
        }
        //英文答案格
        for (let i = 1; i <= 56; i++) {
            englishStr += `<label>
            <span>${i}</span>
            <input type="checkbox" name="English${i}" value="A">
            <input type="checkbox" name="English${i}" value="B">
            <input type="checkbox" name="English${i}" value="C">
            <input type="checkbox" name="English${i}" value="D">
            <input type="checkbox" name="English${i}" value="E">
            <input type="checkbox" name="English${i}" value="F">
            <input type="checkbox" name="English${i}" value="G">
            <input type="checkbox" name="English${i}" value="H">
            <input type="checkbox" name="English${i}" value="I">
            <input type="checkbox" name="English${i}" value="J">
            </label>`
        }
        //數學答案格
        for (let i = 1; i <= 32; i++) {
            mathStr += `<label>
            <span>${i}</span>
            <input type="checkbox" name="Math${i}" value="1">
            <input type="checkbox" name="Math${i}" value="2">
            <input type="checkbox" name="Math${i}" value="3">
            <input type="checkbox" name="Math${i}" value="4">
            <input type="checkbox" name="Math${i}" value="5">
            <input type="checkbox" name="Math${i}" value="6">
            <input type="checkbox" name="Math${i}" value="7">
            <input type="checkbox" name="Math${i}" value="8">
            <input type="checkbox" name="Math${i}" value="9">
            <input type="checkbox" name="Math${i}" value="0">
            <input type="checkbox" name="Math${i}" value="-">
            <input type="checkbox" name="Math${i}" value="+/-">
            </label>`
        }
        $(".Chinese>#from-checkbox").append(chineseStr);
        $(".English>#from-checkbox").append(englishStr);
        $(".Math>#from-checkbox").append(mathStr);
        //--------國文考試進度條
        $(".chinesCheckForm>label>input").click((e) => {
            let $span = e.currentTarget.parentElement.firstElementChild.textContent;
            let checkOther = false;
            if (chineseBar[$span] != 1) {
                chineseBar[$span] = 1;
                count++;
            } else {
                let a = e.currentTarget.parentElement.children;
                $(a).each((e) => {
                    if ($(a[e]).prop("checked")) checkOther = true;
                });
                if (checkOther) return 0;
                else {
                    chineseBar[$span] = 0;
                    count--;
                }
            }
            console.log(chineseBar);
            console.log(count);
            let s = (count / 42) * 100;
            $(".chinesebar").css("width", s + "%");
        });
        //--------英文考試進度條
        $(".englishCheckForm>label>input").click((e) => {
            let $span = e.currentTarget.parentElement.firstElementChild.textContent;
            let checkOther = false;
            if (englishBar[$span] != 1) {
                englishBar[$span] = 1;
                count++;
            } else {
                let a = e.currentTarget.parentElement.children;
                $(a).each((e) => {
                    if ($(a[e]).prop("checked")) checkOther = true;
                });
                if (checkOther) return 0;
                else {
                    englishBar[$span] = 0;
                    count--;
                }
            }
            console.log(englishBar);
            console.log(count);
            let s = (count / 56) * 100;
            $(".englishbar").css("width", s + "%");
        });
        //--------數學考試進度條
        $(".mathCheckForm>label>input").click((e) => {
            let $span = e.currentTarget.parentElement.firstElementChild.textContent;
            let checkOther = false;
            if (mathBar[$span] != 1) {
                mathBar[$span] = 1;
                count++;
            } else {
                let a = e.currentTarget.parentElement.children;
                $(a).each((e) => {
                    if ($(a[e]).prop("checked")) checkOther = true;
                });
                if (checkOther) return 0;
                else {
                    mathBar[$span] = 0;
                    count--;
                }
            }
            console.log(mathBar);
            console.log(count);
            let s = (count / 20) * 100;
            $(".mathbar").css("width", s + "%");
        });
    })
})(jQuery)