$(document).ready(function(){
    
    // 이중 배열 방식
    /* 
    var $double_arr=[
        ["kakao_01.jpg", "카카오 프렌즈 타이틀1", "카카오 프렌즈 내용1"],
        ["kakao_02.jpg", "카카오 프렌즈 타이틀2", "카카오 프렌즈 내용2"],
        ["kakao_03.jpg", "카카오 프렌즈 타이틀3", "카카오 프렌즈 내용3"]
    ];

    $(".arr_method ul li").each(function(index){
        $(this).find("img").attr("src","img/"+$double_arr[index][0]);
        $(this).find("h3").text($double_arr[index][1]);
        $(this).find("p").text($double_arr[index][2]);
    });
     */

    // 객체 배열 방식
    var $object_arr=[
        {img:"kakao_01.jpg", title:"카카오 프렌즈 타이틀1", context:"카카오 프렌즈 내용1"},
        {img:"kakao_02.jpg", title:"카카오 프렌즈 타이틀2", context:"카카오 프렌즈 내용2"},
        {img:"kakao_03.jpg", title:"카카오 프렌즈 타이틀3", context:"카카오 프렌즈 내용3"}
    ];

    $(".arr_method ul li").each(function(index){
        $(this).find("img").attr("src","img/"+$object_arr[index].img);
        $(this).find("h3").text($object_arr[index].title);
        $(this).find("p").text($object_arr[index].context);
    });

    var $arr_01=["홍길동", "18", "서울"];
    $("#ex_01 p").each(function(num){
        $(this).find("span").text($arr_01[num]);
    });
    /* 
    $("#ex_01 #name").text($arr_01[0]);
    $("#ex_01 #age").text($arr_01[1]);
    $("#ex_01 #location").text($arr_01[2]);
     */

    var $arr_02=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
    $("#ex_02 ul li").each(function(num){
        $(this).css("background-image","url(img/"+$arr_02[num]+")");
    });

    var $arr_03_img=["kakao_01.jpg", "kakao_02.jpg", "kakao_03.jpg"];
    var $arr_03_txt=["카카오 백화점 나들이", "카카오 입성", "카카오 휴가"];
    $("#ex_03 ul li").each(function(num){
        $(this).find(".img").css("background-image","url(img/"+$arr_03_img[num]+")");
        $(this).find(".title").text($arr_03_txt[num]);
    });

    var $arr_04=[
        ["kakao_01.jpg", "카카오 백화점 나들이"],
        ["kakao_02.jpg", "카카오 입성"],
        ["kakao_03.jpg", "카카오 휴가"]
    ];
    $("#ex_04 ul li").each(function(num){
        $(this).find(".img").css("background-image","url(img/"+$arr_04[num][0]+")");
        $(this).find(".title").text($arr_04[num][1]);
    });
    
    var $arr_05=[
        ["kakao_01.jpg", "카카오 백화점 나들이"],
        ["kakao_02.jpg", "카카오 입성"],
        ["kakao_03.jpg", "카카오 휴가"]
    ];
    for(i=0;i<$arr_05.length;i++){
        $("#ex_05 ul").append("<li><div class='img'></div><p class='title'></p></li>");
    };
    $("#ex_05 ul li").each(function(num){
        $(this).find(".img").css("background-image","url(img/"+$arr_05[num][0]+")");
        $(this).find(".title").text($arr_05[num][1]);
    });
    
    var $md_arr_01=[
        {$name:"홍길동", $age:"18", $location:"서울"},
        {$name:"홍길순", $age:"13", $location:"부산"},
        {$name:"홍길만", $age:"57", $location:"청주"},
    ];
    $("#md_edu_01 .info").each(function(num){
        $(this).text("이름 : "+$md_arr_01[num].$name+", 나이 : "+$md_arr_01[num].$age+", 지역 : "+$md_arr_01[num].$location);
    });
});