$(function(){
    $("#container").fullpage({
        verticalCentered: false,
        anchors: ["p1", "p2", "p3", "p4", "p5","p6"],
        slidesColor: ["#4dd0e1", "#22c3aa", "#e8b118", "#fb6d7e", "#149b70","#19B1E0"],
        scrollingSpeed: 1000,
        navigation: true,
        navigationPosition: "right",
        navigationTooltips: ["基本资料", "技术专长", "工作经验", "个人项目","公司期望","联系方式"],
        continuousVertical: true,
        fixedElements:"#menu",
        menu:"#menu",
    });
})
