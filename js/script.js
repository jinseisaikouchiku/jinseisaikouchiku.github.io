function checkText() {
  const text = document.getElementById("text").value;
  const result = document.getElementById("result");

  const charCount = text.replace(/\s/g, "").length;
  const genkou = (charCount / 400).toFixed(2);
  const lines = text.split("\n").length;
  const paragraphs = text.split(/\n\s*\n/).length;

  const desu = (text.match(/です。/g) || []).length;
  const masu = (text.match(/ます。/g) || []).length;

  const noPeriodLines = text.split("\n").filter(line =>
    line && !line.trim().endsWith("。")
  ).length;

  result.innerHTML = `
    <h2>チェック結果</h2>
    <p>文字数：${charCount}文字</p>
    <p>原稿用紙換算：${genkou}枚（400字）</p>
    <p>行数：${lines}</p>
    <p>段落数：${paragraphs}</p>
    <p>「です。」の数：${desu}</p>
    <p>「ます。」の数：${masu}</p>
    <p>文末に「。」がない行：${noPeriodLines}行</p>
  `;
}
