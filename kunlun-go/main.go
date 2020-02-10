package main //niaobi.org by 鸟神

import (
	"github.com/didip/tollbooth"
	"github.com/iris-contrib/middleware/tollboothic"
	"github.com/kataras/iris/v12"
	"github.com/kataras/iris/v12/middleware/recover"
)

var isDebug = true

func main() {
	//限制请求次数每秒3次
	limiter := tollbooth.NewLimiter(3, nil)

	//-----路由-----
	app := iris.New()
	app.Use(recover.New())
	app.Use(tollboothic.LimitHandler(limiter))

	if isDebug == true {
		app.HandleDir("/", "/Users/cooerson/Documents/昆仑法门 project/kunlun web-v2.7-release")
	} else {
		app.HandleDir("/", "/kunlun/public")
	}

	app.OnErrorCode(iris.StatusNotFound, func(ctx iris.Context) {
		ctx.HTML("<b>Resource Not Found</b>")
	})

	app.Run(iris.Addr("127.0.0.1:38888"))
}
