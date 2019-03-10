window.onload = function(){
    /*去执行我们需要执行的代码*/
    search();
};
/*搜索栏js效果*/
function search(){
    
    /*
     * 1.当我们滑动页面的时候   不超过轮播图的高度的时候  颜色需要爱随着高度区去改变的
     * 2.当我们超过的时候  是不需需要去改变的
     * */


    /*搜索栏*/
    var search = document.querySelector('.jd_header_box');
    /*banner*/
    var banner = document.querySelector('.jd_banner');
    /*获取高度限制*/
    var height = banner.offsetHeight;


    /*透明度*/
    var opacity = 0;

    window.onscroll = function(){
        /*IE document.documentElement.scrollTop*/
        //console.log(document.body.scrollTop);
        var ttop=document.documentElement.scrollTop||document.body.scrollTop;
       
        console.log(ttop)
        /*超过的时候  */
        if(ttop > height){
            opacity = 0.85;
        }
        /*不超过的时候*/
        else{
            opacity = 0.85 * (ttop/height);
        }

        /*操作dom*/
        search.style.background = "rgba(201,21,35,"+opacity+")";
    }
}
/*轮播图*/

/*倒计时*/

