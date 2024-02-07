$("#main-slider").slick({
    //ここにオプション
    asNavFor:"#text-slider", //テキストスライダーを追従させる
    autoplay:true,            //自動再生
    centerMode:true,        //追記
    centerPadding:"20%",    //追記
    variableWidth: true // スライド幅の自動計算を無効化
})
$("#text-slider").slick({
    //ここにオプション
    draggable:false,         //ドラッグでのスライド禁止
    arrows:false,             //矢印非表示
    centerMode:true,        //追記
    centerPadding:"20%",    //
    variableWidth: true, // スライド幅の自動計算を無効化
    dots:true
})