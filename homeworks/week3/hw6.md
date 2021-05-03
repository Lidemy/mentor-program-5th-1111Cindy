## hw1：好多星星
直覺反應的一題！在學回圈時已練習了好幾次，所以看到題目時已可馬上作答。
## hw2：水仙花數
這題課程有講解過，這題使用填空函式的方式較容易理解。只是自己實際操作時，對於函示內的參數無法清楚掌握，A 函式裡的 B 函式參數，與下方 B 函式裡的參數時常會寫一樣，而導致 console.log 時出錯。
## hw3：判斷質數
質數這題之前也寫過，課程裡也有講解過這題，所以挺順利的便完成。但一開始忘記先將 1 這個數字判斷為非質數。
## hw4：判斷迴文
這題之前也有寫過類似的，不過之前寫的是輸出反向的字串，這次多了個判斷。順利地寫出後，卻 WA，才發現原來輸出的 True 或 False 的開頭要大寫啊！
## hw5：聯誼順序比大小
一開始的寫法為以數字型態比大小，寫了很長一串非常醜的程式碼，跟著題目輸入，輸出也是正確的結果，但提交時卻出現 WA，看了群組才發現這題不能使用數字形態來解題。實際試了一個超長的多位數後，證實輸出結果會故障。後來使用先比字串長度之後再進行兩個字串的比較，終於順利解出此題了。對於解答上的 `if (p == -1)` （如果是比小，把 AB 對調，就會回傳 B）的這個判別方式，將 AB 值交換的寫法，花了一些時間才理解。
```
function solve(lines) {
	for(let i=1; i<lines.length; i++) {
		let line = lines[i]
		let numbers = line.split(" ")
		let a = Number(numbers[0])
		let b = Number(numbers[1])
		let game = Number(numbers[2])
		if(a === b) {
			console.log("DRAW")
		} else {
			if(game === 1 && a > b) {
				console.log("A")
			} else {
				if(game === 1 && b > a){
					console.log("B")
				} else {
					if(game === -1 && a > b) {
						console.log("B")
					} else {
						if(game === -1 && b > a) {
							console.log("A")
						}
					}
				}
			}
		}
	}
}
```