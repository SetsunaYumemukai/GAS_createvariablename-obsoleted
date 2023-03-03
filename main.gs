function translateJPtoEN(Japanese) {

//translateJPtoEN関数で、翻訳を行う。
const text = Japanese;

//translate関数で日本語→英語に和訳
const transtextEN = LanguageApp.translate(text,'ja','en');

//translate関数で空白を埋める
const transtextEN_blank= transtextEN.replace("","");

//英語変換
return transtextEN_blank;
}
