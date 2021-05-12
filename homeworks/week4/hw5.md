## 請以自己的話解釋 API 是什麼
API（Application Programming Interface）的中文名稱為應用程式介面，扮演應用程式和應用程式之間的橋樑。簡單而言，透過 API 可以讓雙方交換資料。request 向對方要求所想要的資料，對方 response 資料回來（前提為此份資料是對方可提供的資料）。


## 請找出三個課程沒教的 HTTP status code 並簡單介紹
* 407 Proxy Authentication Required - 需要 Proxy 驗證
* 414 Request-URI Too Long - 要求 URI 太長
* 505 HTTP Version Not Supported - 不支援的 HTTP 版本


## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。
餐廳 API 網址：https://delicious.com
| 說明 | Method | path | 參數 | 範例 |
| 回傳所有餐廳資料 | GET | /restaurants | _limit:限制回傳資料數量 | /restaurants?_limit=5 |
| 回傳單一餐廳資料 | GET | /restaurants/:id | 無 | /restaurants/10 |
| 刪除單一餐廳資料 | DELETE | /restaurants | name:餐廳名 | 無 |
| 新增單一餐廳資料 | POST | /restaurants/:id | 無 | 無 |
| 更改單一餐廳資料 | PATCH | /restaurants/:id | name:餐廳名 | 無 |

