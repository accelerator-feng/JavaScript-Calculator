(function(window) {
    var theUA = window.navigator.userAgent.toLowerCase();
    if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
        var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
        if (ieVersion < 9) {
            var str = "你的浏览器版本太low了\n已经和时代脱轨了 :(";
            var str2 = "推荐使用:<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E8%B0%B7%E6%AD%8C%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>谷歌</a>," + "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%81%AB%E7%8B%90%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>火狐</a>," + "<a href='https://www.baidu.com/s?ie=UTF-8&wd=%E7%8C%8E%E8%B1%B9%E6%B5%8F%E8%A7%88%E5%99%A8' target='_blank' style='color:#cc0'>猎豹</a>,其他双核急速模式";
            document.writeln("<pre style='text-align:center;color:#fff;margin:0;background-color:#0cc; height:100%;border:0;position:fixed;top:0;left:0;width:100%;z-index:1234'>" +
                "<h2 style='padding-top:200px;margin:0'><strong>" + str + "<br/></strong></h2><p>" +
                str2 + "</p><h2 style='margin:0'><strong> 如果你的使用的是双核浏览器,请切换到极速模式访问<br/></strong></h2></pre>"); 
        }
    } 
})(window);
$(function() {
    var $input=$("input");
    $("main").mousedown(function(event) {
        var $btn = $(event.target);
        // 取值
        var value = $btn.attr("data-value");
        var result=$input.val();
        var len = $input.val().length;
        $btn.css("background", "#2c9e95");
        // +-*/.后面不能接+-*/
        if (/[\+-\/\.\*]$/.test(result) && /[\+\/\*-]/.test(value)) {
            return false;
        }
        // 不能出现连续小数点或一个数里多个小数点的情况
        if (/\.\d*$/.test(result) && value === ".") {
            return false;
        }
        // *和/不能出现在开头
        if (result === "" && /[\*\/]/.test(value)) {
            return false;
        }
        // 0不能作为整数部分的开头
        if (/\D0$/.test(result) && /\d/.test(value)) {
            return false;
        }
        if (result === "0" && /\d/.test(value)) {
            $input.val(value);
            return true;
        }
        // 清除溢出
        if(result ==="error"){$input.val("");}
        switch (value) {
            // 清空
            case "clear":
                $input.val("");
                break;
                // 退格
            case "backspace":
                var arr = result.split("");
                $input.val(arr.slice(0, arr.length - 1).join(""));
                break;
                // 求值
            case "equal":
                if (result === "") {
                    return false;
                }
                $input.val(eval(result));
                break;
                // 输入
            default:
                $input.val(result+value);
                break;
        }
        // 溢出
        if ($input.val() === "Infinity") { $input.val("error"); }
        // 缩放显示
        if(len>9){$input.css("fontSize","75px");}
        else {$input.css("fontSize","100px");}
    });
    $("html").mouseup(function() {
            $("div").css("background", "#02323e");
        })
        //屏蔽键盘输入
        .keypress(function() { 
            return false;
        });
});
