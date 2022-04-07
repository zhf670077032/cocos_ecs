--[[

@file:pizza_titleReplace.lua
@source xls:./excel/Pizza.xlsx
@sheet name:C__pizza_titleReplace
@brief:
@author:AUTHOR

]]--

--#region 类型注解

---@class PizzaTitleReplace @类型注解
---@field public index		number		@序列
---@field public key		string		@对照文字
---@field public type		number		@类型ID
---@field public replace	string		@替换文字

--#endregion


---@type PizzaTitleReplace[]
local pizza_titleReplace = {
[1] = {index=1,key="pizza_text_25",type=1,replace="pizza_text_25"},
[2] = {index=2,key="pizza_activityname_01",type=1,replace="pizza_activityname_01"},
[3] = {index=3,key="egg_collect_title_03",type=1,replace="egg_collect_title_03"},
[4] = {index=4,key="pizza_text_11",type=1,replace="pizza_text_11"},
[5] = {index=5,key="pizza_text_20",type=1,replace="pizza_text_20"},
[6] = {index=6,key="pizza_text_12",type=1,replace="pizza_text_12"},
[7] = {index=7,key="pizza_text_21",type=1,replace="pizza_text_21"},
[8] = {index=8,key="pizza_text_14",type=1,replace="pizza_text_14"},
[9] = {index=9,key="pizza_text_24",type=1,replace="pizza_text_24"},
[10] = {index=10,key="pizza_text_08",type=1,replace="pizza_text_08"},
[11] = {index=11,key="pizza_text_15",type=1,replace="pizza_text_15"},
[12] = {index=12,key="pizza_text_16",type=1,replace="pizza_text_16"},
[13] = {index=13,key="pizza_text_17",type=1,replace="pizza_text_17"},
[14] = {index=14,key="pizza_text_18",type=1,replace="pizza_text_18"},
[15] = {index=15,key="pizza_text_26",type=1,replace="pizza_text_26"},
[16] = {index=16,key="pizza_text_27",type=1,replace="pizza_text_27"},
[17] = {index=17,key="pizza_text_28",type=1,replace="pizza_text_28"},
[18] = {index=18,key="pizza_text_09",type=1,replace="pizza_text_09"},
[19] = {index=19,key="pizza_text_10",type=1,replace="pizza_text_10"},
[20] = {index=20,key="pizza_text_13",type=1,replace="pizza_text_13"},
[21] = {index=21,key="pizza_text_19",type=1,replace="pizza_text_19"},
[22] = {index=22,key="pizza_text_22",type=1,replace="pizza_text_22"},
[23] = {index=23,key="pizza_text_23",type=1,replace="pizza_text_23"}
};return pizza_titleReplace
