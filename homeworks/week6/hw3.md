## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。
    `<hr>` 分格線標籤：產生一條分格線
    * `<hr size=4>` -> 控制高度
    * `<hr width=500>` / `<hr width=50%>` -> 控制長度
    * `<hr color=ff0000>` -> 控制顏色
    * `<hr align=right>` -> 控制位置(預設為置中 center )右 right、左 left
    
    `<center></center>` 置中標籤：要置中的文字或圖片置於`<center>`與`</center>`之間，不論是文字、圖案、中間有多少東西，系統會自動找到中心點放置，就算突然的縮小視窗或放大視窗，它都會馬上自動找到中心點。
    
    `<pre></pre>`：排版用標籤，放在`<pre>`與`</pre>`之間的文字會以原本的格式顯示出來，不用使用像`<br>`之類的斷行。

## 請問什麼是盒模型（box modal）
    本質上是一個盒子，封裝周圍的 HTML 元素，包括外邊距（Margin）、邊框（Border）、內邊距（Padding）、內容（Content），合在一起就可以創建出頁面上看到的樣子。

## 請問 display: inline, block 跟 inline-block 的差別是什麼？
    * `display:inline` 將元素顯示為行內元素，高度，行高以及底邊距不可改變(高度就是內容文字或者圖片的寬度)。多個相鄰的行內元素排列，超過行寬後，才會換新的一行。
    * `display:block` 將元素顯示為塊級元素，從而可以更好地操控元素的寬高，以及內外邊距，每一個塊級元素都是從新的一行開始。
    * `display:inline-block` 將元素顯示為行內塊狀元素，設置該屬性後，其他的行內塊級元素會排列在同一行。
    li 原為一個“塊級元素”，撰寫兩個 `<li>` 會產生兩行，但加上 `display:inline-block` 後，兩個 `<li>`  便會生成於同一行。
    
    ```
    行內元素 -> 
    b, big, i, small, tt, abbr, acronym, cite, code, dfn, em, kbd, strong, samp, var, a, bdo, br, img, map, object, q, script, span, sub, sup, button, input, label, select, textarea
    塊級元素 -> 
    <address>, <div>, <footer>, <form>, <p>, <hr>, <header> ...
    ```

## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？
	* static（靜態定位）：系統默認值。
	* relative（相对定位）：通過 top, bottom, left, right 的設置相對於原先位置進行定位，且區塊原本的空間仍會保留不會消失。
	    * 設定絕對配置( position: absolute )的基準元素時
	    * 希望元素偏移重疊 or 指定圖層上下順序且同時保留原本的空間時
	* absolute（絕對定位）：脫離原本預設的版面配置，重新以「基準元素」為起點，可以自由指定配置位置（若沒有指定基準元素的話，預設是以 body 元素「整個視窗」為基準）。
	* fixed（固定定位）：以整個視窗（body 元素）為基準，就算拉動捲軸，區塊仍然會顯示在同一個位置。
	    * 使用在 go top （回到頁面頂端）按鈕
	    * 固定顯示於頁面上方的 header 
