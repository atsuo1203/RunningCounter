/**
 * Created by atsuo on 2017/04/29.
 */
var cook;       //cookieデータを格納する変数
var cStart,cEnd;  //走った回数部分を切取る為の位置を格納
var cnt;        //走った回数を格納

//cookieが使えるか確認
if (navigator.cookieEnabled)
{
    cook=document.cookie + ";";  //変数cookにcookieデータを入れる

    //変数cStartにカウントデータの最初の位置を入れる
    cStart = cook.indexOf("counts=",0);

    //データの有無で分岐
    if (cStart == -1)
    {
        //データの無い場合は最初に走ったということ
        document.write("1回走りました！");

        //cookieに走った回数=1を書き込む
        document.cookie="counts=1;";
    }
    else
    {
        //カウントデータの最後の部分「;」の位置を取得
        cEnd=cook.indexOf(";",cStart);

        //数値の部分だけを切り取る
        cnt=cook.substring(cStart+7,cEnd);

        //数値に変換できない例外が出た時の処理
        try
        {
            //取得した回数に+1して表示する
            cnt=parseInt(cnt)+1;
            document.write(cnt+"回走りました！");

            //cookieに走った回数を書き込む
            document.cookie="counts="+cnt+";";
        }
        catch(e)
        {
            document.write("回数の取得に失敗しました。");
        }
    }
}
else
{
    //cookieが使用できない時の処理
    document.write("cookieが使用できません。");
}

function delCookie()
{
    //日付データを作成する
    var date1 = new Date();

    //1970年1月1日00:00:00の日付データをセットする
    date1.setTime(0);

    //有効期限を過去にして書き込む
    document.cookie = "counts=;expires="+date1.toGMTString();

    //ページを再読み込みする
    location.reload();

}

