import (
	"os"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func main() {
	dsn := os.Getenv("DATABASE_URL") // DATABASE_URL 環境変数から接続文字列を取得

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database: " + err.Error())
	}

	// データベース接続が成功したら、db を使って操作を行う
}
