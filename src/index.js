import "./styles.css";

const onClickAdd = () => {
  // textボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // リスト生成
  const p = document.createElement("p");
  p.innerText = inputText;

  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(p);

  //完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //TODOリスト生成
    const cP = document.createElement("p");
    cP.innerText = inputText;

    const cDiv = document.createElement("div");
    cDiv.className = "list-row";
    cDiv.appendChild(cP);

    //戻すボタン
    const returnButton = document.createElement("button");
    returnButton.innerText = "戻す";
    returnButton.addEventListener("click", () => {
      document.getElementById("incomplete-list").appendChild(li);
      //完了リストから削除
      returnButton.parentNode.parentNode.remove();
    });
    cDiv.appendChild(returnButton);

    // 完了リストに追加
    const cLi = document.createElement("li");
    cLi.appendChild(cDiv);

    document.getElementById("complete-list").appendChild(cLi);

    //未完了リストから削除
    completeButton.parentNode.parentNode.remove();
  });
  div.appendChild(completeButton);

  //削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //未完了リストから削除
    deleteButton.parentNode.parentNode.remove();
  });
  div.appendChild(deleteButton);

  // 未完了リストに追加
  const li = document.createElement("li");
  li.appendChild(div);

  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
