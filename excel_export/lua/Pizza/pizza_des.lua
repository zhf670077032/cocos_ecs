--[[

@file:pizza_des.lua
@source xls:./excel/Pizza.xlsx
@sheet name:C__pizza_des
@brief:
@author:AUTHOR

]]--

--#region 类型注解

---@class PizzaDes @类型注解
---@field public index	number		@战甲ID
---@field public name	string		@战甲名称
---@field public image	string		@战甲icon名称

--#endregion


---@type table<number, PizzaDes>
local pizza_des = {
[1] = {index=1,name="pizza_name_01",image="pizzadazuozhang_tudoupizza.png"},
[2] = {index=2,name="pizza_name_02",image="pizzadazuozhang_jidanpizza.png"},
[3] = {index=3,name="pizza_name_03",image="pizzadazuozhang_zhishipizza.png"},
[4] = {index=4,name="pizza_name_04",image="pizzadazuozhang_roumopizza.png"},
[5] = {index=5,name="pizza_name_05",image="pizzadazuozhang_xiangchangpizza.png"},
[6] = {index=6,name="pizza_name_06",image="pizzadazuozhang_hunhepizza.png"},
[7] = {index=7,name="pizza_name_07",image="pizzadazuozhang_zhaiyuepizza.png"}
};return pizza_des
