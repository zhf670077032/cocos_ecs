--[[

@file:pizza_material.lua
@source xls:./excel/Pizza.xlsx
@sheet name:S__pizza_material
@brief:
@author:AUTHOR

]]--

--#region 类型注解

---@class PizzaMaterial @类型注解
---@field public index			number		@序列
---@field public activityType	number		@活动类型
---@field public item			number		@熔铸材料道具ID
---@field public value			number		@熔铸价值
---@field public range			number[]		@熔铸时放入的数量范围 最小值;最大值

--#endregion


---@type table<number, PizzaMaterial>
local pizza_material = {
[1] = {index=1,activityType=1,item=816443,value=10,range={1,10}},
[2] = {index=2,activityType=1,item=816444,value=50,range={1,10}},
[3] = {index=3,activityType=1,item=816445,value=100,range={1,10}}
};return pizza_material
