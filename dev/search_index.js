var documenterSearchIndex = {"docs":
[{"location":"ISteamNews/#News","page":"ISteamNews","title":"News","text":"","category":"section"},{"location":"ISteamNews/","page":"ISteamNews","title":"ISteamNews","text":"get_news_for_app","category":"page"},{"location":"ISteamNews/#SteamWebAPIs.get_news_for_app","page":"ISteamNews","title":"SteamWebAPIs.get_news_for_app","text":"get_news_for_app(appid::Int;\n    maxlength::Int=0,\n    enddate::DateTime=now(),\n    count::Int=20,\n    feeds::Vector{String}=String[],\n    tages::Vector{String}=String[])::Appnews\n\nSummary: get_news_for_app returns the latest of a game specified by its AppID.\n\nArguments\n\nappid: AppID of the game you want the news of.\n\nOptional keywords\n\nmaxlength: Maximum length of each news entry.\nenddate: Retrieve posts earlier than this date (unix epoch timestamp)\ncount: How many news enties you want to get returned.\nfeeds: Comma-separated list of feed names to return news for\ntages: Comma-separated list of tags to filter by (e.g. 'patchnodes')\n\nExample\n\njulia> dump(get_news_for_app(440;maxlength=10,enddate=now(),count=1,feeds=[\"steam_updates\",\"tf2_blog\"]))\nSteamWebAPIs.Appnews\n  appid: Int64 440\n  newsitems: Array{SteamWebAPIs.NewsItem}((1,))\n    1: SteamWebAPIs.NewsItem\n      gid: Int64 5759616966668990190\n      title: String \"Fireside Cup\"\n      url: String \"https://steamstore-a.akamaihd.net/news/externalpost/steam_community_announcements/5759616966668990190\"\n      is_external_url: Bool true\n      author: String \"erics\"\n      contents: String \"{STEAM_CLA...\"\n      feedlabel: String \"Community Announcements\"\n      date: Dates.DateTime\n        instant: Dates.UTInstant{Dates.Millisecond}\n          periods: Dates.Millisecond\n            value: Int64 63849838959000\n      feedname: String \"steam_community_announcements\"\n      feed_type: Int64 1\n      tags: Nothing nothing\n  count: Int64 3545\n\n\n\n\n\n","category":"function"},{"location":"ISteamNews/","page":"ISteamNews","title":"ISteamNews","text":"SteamWebAPIs.Appnews","category":"page"},{"location":"ISteamNews/#SteamWebAPIs.Appnews","page":"ISteamNews","title":"SteamWebAPIs.Appnews","text":"struct Appnews\n    appid::Int\n    newsitems::Vector{NewsItem}\n    count::Int\nend\n\nReturn type of get_news_for_app.\n\nFields:\n\nappid: AppID of the game you want the news of.\nnewsitems: Vector of NewsItem.\ncount: Total news count for this game.\n\n\n\n\n\n","category":"type"},{"location":"ISteamNews/","page":"ISteamNews","title":"ISteamNews","text":"SteamWebAPIs.NewsItem","category":"page"},{"location":"ISteamNews/#SteamWebAPIs.NewsItem","page":"ISteamNews","title":"SteamWebAPIs.NewsItem","text":"struct NewsItem\n    gid::Int\n    title::String\n    url::String\n    is_external_url::Bool\n    author::String\n    contents::String\n    feedlabel::String\n    date::DateTime\n    feedname::String\n    feed_type::Int\n    tags::Union{Vector{String},Nothing}\nend\n\nGet game news by id.\n\nFields:\n\ngid: News ID.\ntitle: News title.\nurl: News url.\nis_external_url: Is this news URL points to a non-Steam site.\nauthor: News author.\ncontents: News contents, The length is determined by the maxlength keywords.\nfeedlabel: News feedlabel.\ndate: News publish date.\nfeedname: News feedname.\nfeed_type: News type.\ntags: News tags.\n\n\n\n\n\n","category":"type"},{"location":"ISteamUser/#Player-Summaries","page":"ISteamUser","title":"Player Summaries","text":"","category":"section"},{"location":"ISteamUser/","page":"ISteamUser","title":"ISteamUser","text":"get_player_summaries","category":"page"},{"location":"ISteamUser/#SteamWebAPIs.get_player_summaries","page":"ISteamUser","title":"SteamWebAPIs.get_player_summaries","text":"get_player_summaries(steamids::Vector{Int})::Vector{Player}\n\nSummary: get_player_summaries returns basic profile information for a list of 64-bit Steam IDs.\n\nArguments\n\nsteamids: Vector of 64 bit Steam IDs to return profile information for. Up to 100 Steam IDs can be requested.\n\nExample\n\njulia> dump(get_player_summaries([76561198202322924]))\nArray{SteamWebAPIs.Player}((1,))\n  1: SteamWebAPIs.Player\n    steamid: Int64 76561198309475951\n    communityvisibilitystate: Int64 3\n    profilestate: Int64 1\n    personaname: String \"SkyEast\"\n    profileurl: String \"https://steamcommunity.com/id/skyeast/\"\n    avatar: String \"https://avatars.steamstatic.com/de7aed4299406a52b01b0fc087ec5eb1d380b7e7.jpg\"\n    avatarmedium: String \"https://avatars.steamstatic.com/de7aed4299406a52b01b0fc087ec5eb1d380b7e7_medium.jpg\"\n    avatarfull: String \"https://avatars.steamstatic.com/de7aed4299406a52b01b0fc087ec5eb1d380b7e7_full.jpg\"\n    avatarhash: String \"de7aed4299406a52b01b0fc087ec5eb1d380b7e7\"\n    lastlogoff: DateTime\n      instant: Dates.UTInstant{Millisecond}\n        periods: Millisecond\n          value: Int64 63850008696000\n    personastate: Int64 1\n    primaryclanid: Int64 103582791455934525\n    timecreated: DateTime\n      instant: Dates.UTInstant{Millisecond}\n        periods: Millisecond\n          value: Int64 63601217062000\n    personastateflags: Int64 0\n    loccountrycode: String \"CN\"\n    locstatecode: Nothing nothing\n    loccityid: Nothing nothing\n    realname: String \"E-Ject\"\n    gameextrainfo: String \"HELLDIVERS™ 2\"\n    gameid: Int64 553850\n\n\n\n\n\n","category":"function"},{"location":"ISteamUser/","page":"ISteamUser","title":"ISteamUser","text":"SteamWebAPIs.Player","category":"page"},{"location":"ISteamUser/#SteamWebAPIs.Player","page":"ISteamUser","title":"SteamWebAPIs.Player","text":"struct Player\n    # Public Data\n    steamid::Int\n    communityvisibilitystate::Int\n    profilestate::Int\n    personaname::String\n    profileurl::String\n    avatar::String\n    avatarmedium::String\n    avatarfull::String\n    avatarhash::String\n    lastlogoff::Union{DateTime,Nothing}\n    personastate::Int\n    # Private Data\n    primaryclanid::Int\n    timecreated::DateTime\n    personastateflags::Int\n    loccountrycode::Union{String,Nothing}\n    locstatecode::Union{Int,Nothing}\n    loccityid::Union{Int,Nothing}\n    realname::Union{String,Nothing}\n    gameextrainfo::Union{String,Nothing}\n    gameid::Union{Int,Nothing}\nend\n\nReturn type of get_player_summaries.\n\nFields:\n\nsteamid: 64bit SteamID of the user.\ncommunityvisibilitystate: This represents whether the profile is visible or not, and if it is visible, why you are allowed to see it. Note that because this WebAPI does not use authentication, there are only two possible values returned: 1 - the profile is not visible to you (Private, Friends Only, etc), 3 - the profile is \"Public\", and the data is visible.\nprofilestate: If set, indicates the user has a community profile configured (will be set to '1')\npersonaname: The player's persona name (display name)\nprofileurl: The full URL of the player's Steam Community profile.\navatar: The full URL of the player's 32x32px avatar. If the user hasn't configured an avatar, this will be the default ? avatar.\navatarmedium: The full URL of the player's 64x64px avatar. If the user hasn't configured an avatar, this will be the default ? avatar.\navatarfull: The full URL of the player's 184x184px avatar. If the user hasn't configured an avatar, this will be the default ? avatar.\navatarhash: Unknow.\nlastlogoff: The last time the user was online.\npersonastate: The user's current status. 0 - Offline, 1 - Online, 2 - Busy, 3 - Away, 4 - Snooze, 5 - looking to trade, 6 - looking to play. If the player's profile is private, this will always be \"0\", except is the user has set their status to looking to trade or looking to play, because a bug makes those status appear even if the profile is private.\nprimaryclanid: The player's primary group, as configured in their Steam Community profile.\ntimecreated: The time the player's account was created.\npersonastateflags: Unknow.\nloccountrycode: If set on the user's Steam Community profile, The user's country of residence, 2-character ISO country code\nlocstatecode: If set on the user's Steam Community profile, The user's state of residence.\nloccityid: An internal code indicating the user's city of residence. A future update will provide this data in a more useful way.\nrealname: The player's \"Real Name\", if they have set it.\ngameextrainfo: If the user is currently in-game, this will be the name of the game they are playing. This may be the name of a non-Steam game shortcut.\ngameid: If the user is currently in-game, this value will be returned and set to the gameid of that game.\n\n\n\n\n\n","category":"type"},{"location":"ISteamUser/#Friend-List","page":"ISteamUser","title":"Friend List","text":"","category":"section"},{"location":"ISteamUser/","page":"ISteamUser","title":"ISteamUser","text":"get_friend_list","category":"page"},{"location":"ISteamUser/#SteamWebAPIs.get_friend_list","page":"ISteamUser","title":"SteamWebAPIs.get_friend_list","text":"get_friend_list(steamid::Int)::Dict{Int,DateTime}\n\nSummary: get_friend_list returns the friend Dict of any Steam user, provided their Steam Community profile visibility is set to \"Public\". Nothing will be returned if the profile is private. Key of Dict is steamid, value is the date on which we became friends.\n\nArguments\n\nsteamid: 64 bit Steam ID to return friend list for.\n\nExample\n\njulia> get_friend_list(76561198202322924)\nfriends = Dict(76561198347283942 => Dates.DateTime(\"2021-12-24T06:08:57\")...)\n\n\n\n\n\n","category":"function"},{"location":"QueryLocations/#QueryLocations","page":"QueryLocations","title":"QueryLocations","text":"","category":"section"},{"location":"QueryLocations/","page":"QueryLocations","title":"QueryLocations","text":"get_countries","category":"page"},{"location":"QueryLocations/#SteamWebAPIs.get_countries","page":"QueryLocations","title":"SteamWebAPIs.get_countries","text":"get_countries()::Dict{String,Tuple{Bool,String}}\n\nSummary: get_countries returns a Dict of Countries,key is country code, value is a Tuple, the first element of Tuple indicates whether there has stete, the second is countryname.\n\nExample\n\njulia> get_countries()\ncountries = Dict(\"ES\" => (1, \"Spain\")...)\n\n\n\n\n\n","category":"function"},{"location":"QueryLocations/","page":"QueryLocations","title":"QueryLocations","text":"get_states","category":"page"},{"location":"QueryLocations/#SteamWebAPIs.get_states","page":"QueryLocations","title":"SteamWebAPIs.get_states","text":"get_states(countrycode::String)::Dict{String,String}\n\nSummary: get_states returns a Dict of States by countrycode, key is state code, value is state name.\n\nArguments\n\ncountrycode: Country code to be queried.\n\nExample\n\njulia> get_states(\"CN\")\nDict(\"24\" => \"Shanxi\"...)\n\n\n\n\n\n","category":"function"},{"location":"QueryLocations/","page":"QueryLocations","title":"QueryLocations","text":"get_cities","category":"page"},{"location":"QueryLocations/#SteamWebAPIs.get_cities","page":"QueryLocations","title":"SteamWebAPIs.get_cities","text":"get_cities(countrycode::String,statecode::String)::Dict{Int,String}\n\nSummary: get_cities returns a Dict of Cities by countrycode and statecode, key is city code, value is city name.\n\nArguments\n\ncountrycode: Country code to be queried.\nstatecode: State code to be queried.\n\nExample\n\njulia> get_cities(\"CN\",\"01\")\ncites = Dict(10398 => \"Wucheng\"...)\n\n\n\n\n\n","category":"function"},{"location":"ISteamUserStats/#Achievement-Percentage","page":"ISteamUserStats","title":"Achievement Percentage","text":"","category":"section"},{"location":"ISteamUserStats/","page":"ISteamUserStats","title":"ISteamUserStats","text":"get_global_achievement_percentages_for_app","category":"page"},{"location":"ISteamUserStats/#SteamWebAPIs.get_global_achievement_percentages_for_app","page":"ISteamUserStats","title":"SteamWebAPIs.get_global_achievement_percentages_for_app","text":"get_global_achievement_percentages_for_app(gameid::Int)::Dict{String,Float16}\n\nSummary: get_global_achievement_percentages_for_app returns on global achievements overview of a specific game in percentages.\n\nArguments\n\ngameid: GameID to retrieve the achievement percentages for.\n\nExample\n\njulia> get_global_achievement_percentages_for_app(440)\nDict{String, Float16}(\"TF_MAPS_DOOMSDAY_PUSH_INTO_EXHAUST\" => 7.9...)\n\n\n\n\n\n","category":"function"},{"location":"ISteamUserStats/#Player_Achievements","page":"ISteamUserStats","title":"Player_Achievements","text":"","category":"section"},{"location":"ISteamUserStats/","page":"ISteamUserStats","title":"ISteamUserStats","text":"get_player_achievements","category":"page"},{"location":"ISteamUserStats/#SteamWebAPIs.get_player_achievements","page":"ISteamUserStats","title":"SteamWebAPIs.get_player_achievements","text":"get_player_achievements(steamid::Int,appid::Int;l::String)::PlayerAchievements\n\nSummary: get_player_achievements returns a list of achievements for this user by app id.\n\nArguments\n\nsteamid: 64 bit Steam ID to return friend list for.\nappid: The ID for the game you're requesting.\nl: Language. If specified, it will return language data for the requested language.\n\nExample\n\njulia> dump(get_player_achievements(76561198309475951,553850;l=\"japanese\"))\nSteamWebAPIs.PlayerAchievements\n  gameName: String \"HELLDIVERS™ 2\"\n  achievements: Array{SteamWebAPIs.Achievement}((38,))\n    1: SteamWebAPIs.Achievement\n      apiname: String \"1\"\n      achieved: Bool false\n      unlocktime: Nothing nothing\n      name: String \"ヘルダイブ\"\n      description: String \"難易度がエクストリーム以上のミッションを、誰も死ぬことなく完了する\"\n    2: SteamWebAPIs.Achievement\n      apiname: String \"2\"\n      achieved: Bool false\n      unlocktime: Nothing nothing\n      name: String \"武器はいらない\"\n      description: String \"難易度がハード以上のミッションを、誰一人メインウェポンまたは支援武器を発砲せずに完了する\"\n    ...\n    37: SteamWebAPIs.Achievement\n      apiname: String \"37\"\n      achieved: Bool true\n      unlocktime: DateTime\n        instant: Dates.UTInstant{Millisecond}\n          periods: Millisecond\n            value: Int64 63846202326000\n      name: String \"夜になると現れる\"\n      description: String \"夜間にミッションから離脱する\"\n    38: SteamWebAPIs.Achievement\n      apiname: String \"38\"\n      achieved: Bool true\n      unlocktime: DateTime\n        instant: Dates.UTInstant{Millisecond}\n          periods: Millisecond\n            value: Int64 63846249161000\n      name: String \"管理民主主義を広めよ\"\n      description: String \"１つのミッション中に敵を150体倒す\"\n\n\n\n\n\n","category":"function"},{"location":"ISteamUserStats/","page":"ISteamUserStats","title":"ISteamUserStats","text":"SteamWebAPIs.PlayerAchievements","category":"page"},{"location":"ISteamUserStats/#SteamWebAPIs.PlayerAchievements","page":"ISteamUserStats","title":"SteamWebAPIs.PlayerAchievements","text":"struct PlayerAchievements\n    gameName::String\n    achievements::Vector{Achievement}\nend\n\nReturn type of get_player_achievements.\n\nFields:\n\ngameName: Name of the game.\nachievements: Vector of Achievement.\n\n\n\n\n\n","category":"type"},{"location":"ISteamUserStats/","page":"ISteamUserStats","title":"ISteamUserStats","text":"SteamWebAPIs.Achievement","category":"page"},{"location":"ISteamUserStats/#SteamWebAPIs.Achievement","page":"ISteamUserStats","title":"SteamWebAPIs.Achievement","text":"struct Achievement\n    apiname::String\n    achieved::Bool\n    unlocktime::Union{DateTime,Nothing}\n    name::Union{String,Nothing}\n    description::Union{String,Nothing}\nend\n\nAchievement item.\n\nFields:\n\napiname: The API name of the achievement.\nachieved: Whether or not the achievement has been completed.\nunlocktime: Date when the achievement was unlocked.\nname: Localized achievement name.\ndescription: Localized description of the achievement.\n\n\n\n\n\n","category":"type"},{"location":"#SteamWebAPIs.jl","page":"SteamWebAPIs.jl","title":"SteamWebAPIs.jl","text":"","category":"section"},{"location":"","page":"SteamWebAPIs.jl","title":"SteamWebAPIs.jl","text":"Steam Web API wrapper for Julia","category":"page"},{"location":"#API-Key","page":"SteamWebAPIs.jl","title":"API Key","text":"","category":"section"},{"location":"","page":"SteamWebAPIs.jl","title":"SteamWebAPIs.jl","text":"Please apply for your steam api key first. Then paste your api key at $HOME/.steam/apikey.txt. Or save api key to STEAM_KEY environment variable.","category":"page"},{"location":"#Initialization","page":"SteamWebAPIs.jl","title":"Initialization","text":"","category":"section"},{"location":"","page":"SteamWebAPIs.jl","title":"SteamWebAPIs.jl","text":"Before calling any interface that requires an API key, you need to initialize the Steam Web API key with init_key(). Otherwise, you can only call interfaces that do not require an API key.","category":"page"},{"location":"","page":"SteamWebAPIs.jl","title":"SteamWebAPIs.jl","text":">julia init_key()","category":"page"},{"location":"#Implemented-functions","page":"SteamWebAPIs.jl","title":"Implemented functions","text":"","category":"section"},{"location":"","page":"SteamWebAPIs.jl","title":"SteamWebAPIs.jl","text":"get_news_for_app\nget_player_summaries\nget_global_achievement_percentages_for_app\nget_countries\nget_states\nget_cities\nget_friend_list\nget_player_achievements","category":"page"}]
}
