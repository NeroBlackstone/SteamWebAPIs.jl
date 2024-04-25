var documenterSearchIndex = {"docs":
[{"location":"#Steam.jl","page":"Steam.jl","title":"Steam.jl","text":"","category":"section"},{"location":"","page":"Steam.jl","title":"Steam.jl","text":"Steam Web API wrapper for Julia","category":"page"},{"location":"#News","page":"Steam.jl","title":"News","text":"","category":"section"},{"location":"","page":"Steam.jl","title":"Steam.jl","text":"get_news_for_app","category":"page"},{"location":"#Steam.get_news_for_app","page":"Steam.jl","title":"Steam.get_news_for_app","text":"get_news_for_app(appid::Int;\n    maxlength::Int=0,\n    enddate::DateTime=now(),\n    count::Int=20,\n    feeds::Vector{String}=String[],\n    tages::Vector{String}=String[])::Appnews\n\nSummary: get_news_for_app returns the latest of a game specified by its AppID.\n\nArguments\n\nappid: AppID of the game you want the news of.\n\nOptional keywords\n\nmaxlength: Maximum length of each news entry.\nenddate: Retrieve posts earlier than this date (unix epoch timestamp)\ncount: How many news enties you want to get returned.\nfeeds: Comma-separated list of feed names to return news for\ntages: Comma-separated list of tags to filter by (e.g. 'patchnodes')\n\nExample\n\njulia> dump(get_news_for_app(440;maxlength=10,enddate=now(),count=1,feeds=[\"steam_updates\",\"tf2_blog\"]))\n    Steam.Appnews\n    appid: Int64 440\n    newsitems: Array{Steam.NewsItem}((1,))\n        1: Steam.NewsItem\n        gid: Int64 5762994032406766352\n        title: String \"Team Fortress 2 Update Released\"\n        url: String \"https://store.steampowered.com/news/220641/\"\n        is_external_url: Bool false\n        author: String \"Valve\"\n        contents: String \"An update ...\"\n        feedlabel: String \"Product Update\"\n        date: Int64 1713822840\n        feedname: String \"steam_updates\"\n        feed_type: Int64 0\n        tags: Nothing nothing\n    count: Int64 1961\n\n\n\n\n\n","category":"function"},{"location":"","page":"Steam.jl","title":"Steam.jl","text":"Steam.Appnews","category":"page"},{"location":"#Steam.Appnews","page":"Steam.jl","title":"Steam.Appnews","text":"struct Appnews\n    appid::Int\n    newsitems::Vector{NewsItem}\n    count::Int\nend\n\nReturn type of get_news_for_app.\n\nFields:\n\nappid: AppID of the game you want the news of.\nnewsitems: Vector of NewsItem.\ncount: Total news count for this game.\n\n\n\n\n\n","category":"type"},{"location":"","page":"Steam.jl","title":"Steam.jl","text":"Steam.NewsItem","category":"page"},{"location":"#Steam.NewsItem","page":"Steam.jl","title":"Steam.NewsItem","text":"struct NewsItem\n    gid::Int\n    title::String\n    url::String\n    is_external_url::Bool\n    author::String\n    contents::String\n    feedlabel::String\n    date::Int\n    feedname::String\n    feed_type::Int\n    tags::Union{Vector{String},Nothing}\nend\n\nGet game news by id.\n\nFields:\n\ngid: News ID.\ntitle: News title.\nurl: News url.\nis_external_url: Is this news URL points to a non-Steam site.\nauthor: News author.\ncontents: News contents, The length is determined by the maxlength keywords.\nfeedlabel: News feedlabel.\ndate: News publish date (unix time stamp).\nfeedname: News feedname.\nfeed_type: News type.\ntags: News tags.\n\n\n\n\n\n","category":"type"}]
}
