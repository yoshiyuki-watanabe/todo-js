import "./styles.css";

const onClickAdd = () => {
  // textボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // p生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);

  // list生成
  const li = document.createElement("li");
  li.appendChild(div);

  // 未完了リストに追加
  document
    .getElementById("incomplete-list")
    .getElementsByTagName("li")[0]
    .appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
