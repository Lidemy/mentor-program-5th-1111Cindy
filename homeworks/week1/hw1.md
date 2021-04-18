## hw1：交作業流程
  
### ｜前置設定｜
1. 點選 [GitHub classroom](https://classroom.github.com/a/yNNrtNyW) 加入，於網頁中點選 `Code` 複製 `HTTPS` 內資料
2. 輸入指令 `cd ~/Documents` 確認資料將下載存放於文件資料夾裡
3. 輸入指令 `git clone 複製連結` 進行檔案下載
> ###### Clone 指令會把整個專案的內容複製一份到你的電腦裡，這裡指的「內容」不是只有檔案，而是指所有整個專案的歷史紀錄、分支、標籤等內容都會複製一份下來。
> ###### [從伺服器上取得 Repository](https://gitbook.tw/chapters/github/clone-repository.html)

### ｜作業進行｜
1. 輸入指令 `cd mentor-program-5th-1111Cindy` 前往此資料夾
1. 輸入指令 `git checkout -b week1` 表示新增一個名為 week1 的 branch（分支），並切換至此分支
> ###### 上述指令也可個別使用 `git branch week1` + `git checkout week1` 兩步驟
3. 根據週數及作業編碼開啟檔案內資料，以此項作業為例，打開檔案 `hw1.md` （使用 Markdown 格式）開始撰寫
> ###### `hw1.md` 來源：
> ###### mentor-program-5th-1111Cindy -> homeworks -> week1 -> `hw1.md`

### ｜作業完成｜
1. 輸入指令 `git status` 可看到系統告知 week1 內有修改但尚未加入提交的檔案
2. 輸入指令 `git commit -am "finished hw1"` 表示加入一個訊息為 finished hw1 的資料並將它存放到 Repository（儲存庫） 
> ###### 如果是一個全新的檔案（原先未存在於資料夾內），則需先將檔案 add 之後再 commit。`-am` 寫法僅限於已存在於 Repository 的檔案
3. 輸入指令 `git push origin week1` 將 week1 從本地端推送到遠端的 GitHub 平台，此時，會發現　
① GitHub 網頁上的 `master` 選項下多一個 `week1` 的分支
② 點選 `Pull request` 畫面會顯示是否發送 Pull request
> ###### Pull request（PR）解釋：把 week1 的分支（branch）合併（merge）至 master 裡 
4. 點選 `Compare & pull request` 後進入頁面 Open a pull request，畫面最下方可看到修改的資料，依序輸入標題、內容（欲詢問問題或其他資料），點選 `Create pull request` 送出
```
＊補充＊
發送後，可點選 Files changed 查看繳交的內容，如果有格式不對的地方，可以再修正，修正方式如下：

hw1.md 修改內容 -> 
輸入指令 git commit -am "update hw1"  -> 
輸入指令 git push origin week1

完成後，GitHub 網頁上的 Commits 會出現最新的 update hw1 資料，Files changed 也可看到此次改動的更新
```
5. 新畫面的網址即是交作業時提供的 PR 連結
6. 進入 Lidemy 學習系統 -> 課程總覽的`繳交作業` -> 確認`自我檢討`內容 -> 提交連結後送出 

### ｜完成之後｜
1. 助教改完作業之後會於 GitHub 平台裡點選 `Merge pull request` ， PR 連結的畫面左上角會出現紫底白字的 `Merged` ，表示這個 branch 已經 merge 到 master 裡了
2. 輸入指令 `git checkout master` 表示切換 branch 為 master
3. 輸入指令 `git pull origin master` 將遠端的 GitHub 平台裡的 master 拉回本地端，此時遠端與本地端的 mater 同步
4. 輸入指令 `git branch -d week1` 刪除 week1 這個分支
> ###### 遠端已將 week1 合併至 master，之後執行拉回遠端的 master，現在本地端的 master = 遠端的 master，而本地端的 week1 資料已存在於本地端的 master 裡，所以可以刪除 week1 這個分支）
5. 即完成此次作業