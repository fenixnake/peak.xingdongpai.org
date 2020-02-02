
server {
    listen    80;
    listen    [::]:80;
    server_name kunlun.xingdongpai.com;

    limit_conn ops 50;

    #rewrite ^(.*) https://$host$1 permanent;
    return 301 https://kunlun.xingdongpai.com$request_uri;
}

server {
    listen 443 ssl http2;
    listen [::]:443 ssl http2;
    server_name kunlun.xingdongpai.com;

    pagespeed on;

    #filters
    ## Text / HTML
    pagespeed EnableFilters combine_heads;
    pagespeed EnableFilters collapse_whitespace;
    pagespeed EnableFilters elide_attributes;
    pagespeed EnableFilters pedantic;
    pagespeed EnableFilters remove_comments;
    pagespeed EnableFilters remove_quotes;
    #高风险,开启可能会导致某些自动加载功能失效
    #pagespeed EnableFilters trim_urls;
    ## JavaScript
    pagespeed EnableFilters combine_javascript;
    pagespeed EnableFilters canonicalize_javascript_libraries;
    pagespeed EnableFilters inline_javascript;
    pagespeed EnableFilters rewrite_javascript;
    #高风险,延迟加载js
    #pagespeed EnableFilters defer_javascript;
    ## CSS
    pagespeed EnableFilters outline_css;
    pagespeed EnableFilters combine_css;
    pagespeed EnableFilters inline_import_to_link;
    pagespeed EnableFilters inline_css;
    pagespeed EnableFilters inline_google_font_css;
    pagespeed EnableFilters move_css_above_scripts;
    pagespeed EnableFilters move_css_to_head;
    pagespeed EnableFilters prioritize_critical_css;
    pagespeed EnableFilters rewrite_css;
    pagespeed EnableFilters fallback_rewrite_css_urls;
    pagespeed EnableFilters rewrite_style_attributes;
    pagespeed EnableFilters rewrite_style_attributes_with_url;
    ## Images
    pagespeed EnableFilters dedup_inlined_images;
    pagespeed EnableFilters inline_preview_images;
    pagespeed EnableFilters resize_mobile_images;
    pagespeed EnableFilters inline_images;
    pagespeed EnableFilters resize_rendered_image_dimensions;
    pagespeed EnableFilters sprite_images;
    pagespeed EnableFilters convert_jpeg_to_progressive;
    ## CACHE
    pagespeed EnableCachePurge on;
    pagespeed EnableFilters extend_cache;
    pagespeed EnableFilters extend_cache_pdfs;
    
    # 重置 http Vary 头
    pagespeed RespectVary on;
    # html字符转小写
    pagespeed LowercaseHtmlNames on;
    # 压缩带 Cache-Control: no-transform 标记的资源
    pagespeed DisableRewriteOnNoTransform off;
    # 相对URL
    pagespeed PreserveUrlRelativity on;
    # 开启 https
    pagespeed FetchHttps enable;
    # 过滤规则
    pagespeed RewriteLevel PassThrough;
    # 不处理WordPress的/wp-admin/目录(可选配置，可参考使用)
    pagespeed Disallow "*/wp-admin/*";
    pagespeed Disallow "*/wp-login.php*";
    # DNS 预加载
    pagespeed EnableFilters insert_dns_prefetch;
    # 资源预加载
    pagespeed EnableFilters hint_preload_subresources;

    limit_conn ops 50;

    ssl_certificate /etc/nginx/ssl/cert/1_kunlun.xingdongpai.com_bundle.crt;
    ssl_certificate_key /etc/nginx/ssl/cert/2_kunlun.xingdongpai.com.key;
    ssl_dhparam  /etc/nginx/ssl/dhparam.pem;

    
    #====pagespeed 安全转发策略========
    # 可通过 http://kunlun.fun/ps-admin 来查看控制台和清除缓存

    # Ensure requests for pagespeed optimized resources go to the pagespeed handler
    # and no extraneous headers get set.
    location ~ "\.pagespeed\.([a-z]\.)?[a-z]{2}\.[^.]{10}\.[^.]+" { add_header "" ""; }
    location ~ "^/ngx_pagespeed_static/" { }
    location ~ "^/ngx_pagespeed_beacon$" { }

    pagespeed StatisticsPath /ngx_pagespeed_statistics;
    pagespeed MessagesPath /ngx_pagespeed_message;
    pagespeed ConsolePath /pagespeed_console;
    pagespeed AdminPath /ps-admin;

    location /ngx_pagespeed_statistics { allow 127.0.0.1; deny all; }
    location /ngx_pagespeed_message { allow 127.0.0.1; deny all; }
    location /pagespeed_console {allow 127.0.0.1;deny all;}

    # 控制台
    pagespeed Statistics on;
    pagespeed StatisticsLogging on;
    # log目录
    pagespeed LogDir /data/wwwlogs/pagespeed;
    # 日志限制
    pagespeed StatisticsLoggingIntervalMs 60000;
    pagespeed StatisticsLoggingMaxFileSizeKb 1024;
    #=====pagespeed end====



    #=====反爬虫=========
    #禁止Scrapy等工具的抓取
    if ($http_user_agent ~* (Python|Java|Go|Js|Wget|Scrapy|Curl|HttpClient|Spider)) {
            return 444;
    }
    #禁止指定UA及UA为空的访问
    if ($http_user_agent ~ "SiteSucker|WinHttp|FetchURL|java/|FeedDemon|Jullo|JikeSpider|Alexa Toolbar|AskTbFXTV|AhrefsBot|CrawlDaddy|Java|Feedly|Apache-HttpAsyncClient|UniversalFeedParser|ApacheBench|Microsoft URL Control|Swiftbot|ZmEu|oBot|jaunty|Python-urllib|lightDeckReports Bot|YYSpider|DigExt|HttpClient|MJ12bot|heritrix|EasouSpider|Ezooms|BOT/0.1|YandexBot|FlightDeckReports|Linguee Bot|^$" ) {
            return 444;
    }
    #禁止的UA大全
    if ($bad_bot) {
        return 444;
    }
    #屏蔽单个IP的命令是
    #deny 123.45.6.7
    #封整个段即从123.0.0.1到123.255.255.254的命令
    #deny 123.0.0.0/8
    #封IP段即从123.45.0.1到123.45.255.254的命令
    #deny 124.45.0.0/16
    #封IP段即从123.45.6.1到123.45.6.254的命令是
    #deny 123.45.6.0/24
    # 以下IP皆为流氓
    #deny 58.95.66.0/24;
    #=====反爬虫 end=========



    #缓存清理模块
    location ~ /clean(/.*) {
          allow all; #此处表示允许访问缓存清理页面的IP
          proxy_cache_purge cache_one $host$1$is_args$args;
    }
    #缓存html页面
    location ~* .*\.(html|htm)$ {
          proxy_pass http://127.0.0.1:5521;
          proxy_cache_key $host$uri$is_args$args;
          proxy_redirect off;
          proxy_set_header Host $host;
          proxy_cache cache_one;
          #状态为200的缓存1小时
          proxy_cache_valid 200 304 1h;
          proxy_cache_valid any 5m;
          proxy_cache_valid 301 302 400 403 444 404 500 0m;
          #浏览器过期时间设置1小时
          expires 1h;
          #忽略头部禁止缓存申明，类似与CDN的强制缓存功能
          proxy_ignore_headers "Cache-Control" "Expires" "Set-Cookie";
          #在header中插入缓存状态，命中缓存为HIT，没命中则为MISS
          add_header Nginx-Cache "$upstream_cache_status";
          add_header Cache-Control public;
    }
    #------资源缓存设置，除了open目录下的，都需要防盗链-----------
    location ^~ /assets/open/ {
      # 匹配任何以 /open/ 开头的地址，匹配符合以后，停止往下搜索正则，采用这一条
      proxy_pass http://127.0.0.1:5521;
          proxy_cache_key $host$uri$is_args$args;
          proxy_redirect off;
          proxy_set_header Host $host;
          proxy_cache cache_one;
          proxy_cache_valid 200 304 30d;
          proxy_cache_valid any 5m;
          proxy_cache_valid 301 302 400 403 444 404 500 0m;
          expires 30d;
          access_log  off;
          log_not_found off;
          #忽略头部禁止缓存申明，类似与CDN的强制缓存功能
          proxy_ignore_headers "Cache-Control" "Expires" "Set-Cookie";
          add_header Nginx-Cache "$upstream_cache_status";
          add_header Cache-Control public;
    }
    location ~* .(gif|jpeg|jpg|png|webp|svg|css|js|mp4|webm|ogg|mov)$ {
          #---资源防盗链---
          valid_referers server_names *.xingdongpai.com xingdongpai.com *.reqing.org reqing.org *.niaobi.org niaobi.org *.xingdongpai.org xingdongpai.org *.niaobi.net niaobi.net ~\.google\. ~\.yahoo\. ~\.baidu\.;                
          
          if ($invalid_referer) {
              return 444;
          }
          #---资源防盗链 end---
          proxy_pass http://127.0.0.1:5521;
          proxy_cache_key $host$uri$is_args$args;
          proxy_redirect off;
          proxy_set_header Host $host;
          proxy_cache cache_one;
          proxy_cache_valid 200 304 300d;
          proxy_cache_valid any 5m;
          proxy_cache_valid 301 302 400 403 444 404 500 0m;
          expires 300d;
          access_log  off;
          log_not_found off;
          #忽略头部禁止缓存申明，类似与CDN的强制缓存功能
          proxy_ignore_headers "Cache-Control" "Expires" "Set-Cookie";
          add_header Nginx-Cache "$upstream_cache_status";
          add_header Cache-Control public;
      }
      #location ~* ^.+\.(eot|ttf|otf|woff|txt|pdf)$  {
      #location ~* .*\.(eot|ttf|otf|woff|txt|pdf)(.*) {
      location ~* .(eot|ttf|otf|woff|woff2|txt|pdf)$ {
          #---资源防盗链---
          valid_referers server_names *.xingdongpai.com xingdongpai.com *.reqing.org reqing.org *.niaobi.org niaobi.org *.xingdongpai.org xingdongpai.org *.niaobi.net niaobi.net ~\.google\. ~\.yahoo\. ~\.baidu\.;                      
          
          if ($invalid_referer) {
              return 444;
          }
          #---资源防盗链 end---
          proxy_pass http://127.0.0.1:5521;
          proxy_cache_key $host$uri$is_args$args;
          proxy_redirect off;
          proxy_set_header Host $host;
          proxy_cache cache_one;
          proxy_cache_valid 200 304 3000d;
          proxy_cache_valid any 5m;
          proxy_cache_valid 301 302 400 403 444 404 500 0m;
          expires max;
          access_log  off;
          log_not_found off;
          #忽略头部禁止缓存申明，类似与CDN的强制缓存功能
          proxy_ignore_headers "Cache-Control" "Expires" "Set-Cookie";
          add_header Nginx-Cache "$upstream_cache_status";
          add_header Cache-Control public;
      }
      #------资源缓存设置 end-----------
      #动态页面直接放过不缓存
      location ~ .*\.(php)(.*){
           proxy_pass http://127.0.0.1:5521;
           proxy_set_header        Host $host;
           proxy_set_header        X-Real-IP $remote_addr;
           proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
           add_header Cache-Control no-store;
      }
      #设置缓存黑名单，不缓存指定页面，比如wp后台或其他需要登录态的页面，用分隔符隔开
      location ~ ^/(wp-admin|system)(.*)$ {
           proxy_pass http://127.0.0.1:5521;
           proxy_set_header        Host $host;
           proxy_set_header        X-Real-IP $remote_addr;
           proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
           add_header Cache-Control no-store;
      }
      #不缓存以斜杠结尾的页面
      location ~ ^(.*)/$ {
           proxy_pass http://127.0.0.1:5521;
           proxy_set_header        Host $host;
           proxy_set_header        X-Real-IP $remote_addr;
           proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
           add_header Cache-Control no-store; 
     }
     location / {
           proxy_pass http://127.0.0.1:5521;
           proxy_set_header        Host $host;
           proxy_set_header        X-Real-IP $remote_addr;
           proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
     }
}

server {
    listen 127.0.0.1:5521;

    server_name kunlun.xingdongpai.com;

    add_header Access-Control-Allow-Origin *;
    root /kunlun/public/;
    index index.html;
}


